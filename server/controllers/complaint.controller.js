import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createComplaint = asyncHandler(async (req, res, next) => {

    const { title, description } = req.body;

    if (!title || !description) {
        return next(new AppError("All fields are required", 400));
    }

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