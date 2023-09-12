const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "d1c79b0f-2142-4e4f-a6e0-c08eb80ae56c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);