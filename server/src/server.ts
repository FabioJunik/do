import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})

app.listen(5000, () => console.log('Server is runnig in port 5000'))

