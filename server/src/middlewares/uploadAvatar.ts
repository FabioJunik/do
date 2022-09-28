import multer from 'multer';

const imgExtension = ["image/png", "image/jpeg", "image/jpg"];

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './tmp/uploads/avatar')
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})


const uploadAvatar = multer({
    storage,
    fileFilter: (req, file, callback) => {
        const imgExtensionFound = imgExtension.find(ext => ext == file.mimetype);

        if (imgExtensionFound) {
            return callback(null, true)
        }

        return callback(null, false)
    }
})

export { uploadAvatar }
