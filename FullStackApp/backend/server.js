const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Allow JSON requests
app.use(express.json());

// 1) Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", PostSchema);
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Express Backend with MongoDB! " });
});

// Create a post
app.post('/api/posts', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});