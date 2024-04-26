function generateRandomQuote(rating) {
  console.log(rating);
  switch (+rating) {
    case 1:
      var i = Math.floor(Math.random() * oneStarQuotes.length);
      return oneStarQuotes[i];
    case 2:
      var i = Math.floor(Math.random() * twoStarQuotes.length);
      return twoStarQuotes[i];
    case 3:
      var i = Math.floor(Math.random() * threeStarQuotes.length);
      return threeStarQuotes[i];
    case 4:
      var i = Math.floor(Math.random() * fourStarQuotes.length);
      return fourStarQuotes[i];
    case 5:
      var i = Math.floor(Math.random() * fiveStarQuotes.length);
      return fiveStarQuotes[i];
    case 6:
      var i = Math.floor(Math.random() * sixStarQuotes.length);
      return sixStarQuotes[i];
    case 7:
      var i = Math.floor(Math.random() * sevenStarQuotes.length);
      return sevenStarQuotes[i];

    default:
      return "bad star rating";
      break;
  }
}
