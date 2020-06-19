const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/firestone", (req, res, next) => {
  res.status(200).json({
    dataTopic: [
      {
        gambar: "/assets/strtwearH2.png",
        judul: "Supreme tutup Semua Tokonya Karena COVIC-19",
        link: "/streetwearp2",
      },
      {
        gambar: "/assets/SNKRS1.png",
        judul: "Sneakers Paling Dicari Oleh Sneakershead",
        link: "/content",
      },
    ],
    dataGambar: [
      {
        gambar: "/assets/home2.png",
      },
      {
        gambar: "/assets/home3.png",
      },
      {
        gambar: "/assets/home4.png",
      },
      {
        gambar: "/assets/home5.png",
      },
      {
        gambar: "/assets/home6.png",
      },
    ],
  });
});

module.exports = app;
