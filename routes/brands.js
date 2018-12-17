const express = require("express");
const { Brand, validate } = require("../models/brand");
const router = express.Router();

router.get("/", async (req, res) => {
  const brand = await Brand.find().sort("name");
  res.send(brand);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let brand = new Brand({
    name: req.body.name,
    tech: req.body.tech,
    releaseDate: req.body.releaseDate,
    colorWay: req.body.colorWay
  });
  brand = await brand.save();

  res.send(brand);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const brand = await Brand.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      tech: req.body.tech,
      releaseDate: req.body.releaseDate,
      colorWay: req.body.colorWay
    },
    { new: true }
  );

  if (!customer)
    return res.status(404).send("The brand with the given Id was not found");

  res.send(brand);
});

router.delete("/:id", async (req, res) => {
  const brand = await Brand.findByIdAndRemove(req.params.id);

  if (!customer)
    return res.status(404).send("The brand with the given Id was not found");

  res.send(brand);
});

router.get("/:id", async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (!customer)
    return res.status(404).send("The brand with the given Id was not found");

  res.send(brand);
});

module.exports = router;
