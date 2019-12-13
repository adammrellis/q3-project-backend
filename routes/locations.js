const express = require('express')
const router = express.Router()
// const locationsController = require('../controllers/locations')
const Location = require('../models/Location')


router.get("/", (req, res) => {
    Location.query()
      // .eager("guitars")
      .then(result => res.send(result));
  });
  router.get("/:id", (req, res) => {
    Location.query()
      .findById(req.params.id)
      // .eager("guitars")
      .then(result => res.json(result));
  });
  router.post("/", (req, res) => {
    Location.query()
      .insert(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
  router.patch("/:id", (req, res) => {
    Location.query()
      .findById(req.params.id)
      .patch(req.body)
      .returning("*")
      .then(updatedLocation => res.json(updatedLocation));
  });
  router.delete("/:id", (req, res) => {
    Location.query()
      .deleteById(req.params.id)
      .returning("*")
      .then(deletedLocation => res.json(deletedLocation));
  });
  module.exports = router;
  