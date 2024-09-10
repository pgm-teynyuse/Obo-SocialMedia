// src/routes/auth.ts
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import cors from "cors";

const prisma = new PrismaClient();
const authRouter = express.Router();


authRouter.post("/register", async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    // Check of de gebruiker al bestaat
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Wachtwoord hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Maak de gebruiker aan
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword, // Sla het gehashte wachtwoord op
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


// Login route
authRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // JWT token genereren
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token, id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default authRouter;
