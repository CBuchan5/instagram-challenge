const express = require('express');
const app = express();


app.listen(3000, () => {
  console.log('listening on 3000')
});

// app.get('/', (req, res) => {
//   res.send('Hello World')
// });

app.get('/', (req, res) => {
  res.sendFile('/Users/charlottebuchan/Projects/week-8/instagram-challenge' + '/views/home/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
app.use(express.urlencoded({ extended: true }));
console.log('This is a test message');