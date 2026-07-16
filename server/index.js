import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import express from "express";
import router from './routes/user.route.js'

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

//middlewares

//mounting the router
app.use('/users', router);

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

