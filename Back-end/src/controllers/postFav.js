const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json({ message: 'Faltan datos' })
        }
        await Favorite.findOrCreate({
            where: { name: name },
            defaults: { origin: origin, status: status, image: image, species: species, gender: gender }
        })
        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { postFav };