const users = require("../models/userSchema");

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
  
     const user = await users.findOne({ phone: phone });
     
     try{

       if (!user) {
         return res.send("Phone No. not found")
        }
        else {
          res.status(201).json({ exists: true ,user});
          console.log("Phone No. Match");
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  