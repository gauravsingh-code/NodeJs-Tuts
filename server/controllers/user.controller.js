import {getAllUsers, getUserById as getUserByIdFromService} from '../services/user.service.js';
import PDFDocument from 'pdfkit';

export const getUsers =  async (req, res, next) => {

    try{
        const users =  await getAllUsers();

        res.status(200).json(users);
    } catch(err){
        console.error(err.message);
        next(err);
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const id = req.params.id;
        console.log(typeof id);
        // console.log("Req: ", req);
        console.log("Next: ", next);
        const idNum = Number(id);
        console.log("IdNum: ", idNum);
        const user = await getUserByIdFromService(idNum);
        console.log("User: ", user);
        if(user === undefined){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    }catch(err){
        console.error("Get user by id:", err.message)
        next(err);
    }
}

export const getUserByIdDownload = async (req, res, next) => {
    try{
        const userId = Number(req.params.id);

        const user = await getUserByIdFromService(userId);
        
        if(!user){
            return res.status(404).json({
                message : "User Not Found"
            });
        }
        
        const doc = new PDFDocument();

        //now setting the header of res so browser knows that this wants a pdf
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Dispositon', `attachment; filename="user-$${userId}-profile.pdf"`);

        res.send(htmltemplate1);
        //pipe the the response of pdf into the res 
        // doc.pipe(res);

        // //setting the header
        // doc.fontSize(20).text('User Profile Summary', {align : 'center'});
        // doc.moveDown();
        // doc.fontSize(14).text(`User Id : ${user.id}`);
        // doc.text(`User Name: ${user.name}`);
        // doc.text(`Email : ${user.email}`);
        // doc.text(`Role :  ${user.role}`);
        // doc.text(`Status: ${user.isActive}`);

        // console.log("Doc: ", doc);
        // doc.end();
    }catch(err){
        console.error("Error pdf: ", err.message);
    }
}