const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const lowerWords = "qwertyuiopasdfghjklzxcvbnm";
const upperWords = "QWERTYUIOPASDFGHJKLZXCVBNM";

const words = lowerWords + upperWords;

/**
 * [GET] get random words with 6 words
 */
app.get("/api", (req, res) => {
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += words.charAt(Math.floor(Math.random() * words.length));
  }
  res.status(200).json({ msg: `your words: ${result}` });
});

/**
 * [GET] get random words with a number someone put to url
 */
app.get("/api/:number", (req, res) => {
  const length = parseInt(req.params.number); //parser param to integer

  if (Number.isInteger(length) && length > 0) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += words.charAt(Math.floor(Math.random() * words.length));
    }
    res.status(200).json({ msg: result });
  } else {
    res.status(400).json({ msg: "Only accept param is positive number" });
  }
});

app.listen(PORT, () =>
  console.log(`The program started on port http://localhost:${PORT}`)
);
