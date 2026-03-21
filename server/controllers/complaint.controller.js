import asyncHandler from "../utils/asyncHandler.js";

export const createComplaint = asyncHandler(async (req, res) => {

    const { title, description } = req.body;

    const complaint = {
        id: Date.now(),
        title,
        description
    };

    res.status(201).json({
        success: true,
        message: "Complaint created successfully",
        data: complaint
    });

});