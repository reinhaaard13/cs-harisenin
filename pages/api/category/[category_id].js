import nextConnect from "next-connect";

import db from "../../../models";

const handler = nextConnect()
	.get(async (req, res) => {
		const { category_id } = req.query;

		let category
		try {
			category = await db.Category.findOne({
				where: {
					id: category_id
				},
				include: [
					{ model: db.Product, include: [{ model: db.Asset }] },
          { model: db.Asset },
				]
			})
		} catch (err) {
			return res.status(500).json({ error: err.message })
		}
		return res.status(200).json(category)
	})


export default handler;