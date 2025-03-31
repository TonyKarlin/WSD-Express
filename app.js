import express from 'express';
const hostname = '127.0.0.1'; // tai localhost
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
  res.json({
    cat_id: 1,
    cat_name: 'Tom',
    birthdate: '2020-01-01',
    weight: 4.5,
    owner: 'Tony',
    image: 'https://loremflickr.com/320/240/cat',
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function greeting() {
  console.log('Hello World!');
}

app.use('/public', express.static('public'));

greeting();
