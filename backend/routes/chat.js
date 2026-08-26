import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

//test
router.post("/test",async(req,res)=>{
    try{
        const thread = new Thread({
            threadId:"abc",
            title:"Testing new thread 2",
        });

        const response = await thread.save();
        res.send(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:"Failed to save"
        })
    }
})

//get all threads route
router.get("/thread",async(req,res)=>{
    try{
        const allThreads = await Thread.find({}).sort({updatedAt: -1});
        res.json(allThreads);
        //desc order of updated date time

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:"Failed to fetch all threads"
        })
    }
});


//get one thread data
router.get("/thread/:threadId",async(req,res)=>{

    const {threadId}=req.params;

    try{
        const thread = await Thread.findOne({threadId});

        if(!thread){
            res.status(404).json({
            error:"Thread not found"
        })
        }   

        res.json(thread.messages);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:"Failed to fetch chat"
        })
    }
});

//delete route to remove a thread
router.delete("/thread/:threadId",async(req,res)=>{

    const {threadId}=req.params;

    try{
        const deletedThread = await Thread.findOneAndDelete(threadId);
        
        if(!thread){
            res.status(404).json({
            error:"Thread not found"
        })
        }

        res.status(200).json({
            success:"Thread deleted"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:"Failed to delete thread"
        })
    }
});


export default router;