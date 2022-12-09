const Profile = require('../../models/profile');
const User = require('../../models/user');

module.exports = {
  create,
  show
};
async function create(req, res) {
  const profile = await Profile.findOne({ user: req.params.id })
  profile.favorites.push(req.body)
  await profile.save()
  console.log(profile)
  res.json(profile)
}

// async function addFav(req, res) {
//   let profile = await Profile.findOne({ user: req.params.userId })
//     .then(function (profile) {
//       console.log(profile)
//       if (profile) {
//         profile.favorites.add(req.body)
//         profile.save();
//       }
//     })
//   res.json(profile)
// }

async function show(req, res) {
  const profile = await Profile.findOne({
    user: req.params.id
  }).populate({
    path: 'favorites',
    // populate: { path: 'favoritedVillager' }
  })
  console.log(profile)
  res.json(profile)
}
