import nextConnect from "next-connect";
import axios from "axios";
import multer from "multer";
import FormData from "form-data";

const upload = multer();

const middleware = nextConnect()
	.use(upload.any())
	.use(async (req, res, next) => {
		const { files } = req;

		const formData = new FormData();

		formData.append("file", files[0].buffer, {
			filename: files[0].originalname,
		});
		formData.append("upload_preset", "hs_casestudy");

		const response = await axios.post(
			"https://api.cloudinary.com/v1_1/reinhaaard/image/upload",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);

		// console.log(response.data);

		req.file = response.data;
		next();
	});

export default middleware;
