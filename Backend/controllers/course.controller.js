import Course from "../models/course.model.js";
import AppError from "../utils/error.util.js";

const getAllCourses = async(req, res, next) => {
    try {
        const courses = await Course.find({}).select("-lectures");
        res.status(200).json({
            success: true,
            message: "Courses fetched successfully",
            courses,
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getLecturesByCourseId = async(req, res, next) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return next(new AppError("Course not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Course fetched successfully",
            lectures: course.lectures,
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

export { getAllCourses, getLecturesByCourseId };