const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  favoritedVillager: { type: String, unique: true, required: false },
})

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  favorites: [favoritesSchema],
}
  // timestamps: true
);

module.exports = mongoose.model('Profile', profileSchema)