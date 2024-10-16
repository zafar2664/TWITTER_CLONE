import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

// user Register
export const Register = async ( req, res) => {
    try {
        const {name, username, email, password} = req.body;
        // basic validation
        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All fields are required.",
                success:false
            })
        }
        // user validation / same user or not, not create multiple user from one email
        const user =  await User.findOne({email} );
        if(user){
            return res.status(401).json({
                message:"User already exist.",
                success:false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);
        await User.create({
            name,
            username,
            email,
            password:hashedPassword //hashedpassword means no one can see password
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

//isko chalane ke liye api chahiye, jo routes ke andar humlog bnayenge

// for Login
export const Login = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"All fields are required.",
                success:false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Incorrect email or password.",
                success:false
            })
        }
        // password matching
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        //if matched then generate token
        const tokenData = {
            userId:user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn:"1d"})
        return res.status(201).cookie("token", token, {expiresIn:"1d", httpOnly:true}).json({
            message:`Welcome back ${user.name}`,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}
// ab route ke andar jaa kar 

// let implement LOGOUT
export const Logout = (req,res) => {
    return res.cookie("token", "", {expiresIn:new Date(Date.now())}).json({
        message:"user logged out successfully.",
        success:true
    })
}
//ab isko router me use karna hai