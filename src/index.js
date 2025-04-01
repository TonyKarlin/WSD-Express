import app from './app.js';

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
