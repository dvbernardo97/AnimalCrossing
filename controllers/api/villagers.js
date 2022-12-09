const profile = require('../../models/profile');
const Profile = require('../../models/profile');
const User = require('../../models/user');

module.exports = {
  create,
  show,
  delete: deleteOne
};

async function create(req, res) {
  console.log(req.params.id)
  const profile = await Profile.findOne({ user: req.params.id })
  console.log("🪲", profile)
  profile.favorites.push(req.body)
  await profile.save()
  console.log(profile)
  res.json(profile)
}


async function show(req, res) {
  console.log(req.params.id)
  try {
    const profile = await Profile.findOne({
      user: req.params.id
    })
    await profile.populate({ path: "favorites" })
    console.log(profile)
    res.json(profile)
  } catch (err) {
    console.log(err)
  }
}


// async function deleteOne(req, res) {
//   let profile = await Profile.findOne({ user: req.params.userId })
//   profile.favorites.remove(req.params.id)
//   await profile.save()
//   res.json(profile)
// }

function deleteOne(req, res) {
  console.log("🪲", "started")
  // try {
  console.log(req.params.id)
  const favorite = profile.favorites.findOne({ _id: req.params.id })
  console.log("🪲", favorite)
  // .then((res) => res.json("villager deleted"))
  // .catch(err => res.status(400).json(err))
  // res.json(villager)

  // } catch (err) {
  //   res.status(400).json(err)
  // }
}