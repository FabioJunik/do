import { Router } from "express";
import { uploadAvatar } from "../middlewares/uploadAvatar";



const uploadRoutes = Router();

uploadRoutes.post("/avatar", uploadAvatar.single('avatar'), async (request, response) => {
    const { file } = request;

    if (file) {
        return response.json({ message: "success" });
    }

    return response.status(400).json({ error: "Can't upload image" });
})




export { uploadRoutes }