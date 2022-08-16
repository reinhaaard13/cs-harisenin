import nextConnect from "next-connect";

import db from "../../../models";

const handler = nextConnect()
	.get(async (req, res) => {
		const { product_id } = req.query;

		let product
		try {
			product = await db.Product.findOne({
				where: {
					id: product_id
				},
				include: [
          { model: db.Asset },
          { model: db.Category, attributes: ["category_name", "category_slug"] },
				]
			})
		} catch (err) {
			return res.status(500).json({ error: err.message })
		}
		return res.status(200).json(product)
	})


export default handler;