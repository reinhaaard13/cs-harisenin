import nextConnect from "next-connect";
import axios from "axios";
import multer from "multer";
import FormData from "form-data";

const upload = multer();

const middleware = nextConnect()
	.use(upload.array("assets"))
	.use(async (req, res, next) => {
		const { files } = req;

		// console.log(files);
		let assets = [];
		for (const file of files) {
			const formData = new FormData();

			formData.append("file", file.buffer, {
				filename: file.originalname,
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

			assets.push(response.data);
		}
		req.file = assets;
		next();
	});

export default middleware;
