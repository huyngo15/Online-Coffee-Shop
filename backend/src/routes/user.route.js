const express = require('express');
const router = express.Router();

const userControllers = require("../controllers/user.controllers");

router.get('/', userControllers.getUser);
router.post('/', userControllers.createUser);
router.delete('/', userControllers.deleteUser);
router.put('/', userControllers.updateUser);

module.exports = router;



