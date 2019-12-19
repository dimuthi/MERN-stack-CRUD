const express = require('express');
const StudentRoutes = express.Router();
let Student = require('./studentModel');


StudentRoutes.route('/add').post(function (req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'student added successfully' });
            
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

StudentRoutes.route('/').get(function (req, res) {
    Student.find(function (err, students){
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
});

StudentRoutes.route('/edit/:id').get(function(req,res){
    let id=req.params.id;
    Student.findById(id,function(err,student){
        res.json(student);
    })
});

StudentRoutes.route('/update/:id').post(function(req,res){
    Student.findById(req.params.id,function(err,student){
        if(!business){
            res.status(400).send("unable to update the database");
        }
        else{
            student.student_name=req.body.student_name;
            student.institute=req.body.institute;
            student.age=req.body.age;

            student.save().then(student=>{
                res.json("Updated!");
            })
            .catch(err =>{
                res.status(400).send("unable to update");
            });

        }


    });
});

StudentRoutes.route('/delete/:id').get(function(req,res){
    Student.findByIdAndRemove({_id:req.params.id},function(err,student){
        if(err) res.json(err);
        else res.json("deleted");
    });
});

module.exports=StudentRoutes;
