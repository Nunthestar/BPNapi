const {  DataTypes } = require("sequelize");
const db = require("../db/database");
const router = require('express').Router();
const database = db.define('Users',
{
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING

}
)


router.post('/', async (req, res) => {
  var model = req.body;
  const data = await  database.create(model);
  console.log(model)
  res.status(200).json("Successfully");
});

router.get('/', async (req, res) => {
  const data = await  database.findAll();
    res.json(data);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const data = await  database.findByPk(id);
    res.status(200).json(data);
});

router.put('/', async (req, res) => {
  var model = req.body;
  const data = await  database.update(model,{where:{id:model.id}});
  console.log(model)
  res.status(200).json("Updated");
});


router.delete('/:id', async (req, res) => {
  const {id} = req.params;
 await database.destroy({where: {id:id}})
 res.status(200).json('deleted!')
})


module.exports = router;
