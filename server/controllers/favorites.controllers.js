import Favorites from "../models/favorites.models.js"
import User from "../models/user.model.js"

export const addToFavorites = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    const favorite = await Favorites.create({ userId: user._id, movieId });
    res.send(favorite);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

export const findByUserName = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    const favorites = await Favorites.find({ userId: user._id });
    res.send(favorites);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
