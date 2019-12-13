const express = require('express')
const router = express.Router()
// const guitarsController = require('../controllers/Guitars')
const Guitar = require('../models/Guitar')


router.get("/", (req, res) => {
    Guitar.query()
      .then(result => res.send(result));
  });
  router.get("/:id", (req, res) => {
    Guitar.query()
      .findById(req.params.id)
      .then(result => res.json(result));
  });
  router.post("/", (req, res) => {
    Guitar.query()
      .insert(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
  router.patch("/:id", (req, res) => {
    Guitar.query()
      .findById(req.params.id)
      .patch(req.body)
      .returning("*")
      .then(updatedGuitar => res.json(updatedGuitar));
  });
  router.delete("/:id", (req, res) => {
    Guitar.query()
      .deleteById(req.params.id)
      .returning("*")
      .then(deletedGuitar => res.json(deletedGuitar));
  });
  module.exports = router;