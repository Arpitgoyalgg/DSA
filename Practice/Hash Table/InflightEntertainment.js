function inflightEntertainment(movieLengths, flightLength) {
  let movieMap = new Map();

  for (let i = 0; i < movieLengths.length; i++) {
    if (movieMap.has(flightLength - movieLengths[i])) {
        
      // Bonus: print movies index
      console.log(i, movieMap.get(flightLength - movieLengths[i]));
      return true;
    }

    movieMap.set(movieLengths[i], i);
  }

  return false;
}

console.log(inflightEntertainment([5, 10, 15, 20], 15));
