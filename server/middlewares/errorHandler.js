import {AppError} from '../errors/AppError.js';
import {logError} from '../utils/logger.js';

export const errorHandler = async (err , req, res, next) => {
    console.error(err.stack);

    //first log the error
    await logError(err, req);

    //if application level error showing here
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            error : {
                code : err.code,
                message : err.message
            }
        });
    }

    return res.status(500).json({
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong"
        }
    });
}