// const { required } = require("nodemon/lib/config");

const UserScheema = require("../model/sign-up");
const bcrypt = require("bcryptjs");

module.exports = {
    createUserData: async (req, res) => {
        try {

            const salt = await bcrypt.genSalt(10);
            const Hashpasword = await bcrypt.hash(req.body.Password, salt);

            const Email=req.body.Email;


            let cheakEamil = await UserScheema.findOne({ Email: Email }).exec()
            console.log(cheakEamil,"cheak email")
            if (cheakEamil) {
              return  res.send({
                    status: 400,
                    sucess: false,
                    msg: "email is alredy in Use",
                })
            }

            // ////////////




            let data = new UserScheema({
                Name: req.body.Name,
                Email: req.body.Email,
                Password: Hashpasword,
                Number: req.body.Number

            })
            //////////////



            await data.save()
           return res.send({
                status: 200,
                sucess: true,
                msg: "user Created",
            })            // console.log(data)

        }
        // 

        // 
    

        catch (err) {
           return res.send({
                status: 500,
                sucess: false,
                msg: "Server Error",
            })
        }

    }
    
}