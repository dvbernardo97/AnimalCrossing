const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  favoritedVillager: { type: String, unique: true },
})

const profileSchema = new Schema({
  favorites: [favoritesSchema],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema)