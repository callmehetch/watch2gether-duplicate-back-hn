const router = require("express").Router();
const User = require("../../models/userModel/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registration process
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, passwordVerify } =
      req.body;

    // validation
    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    if (phone.length != 10)
      return res.status(400).json({
        errorMessage: "Please enter 10 digit number",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        // httpOnly: true,
        // secure: true,
        // sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
   
    // validate
    if (!email)
      return res
        .status(400)
        .json({ errorMessage: "Please enter email required field." });

    if (!password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter passowrd required field." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        //httpOnly: false,
        //secure: false,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      // httpOnly: true,
      // secure: true,
      // sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    console.log("Yes")
    if (!token){
      console.log("userRouter - loggedIn-false");
      return res.json(false);
    }
    console.log("userRouter - loggedIn-true");
    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports = router;
