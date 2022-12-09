const express = require('express');
const router = express.Router();
const villagerCtrl = require('../../controllers/api/villagers');

// GET /api/items
router.post('/:id', villagerCtrl.create);
router.get('/:id', villagerCtrl.show)
router.delete('/delete/:id', villagerCtrl.delete)

module.exports = router;
