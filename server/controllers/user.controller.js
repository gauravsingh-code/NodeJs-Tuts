import { getAllUsers, getUserById as getUserByIdFromService } from '../services/user.service.js';
import PDFDocument from 'pdfkit';
import { AppError } from '../errors/AppError.js';
import redisClient from '../config/redis.js';

export const getUsers = async (req, res, next) => {

    try {
        const CAHCE_KEY = "users:all";
        const CACHE_TTL = 3600;

        let cachedUsers = null;

        try {
            cachedUsers = await redisClient.get(CAHCE_KEY);
        } catch (cacheErr) {
            console.warn("Redis GET failed, failing back to DB:", cacheErr.message);
        }

        const dir = await redisClient.configGet('dir');
        const rdbFile = await redisClient.configGet('dbfilename');

        console.log("📁 Directory path :", dir);
        console.log("💾 RDB File name  :", rdbFile);


        if (cachedUsers) {
            console.log("Cache Hit Successful...");
            return res.status(200).json(JSON.parse(cachedUsers));
        }

        console.log("Cache Miss...");
        const users = await getAllUsers();

        if (!users || users.length === 0) {
            throw new AppError("User not found", 404, "USER_NOT_FOUND");
        }

        try {
            await redisClient.set(CAHCE_KEY, JSON.stringify(users), {
                EX: CACHE_TTL
            });
        } catch (cacheErr) {
            console.warn("REDIS SET failed:", cacheErr.message);
        }

        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(typeof id);
        // console.log("Req: ", req);
        console.log("Next: ", next);
        const idNum = Number(id);
        console.log("IdNum: ", idNum);
        const user = await getUserByIdFromService(idNum);
        console.log("User: ", user);
        if (user === undefined) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Get user by id:", err.message)
        next(err);
    }
}

export const getUserByIdDownload = async (req, res, next) => {
    try {
        const userId = Number(req.params.id);

        const user = await getUserByIdFromService(userId);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
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
    } catch (err) {
        console.error("Error pdf: ", err.message);
    }
}