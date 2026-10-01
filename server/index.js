import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import express from "express";
import router from './routes/user.route.js'
import { middleware1, loggerDuration, authenticate } from "./middlewares/middleware1.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");

});


// const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
// console.log(currentDirectory);
// const logsDirectory = path.resolve(currentDirectory, "../LOGS");
// console.log(logsDirectory);
// const debugLogPath = path.join(logsDirectory, "debug.log");
// console.log(debugLogPath);
// console.log(path);
// const filename = path.basename('/users/file.txt');
// console.log(filename);
// Get filename without extension
// const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
// console.log(filenameWithoutExt);


// // Get the current module's URL
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log('ES Module file path:', __filename);
// console.log('ES Module directory:', __dirname);

// // console.log(import);
// console.log(import.meta);
// console.log(import.meta.url)

// console.log(path.join('/usrs', 'logs', 'index.js'));
// // 1. Resolve relative to current working directory
// console.log('file: --', path.resolve('file.txt'));

// // 2. Resolve with multiple segments
// console.log("resolved: --", path.resolve('/users', 'docs', 'file.txt'));
// console.log("CWD- ", process.cwd());

// const pathInfo = path.parse('/users/docs/file.txt');
// console.log(pathInfo);

// console.log(path.relative('/users/docs/file.txt', '/users/images/photo.jpg'));



//----path.relative()
//-------path.resolve()

// // Get the directory name of the current module
// console.log('Directory name:', __dirname);

// // Get the file name of the current module
// console.log('File name:', __filename);


//middlewares

// fetch("http://localhost:3000/users", {
//     headers : {
//         Authorization: "Bearer my token"
//     }
// });

//mounting the router
app.use('/users', router);


app.use(errorHandler);

    // app.get("/api/form", (req, res) => {
    //     res.json({
    //         message: "This is the form API endpoint",
    //     });
    // });


//middlewares
// app.use(express.raw({type:"application/pdf", limit:"10mb"}));

// app.post("/api/form", (req, res) => {
//     if (!req.body || !Buffer.isBuffer(req.body)) {
//         return res.status(400).send("Request body is missing or not a PDF. Ensure Content-Type: application/pdf is set.");
//     }

//     console.log(req.body);

//     const savedPath = path.resolve("./uploads/uploaded_file.pdf");
//     // res.json({
//     //     message: "Form data received successfully",
//     // });
//     fs.writeFile(savedPath, req.body, (err) => {
//         if(err) return res.status(500).send("Failed to save file");

//         res.setHeader("Content-Type", "application/pdf");
//         res.sendFile(savedPath);
//     })
//     // res.sendFile("D:/Random/node-pra/server/haj_app_form1781690364.pdf", (err) => {
//     //     if(err){
//     //         console.log(err);
//     //         res.status(500).send("Error occurred while sending the file.");
//     //     }else{
//     //         console.log("File sent successfully.");
//     //     };
//     // });
// });

app.listen(3000, () => {
    console.log("Server is running fine on http://localhost:3000");
});

