const { Category, validate } = require("../models/category");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find().sort("cat");
  res.send(categories);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let category = new Category({
    cat: req.body.cat,
    designer: req.body.designer,
    mainColor: req.body.mainColor
  });

  category = await category.save();

  res.send(category);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      cat: req.body.cat,
      designer: req.body.designer,
      mainColor: req.body.mainColor
    },
    { new: true }
  );

  if (!category)
    return res.status(404).send("The category with the given id was not found");

  res.send(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given id was not found");

  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given id was not found");

  res.send(category);
});

module.exports = router;
