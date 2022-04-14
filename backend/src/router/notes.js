const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');




// ROUTE-1 : Get All the Notes using : GET "/api/notes/fetchallnotes". login required
router.get('/fetchallnotes', fetchuser, async (req,res)=>{
    try {
        const notes = await Note.find({user:req.user.id});
        res.json(notes);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal surver error");
    }
   
})

// ROUTE-2 : Add a new Notes using : POST "/api/notes/addnote". login required
router.post('/addnote', fetchuser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('message','message must be atleast 5 characters').isLength({ min: 5 }),
], async (req,res)=>{

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {tag, title, message} = req.body;

        const note = new Note({
            tag, title, message,  user: req.user.id
        })
        // save is the function to save anything into a database 
        const noteSave= await note.save();
        res.json(noteSave);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal surver error");
    }
   
})


// ROUTE-3 : Update an existing Notes using : PUT "/api/notes/updatenote". login required
router.put('/updatenote/:id', fetchuser, async (req,res)=>{
    try {
        const {title,message,tag} = req.body;
        //  Create a newNote object
        const newNote = {};
        if (title) {newNote.title=title};
        if (message) {newNote.message=message};
        if (tag) {newNote.tag=tag};
    
        // find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
    
        if(!note){return res.status(404).send("Not Found");}
        console.log(note.user.toString());
        if(note.user.toString() !==req.user.id){
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
            
        res.json(note);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send(" error");
    }
   
})


// ROUTE-4 : Update an existing Notes using : DELETE "/api/notes/deletenote". login required
router.delete('/deletenote/:id', fetchuser, async (req,res)=>{
    try {
        // find the note to be delete and delete it 
        let note = await Note.findById(req.params.id);
    
        if(!note){return res.status(404).send("Not Found");}

        // Allow deletion only if user owns this Note
        if(note.user.toString() !==req.user.id){
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id)
            
        res.json({"Success":" Note has been deteted",note:note});

    } catch (error) {
        console.log(error.message);
        res.status(500).send(" error"); 
    }
})

module.exports = router;