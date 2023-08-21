const bcrypt = require('bcryptjs')

const User = require("../models/user");

exports.signup = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
          email: email,
          password: hashedPassword,
        }); 
        const result = await user.save()
        res.status(201).send(result)
    }
    catch (err) {
        console.log(err);
    }
}
exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
      const user = await User.findOne({ email: email });
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        console.log("Password does not match");
      }
    const result = await user.save();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};
