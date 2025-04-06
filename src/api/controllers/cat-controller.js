import {
  addCat,
  findCatById,
  findCatByOwnerId,
  listAllCats,
  modifyCat,
  removeCat,
} from '../models/cat-model.js';

const getCat = async (req, res) => {
  res.json(await listAllCats());
};

const getCatById = async (req, res) => {
  const cat = await findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = async (req, res) => {
  req.body.filename = req.file.filename;
  const result = await addCat(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json(result);
  } else {
    res.sendStatus(400);
  }
};

const putCat = async (req, res) => {
  const result = await modifyCat(req.body, req.params.id);
  if (result.message) {
    res.status(200);
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const deleteCat = async (req, res) => {
  const result = await removeCat(req.params.id);
  if (result.message) {
    res.status(200);
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const getCatByOwnerId = async (req, res) => {
  try {
    const ownerId = req.params.id;
    console.log('Owner ID from request:', ownerId); // Debug log
    const cats = await findCatByOwnerId(ownerId);
    console.log('Cats fetched from database:', cats); // Debug log
    if (cats.length > 0) {
      res.status(200).json(cats);
    } else {
      res.status(404).json({message: 'No cats found for this owner'});
    }
  } catch (error) {
    console.error('Error fetching cats by owner ID:', error);
    res.status(500).json({error: 'Internal server error'});
  }
};

export {getCat, getCatById, postCat, putCat, deleteCat, getCatByOwnerId};
