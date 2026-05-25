const express = require('express');

const {
  shortenUrl,
  redirectToOriginalUrl,
  getStats,
  getAllLinks,
  deleteLink,
} = require('../controllers/urlController');

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/stats/:code', getStats);
router.get('/links', getAllLinks);
router.delete("/links/:id", deleteLink);
router.get('/:code', redirectToOriginalUrl);

module.exports = router;