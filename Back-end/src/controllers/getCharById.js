const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');


async function getCharById(req, res) {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}${id}`);
    if (response.data) {
      const { id, status, name, species, origin, image,gender } = response.data;
      const result = { id, status, name, species, origin,image, gender };
      res.status(200).json(result);
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};


module.exports = { getCharById }