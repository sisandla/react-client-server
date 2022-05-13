const express = require('express');
const morgan = require('morgan');

const movieDAO = require('./movieDAO.js');

const BASEURI = '/api' ;
const PORT = 3010;

app = new express();
app.use(morgan('combined'));
app.use(express.json());

// GET /movies
app.get(BASEURI+'/movies', (req, res)=>{
  movieDAO.listMovies().then((v)=>res.json(v));
});

// POST /movies
app.post(BASEURI+'/movies', (req, res)=>{
  const movie = req.body;
  movieDAO.createMovie(movie).then((id)=>res.json({id: id}));
});



app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));