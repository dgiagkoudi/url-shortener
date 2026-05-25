const prisma = require('../prisma/client');
const generateShortCode = require('../utils/generateShortCode');

const createShortUrl = async (originalUrl) => {
  const shortCode = generateShortCode();

  const newUrl = await prisma.url.create({
    data: {
      originalUrl,
      shortCode,
    },
  });

  return newUrl;
};

const getUrlByCode = async (shortCode) => {
  return prisma.url.findUnique({
    where: {
      shortCode,
    },
  });
};

const incrementClicks = async (shortCode) => {
  return prisma.url.update({
    where: {
      shortCode,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });
};

const getAllUrls = async () => {
  return prisma.url.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const deleteUrl = async (id) => {
  return prisma.url.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  createShortUrl,
  getUrlByCode,
  incrementClicks,
  getAllUrls,
  deleteUrl,
};