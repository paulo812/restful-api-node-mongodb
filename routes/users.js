const express = require("express");
const User = require("../models/Users");
const router = express.Router();

//Retorna todos os Users
router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (err) {
    res.json({ message: err });
  }
});

//Cria um User
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    birthDate: req.body.birthDate,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//Retorna um User específico por ID
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

//Deletar um User
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

//Atualizar um User
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.UserId },
      {
        $set: {
          name: req.body.name,
          birthDate: req.body.birthDate,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
        },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
