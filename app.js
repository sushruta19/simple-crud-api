const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// setting up schema
const articleSchema = new mongoose.Schema({
  title : String,
  content : String
});
const Article = mongoose.model("Article", articleSchema);

async function connectDatabase() {
  try {
    const mongoURI = "mongodb://127.0.0.1:27017/wikiDB";
    mongoose.connect(mongoURI, {
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
    console.log("Database connected");
  } catch(error) {
    console.error("Error in connectDatabase", error.message);
  }
} 
connectDatabase();

//chaining the routes
app.route("/articles")

  .get(async (req, res) => {
    try {
      const articles = await Article.find({});
      if(articles.length === 0) {
        return res.status(404).json({error: "No articles found."});
      }
      res.status(200).json(articles);
    } catch(error) {
      console.error("Error in GET /articles:", error.message);
      res.status(500).json({error: "Internal server error."});
    }
  })

  .post(async (req, res) => {
    try {
      await Article.create({
        title : req.body.title,
        content : req.body.content
      });
      console.log("Article created!");
      res.status(200).json({message : "Success"});
    } catch(error) {
      console.error("Error in POST /articles:", error.message);
      res.status(500).json({error: "Internal server error."});
    }
  })

  .delete(async (req, res) => {
    try {
      await Article.deleteMany({});
      console.log("All articles deleted!");
      res.status(200).json({ message: 'All articles deleted successfully.' });
    } catch(error) {
      console.error("Error in DELETE /articles:", error.message);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });



app.route("/articles/:articleTitle")

  .get(async (req, res) => {
    try {
      const foundArticle = await Article.findOne({
        title : req.params.articleTitle
      });
      if(!foundArticle) {
        return res.status(404).json({message : 'Article not found.'});
      }
      res.status(200).json(foundArticle);
    } catch(error) {
      console.error("Error in GET /articles/:articleTitle:", error.message);
      res.status(500).json({ message: 'Internal server error.'});
    }
  })

  .delete(async (req, res) => {
    try {
      const result = await Article.deleteOne({
        title : req.params.articleTitle
      });
      if(result.deletedCount === 0) {
        return res.status(404).json({ message: 'Article not found.' });
      }
      res.status(200).json({ message: 'Article deleted successfully.'})
    } catch(error) {
      console.error("Error in DELETE /articles/:articleTitle:", error.message);
      res.status(500).json({ message: 'Internal server error.'})
    }
  })

  .put(async (req, res) => {
    try {
      const result = await Article.replaceOne(
        {title : req.params.articleTitle},
        {title : req.body.title, content : req.body.content},
      );
      if(result.n === 0) {
        return res.status(404).json({ message: 'Article not found.' });
      }
      res.status(200).json({ message: 'Article replaced successfully.'})
    } catch(error) {
      console.error("Error in PUT /articles/:articleTitle:", error.message);
      res.status(500).json({ message: 'Internal server error.'})
    }
  })

  .patch(async (req, res) => {
    try {
      const result = await Article.updateOne(
        {title : req.params.articleTitle},
        {$set: req.body}
      );
      if(result.updatedCount === 0) {
        return res.status(404).json({ message: 'Article not found.' });
      }
      res.status(200).json({ message: 'Article updated successfully.'});
    } catch(error) {
      console.error("Error in PATCH /articles/:articleTitle:", error.message);
      res.status(500).json({ message: 'Internal server error.'})
    }
  })

  .delete(async (req, res) => {
    try {
      const result = await Article.deleteOne({
        title : req.params.articleTitle
      });
      if(result.deletedCount === 0) {
        return res.status(404).json({ message: 'Article not found.' });
      }
      res.status(200).json({ message: 'Article deleted successfully.'});
    } catch(error) {
      console.error("Error in DELETE /articles/:articleTitle:", error.message);
      res.status(500).json({ message: 'Internal server error.'})
    }
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started!");
});

process.on("SIGINT", async () => {
  try {
    mongoose.disconnect();
    console.log("Disconnected from database!");
    process.exit(0);
  } catch(error) {
    console.error("Error in closing db", error);
    process.exit(1);
  }
});