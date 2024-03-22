const userModels = require("../Models/userModels");
const bcrypt = require("bcrypt");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        let createdata = await userModels.create(data);
        res.status(201).send({ message: "Successfully created", createdata });

    } catch (error) {
        res.status(500).send({ message: "Data not founnd" });
    }
};

const signup = async function (req, res) {
    try {
        let { firstName, lastName, email, password, phoneNumber, address } = req.body;
        if (!firstName || !lastName || !email || !password || !phoneNumber || !address) {
            res.status(400).send({ msg: "Invalid Credential" })
        }
        let checkEmailExist = await userModels.findOne({ email: email });
        if (checkEmailExist) {
            res.send({ msg: "email already exist" });

        }
        const hasdedpassword = await bcrypt.hash(password, 10)


        const newuser = new userModels({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hasdedpassword,
            phoneNumber: phoneNumber,
            address: address
        })
        await newuser.save();
        res.status(200).send({ msg: "User registered sucessfully" });
    } catch (error) {

        res.status(500).send({ msg: "server error" });
    }

};

module.exports = { createUser, signup };
