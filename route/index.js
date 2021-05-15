const express = require("express");
const { contact } = require("../services");
const router = express.Router();

router.post("/contact", contact);

module.exports = router;
