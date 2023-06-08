var express = require('express');
var router = express.Router();
const Model = require('./../models/models')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/post', (req, res) => {
//   res.send('Post API')
// })

router.post('/post', async (req, res) => {
  const data = new Model({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      text:req.body.text,
      likes:req.body.likes,
      user:req.body.id,
      comments:{
        user:req.body.comments.id,
        name: req.body.comments.name,
        text:req.body.comments.text,
        date: req.body.comments.date,
      }
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

// router.get('/getPosts', (req, res) => {
//   res.send('Get All Posts')
// })

router.get('/get', async (req, res) => {
  try{
      const data = await Model.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})


module.exports = router;
