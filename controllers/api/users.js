const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Profile = require('../../models/profile')

module.exports = {
  create,
  login,
  checkToken,
  update
};

function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    console.log(req.body)
    const token = createJWT(user);
    let newProfile = {
      user: user._id,
      favorites: []
    }
    console.log(newProfile)
    const profile = await Profile.create(newProfile)
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

function update(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      user.favoriteVillagers = user.favoriteVillagers.push(req.body.favoriteVillagers)
      user.save()
        .then(() => res.json("Villager list added"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
}