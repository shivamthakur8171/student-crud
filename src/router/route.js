const express = require("express");
const router =new express.Router();
const Student = require("../models/students");

// to check the route is working properly
// router.get("/",(req, res) => {
//     res.send("hiiii");
// })

//create a new student 

// router.post("/students",(req, res) =>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     // using promises 

//     // user.save().then(() =>{
//     //     res.status(201).send(user)
//     // }).catch((e) =>{
//     //     res.status(400).send(e);
//     // })
// });

// async await
router.post("/students",async(req,res) =>{
    
    try{
        // console.log(req.body);
        const user = new Student(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);

    }catch(e){res.status(400).send(e);}
}) 

//read the data of student

router.get("/students",async(req,res) =>{
    try{
        const studentsdata = await Student.find();
        res.send(studentsdata);
    }catch(e){res.status(400).send(e);}
})

//get the individual sutudents data using id

router.get("/students/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
       const studentData = await Student.findById(_id);
       if(!studentData){
           return res.status(404).send();
       }else{
        res.send(studentData);
       }
      
    }catch(e){
        res.status(500).send(e);
    }
})

//update the student by its id 

router.patch("/students/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const updatestudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updatestudent)
    }catch(e){
        res.status(404).send(e);
    }
})

// delete the student records
router.delete("/students/:id",async(req, res)=>{
    try{
        const deletestudent = await Student.findByIdAndDelete(req.params.id);
        console.log(deletestudent);
        if(!req.params.id){
            return res.status(404).send();
        }else{
            res.send(deletestudent);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;