import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter course title"],
    minLength: [4, "Title must be at least 4 characters"],
    maxLength: [80, "Title cannot exceed 80 characters"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter course description"],
    minLength: [20, "Description must be at least 20 characters"],
    maxLength: [1000, "Description cannot exceed 1000 characters"],
  },
  category: {
    type: String,
    required: [true, "Please enter course category"],
  },
  thumbnail: {
    public_id: {
      type: String,
      required: [true, "Please enter thumbnail public ID"],
    },
    secure_url: {
      type: String,
      required: [true, "Please enter thumbnail URL"],
    },
  },
  lectures: [
    {
      title: String,
      description: String,
      lecture: {
        public_id: {
          type: String,
          required: [true, "Please enter lecture public ID"],
        },
        secure_url: {
          type: String,
          required: [true, "Please enter lecture URL"],
        },
      },
    },
  ],
  numbersOfLectures: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: String,
  }
}, {
    timestamps: true
});

const Course = model("Course", courseSchema);

export default Course;