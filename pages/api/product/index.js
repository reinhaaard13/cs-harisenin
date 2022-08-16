import nextConnect from "next-connect";

import db from "../../../models";
import fileUpload from "../../../middleware/file-upload";

const handler = nextConnect()
	.get(async (req, res) => {

		try {
			const products = await db.Product.findAll({
				include: [{ model: db.Asset }]
			});
			return res.status(200).json(products);
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	})
	.use(fileUpload)
	.post(async (req, res) => {
		const { product_name, product_slug, price, description, category_id } = req.body;

		const trx = await db.sequelize.transaction();

    let newProduct;
		try {
			newProduct = await db.Product.create(
				{
					product_name,
					product_slug,
					price,
					description,
				},
				{
					transaction: trx,
				}
			);

			const category = await db.Category.findOne({
				where: {
					id: category_id,
				},
			})
			await newProduct.addCategory(category, { transaction: trx });
		} catch (err) {
			await trx.rollback();
			return res.status(400).json({
				error: err.message,
				message: "Error creating product",
			});
		}

    let newAsset
		try {
			newAsset = await newProduct.createAsset(
				{
					name: product_name,
					path: req.file.secure_url,
					size: req.file.bytes,
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

		await trx.commit();

		return res
			.status(200)
			.json({
				message: "Product created",
				product: newProduct,
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
