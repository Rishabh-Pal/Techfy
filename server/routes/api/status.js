const express = require("express");
const router = express.Router();
const Bug = require("../../models/bug");

router.patch("/statusUpdate:id", async (req, res) => {
    // const bug=Bug.findById(req.params.id)
    // console.log(bug)
    try{
        console.log("find.....")
        const bug=await Bug.findByIdAndUpdate(req.params.id,req.body)
        // console.log("find.....")
        if(!bug){
            return res.status(404).send()
        }
        res.send(bug)
    }catch(err){
        res.status(400).send(err)
    }
});

router.get("/status", async (req, res) => {
    try {
        const status = req.body;

        // Check if user already exists
        const bugs = await Bug.find({ status });
        if (!bugs) {
            return res.status(400).json({ msg: "Empty..." });
        }
        res.status(201).send(bugs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;