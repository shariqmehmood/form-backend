const loginScheema = require("../model/login");
const bcrypt = require("bcryptjs");
const UserScheema = require("../model/sign-up");
const { emit } = require("../model/login");

module.exports = {
    createLogindata: async (req, res) => {
        try {
            let {Email,Password}=req.body
            console.log(req.body.Password)

            const salt = await bcrypt.genSalt(10);
            Hashpasword = await bcrypt.hash(req.body.Password, salt);

            let email=req.body.Email;
            console.log(email);
            
            
            let checkEmail = await UserScheema.findOne({ Email: email })
            // console.log(checkEmail, "email is found");
            

          
            
         if (!checkEmail ) {
            return res.status(403).send({
                status: 403,
                sucess: false,
                msg: "Email not found"
            })
        }
        let checkpassword = await bcrypt.compare(req.body.Password, checkEmail.Password);

          if (!checkpassword ) {
                return res.status(404).send({
                    status: 404,
                    sucess: false,
                    msg: "incorrect password"
                })
            }
          let data = new loginScheema({
                Email: req.body.Email,
                Password: req.body.Password
            })
            console.log(data,'data')
            res.send({
                status: 200,
                sucess: true,
                msg: "login sucses",
            })           
        }
        catch (err) {
            console.log(err)

            res.send({
                status: 400,
                sucess: false,
                msg: "server err",
            })           

        }
    }
}
