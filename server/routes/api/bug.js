const express = require("express");
const router = express.Router();
const Bug = require("../../models/bug");

router.post("/reportbug", async (req, res) => {
    // console.log(req.body)
    try {
        const newBug = new Bug(req.body);
        // console.log("Hello....")
        await newBug.save();
        res.status(201).send(newBug);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;