import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001; 

app.use(
  cors({
    origin: ["http://localhost:3000", "https://obo-backend.onrender.com"],
    credentials: true, 
  })
);

app.use(express.json());
app.use("/auth", authRouter);

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



app.post('/users', async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    
    try {
        const user = await prisma.user.create({
        data: { email, name, password },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'User creation failed' });
    }
    });

    app.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
    });


    app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Obo backend!");
    });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
