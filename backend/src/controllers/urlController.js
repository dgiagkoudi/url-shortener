const {
    createShortUrl,
    getUrlByCode,
    incrementClicks,
    getAllUrls,
    deleteUrl,
} = require('../services/urlService');

const shortenUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: 'URL is required',
      });
    }

    const newUrl = await createShortUrl(url);

    const shortUrl = `${process.env.BASE_URL}/${newUrl.shortCode}`;

    res.status(201).json({
      message: 'Short URL created successfully',
      shortUrl,
      data: newUrl,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

const redirectToOriginalUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await getUrlByCode(code);

    if (!url) {
      return res.status(404).json({
        message: 'URL not found',
      });
    }

    await incrementClicks(code);

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

const getStats = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await getUrlByCode(code);

    if (!url) {
      return res.status(404).json({
        message: 'URL not found',
      });
    }

    res.status(200).json({
      data: url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

const getAllLinks = async (req, res) => {
  try {
    const urls = await getAllUrls();
    
    const formattedUrls = urls.map(url => ({
      ...url,
      shortUrl: `${process.env.BASE_URL}/${url.shortCode}`
    }));

    res.status(200).json({
      data: formattedUrls,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUrl(id);

    res.status(200).json({
      message: "Link deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  shortenUrl,
  redirectToOriginalUrl,
  getStats,
  getAllLinks,
  deleteLink,
};