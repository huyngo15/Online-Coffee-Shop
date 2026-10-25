const express = require('express');
const router = express.Router();

const menuRouter = require('../controllers/menu.controllers');

router.post('/', menuRouter.createMenu);
router.get('/', menuRouter.getMenu);
router.put('/', menuRouter.updateMenu);
router.delete('/', menuRouter.deleteMenu);

module.exports = router;