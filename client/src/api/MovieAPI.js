let fakeMoviesDB = [
  { id: 1, title: "Avengers - The Return Of Thor", score: 4 },
  { id: 2, title: "Survival Guide To The Galaxy", score: 2 },
  { id: 3, title: "The Great Wall", score: 5 },
];

// TODO call express API
async function loadMovies() {
  return fakeMoviesDB ;
}

async function addMovie(movie) {
  let newId=0;
  if(fakeMoviesDB.length!==0)
    newId=Math.max(...fakeMoviesDB.map((m)=>m.id))+1;
  fakeMoviesDB=fakeMoviesDB.concat({id:newId, ...movie});
  return true;
}

async function deleteMovie(id) {
  fakeMoviesDB=fakeMoviesDB.filter((m)=>m.id!==id);
  return true;
}

export default { loadMovies, addMovie, deleteMovie };