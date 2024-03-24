import Slides from "../models/Slides.js";

// Controller functions for Slides entity
const createSlides = async (req, res) => {
  try {
    // Attach the current user to the request object using auth middleware
    const { userId } = req;
    console.log(userId);
    // Create new slides with the attached user
    const newSlides = await Slides.create({ ...req.body, user: userId });

    res.status(201).json(newSlides);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSlides = async (req, res) => {
  try {
    // Fetch only the slides created by the current user
    const { userId } = req;
    const slides = await Slides.find({ user: userId });

    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other controller functions for Slides CRUD operations as needed

export { createSlides, getSlides };
