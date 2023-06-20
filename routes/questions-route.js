const express = require("express");
const route = express.Router();
const path = require("path");
const fs = require("fs");
const questionsPath = path.join(__dirname, "../data/questions.json");
route
  .route("/")
  .get((req, res) => {
    fs.readFile(questionsPath, (err, data) => {
      if (err) {
        res.status(500).send("Error");
        return;
      }
      const questionsParse = JSON.parse(data);
      res.status(200).json(questionsParse);
    });
  })
  .post(isCheckId, (req, res) => {
    fs.readFile(questionsPath, (err, data) => {
      if (err) {
        req.status(500).send("Error");
        return;
      }
      const questionsParse = JSON.parse(data);
      const newData = {
        content: req.body.content,
        like: req.body.like,
        dislike: req.body.dislike,
        id: req.body.id,
      };
      questionsParse.push(newData);
      fs.writeFile(
        questionsPath,
        JSON.stringify(questionsParse),
        (err, data) => {
          if (err) {
            res.status(500).send("Error");
            return;
          }
        }
      );
      res.status(200).json(questionsParse);
    });
  });

route
  .route("/:id")
  .get((req, res) => {
    fs.readFile(questionsPath, (err, data) => {
      if (err) {
        res.status(500).send("Error");
        return;
      }
      const questionsParse = JSON.parse(data);
      const dataFind = questionsParse.find((data) => data.id == req.params.id);
      res.status(200).json(dataFind);
    });
  })
  .put((req, res) => {
    fs.readFile(questionsPath, (err, data) => {
      if (err) {
        res.status(500).send("Error");
        return;
      }
      const questionsParse = JSON.parse(data);
      const checkQuestion = questionsParse.findIndex(
        (data) => data.id == req.params.id
      );
      console.log(checkQuestion);
      if (checkQuestion) {
        questionsParse[checkQuestion] = {
          ...questionsParse[checkQuestion],
          ...req.body,
        };
        fs.writeFile(
          questionsPath,
          JSON.stringify(questionsParse),
          (err, data) => {
            if (err) {
              res.status(500).send("Error");
              return;
            }
          }
        );
        res.status(200).send(questionsParse);
      }
    });
  })
  .delete(isCheckDelete, (req, res) => {
    fs.readFile(questionsPath, (err, data) => {
      if (err) {
        res.status(500).send("Error");
        return;
      }
      const questionsParse = JSON.parse(data);
      const questionsFilter = questionsParse.filter(
        (data) => data.id !== req.params.id
      );
      fs.writeFile(questionsPath, JSON.stringify(questionsFilter), (err) => {
        if (err) {
          res.status(500).send("Error");
          return;
        }
      });
      res.status(200).json({ message: "Delete successfully" });
    });
  });

function isCheckId(req, res, next) {
  fs.readFile(questionsPath, (err, data) => {
    if (err) {
      res.status(500).send("Error");
      return;
    }
    const questionsParse = JSON.parse(data);
    const idFind = questionsParse.find((data) => data.id == req.body.id);
    const contentFind = questionsParse.find(
      (data) => data.content == req.body.content
    );
    if (idFind) {
      res.status(200).json({ message: "ID already exists" });
    } else if (contentFind) {
      res.status(200).json({ message: "Question already exists" });
    } else {
      next();
    }
  });
}
function isCheckDelete(req, res, next) {
  fs.readFile(questionsPath, (err, data) => {
    if (err) {
      res.status(500).send("Error");
      return;
    }
    const questionsParse = JSON.parse(data);
    const idFind = questionsParse.find((data) => data.id == req.params.id);
    if (!idFind) {
      res.status(200).json({ message: "Question not found" });
    } else {
      next();
    }
  });
}
module.exports = route;
