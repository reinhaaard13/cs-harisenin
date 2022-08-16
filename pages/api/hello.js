import nextConnect from "next-connect"
const db = require('../../models/index')

const handler = nextConnect()
  .get(async (req, res) => {
    await db.sequelize.sync({alter: true})
    const something = await db.Asset.findAll()
    // console.log(something);
    return res.status(200).json({ message: "Hello", payload: something })
  })

export default handler