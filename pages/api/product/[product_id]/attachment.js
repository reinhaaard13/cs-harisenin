import React from "react";
import nextConnect from "next-connect";

import db from "../../../../models";
import fileUpload from "../../../../middleware/file-upload";

const handler = nextConnect()
	.use(fileUpload)
	.post(async (req, res) => {
		const { product_id } = req.query;

		const trx = await db.sequelize.transaction();

		const product = await db.Product.findOne({
			where: {
				id: product_id,
			},
		});

		let assets = [];
		try {
			for (const asset of req.file) {
				assets.push(
					await product.createAsset(
						{
							name: asset.original_filename,
							path: asset.secure_url,
							size: asset.bytes,
						},
						{
							transaction: trx,
						}
					)
				);
			}
			await trx.commit();
      return res.status(200).json(assets);
		} catch (err) {
			await trx.rollback();
			return res.status(400).json({
				error: err.message,
				message: "Error creating product",
			});
		}
	});

export default handler;

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};