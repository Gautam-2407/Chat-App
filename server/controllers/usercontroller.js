const users = require("../models/userSchema");
const jwt = require('jsonwebtoken');
const SECRET_KEY ='GAUTAM';

exports.userregister = async (req, res) => {
    const {name, phone, email, gender }=req.body;

    if (!name || !phone || !email|| !gender){
      return  res.status(401).json({message:"Fill all fields"})
    }

    try{
      
      const preuser = await users.findOne({phone:phone});

      if (preuser){
        return   res.status(200).json("User already exist")
      }
      else{
        console.log(req.body);
        const newuser = new users({
          name,
          phone,
          email,
          gender,
          
        });
        
        const storeData= await newuser.save();

        res.status(200).json(storeData);
      }
    } catch (error) {
      console.log(error)
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.userlogin = async (req, res) => {
     const { phone } = req.body;
    //  const { role} = req.body;
  
     const user = await users.findOne({ phone: phone });
     
     try{

       if (!user) {
         return res.send("Phone No. not found")
        }
        else {
          if (user.role === "Super-Admin") {
          const token = jwt.sign({phone:user.phone }, SECRET_KEY);
          const new_token = token + "1";

          res.status(201).json({ exists: true , user:user, token:new_token});
          // console.log("Phone No. Match");
          }

          else if (user.role === "admin") {
            const token = jwt.sign({phone:user.phone }, SECRET_KEY);
            const new_token = token + "2";
            res.status(201).json({ exists: true , user:user, token:new_token});}

            else if (user.role === "user") {
              const token = jwt.sign({phone:user.phone }, SECRET_KEY);
              const new_token = token + "3";
              res.status(201).json({ exists: true, user:user, token:new_token});}
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  