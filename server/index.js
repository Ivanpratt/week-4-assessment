const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/insult", (req, res) => {
  const insults = ["Gee, you're a soggy cookie",
					 "Cool t-shirt stain, bro!",
					 "Your Javascript skills are sub-par",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * insults.length);
  let randominsult = insults[randomIndex];

  res.status(200).send(randominsult);
  
});

app.post("/api/greatest", (req, res) => {
  const returnValue = {
    returnValue: `It looks like you think ${req.body.value1} is the Greatest.`
  }
  res.status(200).send(returnValue);
  
});

app.put("/api/greatest/1", (req, res) => {
  const returnValue = {
    returnValue: `It looks like you now think ${req.body.value1} is the Greatest.`
  }
  res.status(200).send(returnValue);
  
});

app.delete("/api/greatest/1", (req, res) => {
  let response = {}
  res.status(200).send(response);
});

app.listen(4000, () => console.log("Server running on 4000"));
