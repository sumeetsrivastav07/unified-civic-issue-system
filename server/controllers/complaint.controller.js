import AppError from "../utils/AppError.js";
export const createComplaint = async (req, res, next) => {

    try {
        const { title, description } = req.body;

        // Basic validation (temporary)
       if (!title || !description) {
    return next(new AppError("All fields are required", 400));
}

        // Temporary response (DB not added yet)
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

    } catch (error) {
        next(error); // VERY IMPORTANT
    }
};