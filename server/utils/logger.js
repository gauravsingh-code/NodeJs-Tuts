import {appendFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const logsDirectory = path.resolve(currentDirectory, "../LOGS");
const debugLogPath = path.join(logsDirectory, "debug.log");

export const logError = async (err, req) => {
    const entry = {
        timestamp : new Date().toISOString(),
        level : "error",
        name : err.name,
        message : err.message,
        code : err.code ?? "INTERNAL_SERVER_ERROR",
        statusCode : err.statusCode ?? 500,
        method : req.method,
        path : req.originUrl,
        stack : err.stack
    };

    try{
        await mkdir(logsDirectory, {recursive:true});
        await appendFile(debugLogPath, `${JSON.stringify(entry)}\n`, "utf8");
    }catch(loggingError){
        console.error("Failed to write error log:", loggingError);
    }
}