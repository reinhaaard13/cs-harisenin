import nextConnect from "next-connect";

import db from "../../../models";
import fileUpload from "../../../middleware/file-upload";

const handler = nextConnect()
	.get(async (req, res) => {
		let category
		try {
			category = await db.Category.findAll({
				include: [
					{ model: db.Asset },
				]
			})
		} catch (err) {
			return res.status(500).json({ error: err.message })
		}
		return res.status(200).json(category)
	})
	.use(fileUpload)
	.post(async (req, res) => {
		const { category_name, category_slug } = req.body;

		const trx = await db.sequelize.transaction();

    let newAsset
		try {
			newAsset = await db.Asset.create(
				{
					name: req.file[0].original_filename,
					path: req.file[0].secure_url,
					size: req.file[0].bytes,
				},
				{
					transaction: trx,
				}
			);
		} catch (err) {
      console.log(err);
			await trx.rollback();
			return res.status(400).json({
				error: err.message,
				message: "Error creating asset",
			});
		}

    let newCategory;
		try {
			newCategory = await newAsset.createCategory(
				{
					category_name,
					category_slug,
				},
				{
					transaction: trx,
				}
			);
		} catch (err) {
			await trx.rollback();
			return res.status(400).json({
				error: err.message,
				message: "Error creating Category",
			});
		}

		await trx.commit();

		return res
			.status(200)
			.json({
				message: "Category created",
				category: newCategory,
				asset: newAsset,
			});
	});

export default handler;

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
