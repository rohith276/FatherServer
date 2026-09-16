const express = require("express");
const router = express.Router();
const Refund = require('../models/Refunds'); // Import the Refund model if you have one
 const verifyToken = require('../middleware/verifyToken');

// GET route to fetch refund requests
router.get('/',verifyToken, async (req, res) => {
    try {
        // Fetch refund requests from the database or wherever they are stored
        // For example:
        const refundRequests = await Refund.find(); // Assuming Refund is your model
        
        // Return refund requests to the client
        res.status(200).json({ message: "Refund requests retrieved successfully", data: refundRequests });
    } catch (error) {
        console.error("Error fetching refund requests:", error);
        res.status(500).json({ message: "Failed to fetch refund requests. Please try again later." });
    }
});

// POST route to submit refund requests
router.post('/', verifyToken, async (req, res) => {
    try {
        const { transactionId } = req.body;
        if (!transactionId) {
            return res.status(400).json({ message: "Transaction ID is required" });
        }
        const refund = await Refund.create({
            transactionId,
            email: req.decoded.email,
            status: "pending"
        });
        res.status(200).json({ message: "Refund request submitted successfully", data: refund });
    } catch (error) {
        console.error("Error submitting refund request:", error);
        res.status(500).json({ message: "Failed to submit refund request. Please try again later." });
    }
});

module.exports = router;
