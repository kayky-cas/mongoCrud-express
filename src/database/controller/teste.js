const Animal = require("../model/Animal");
const Controller = require("./Controller");

const AnimalController = new Controller(Animal);

AnimalController.delete({_id: 'oisdwdi'}).then((result) => {
    console.log(result);
})