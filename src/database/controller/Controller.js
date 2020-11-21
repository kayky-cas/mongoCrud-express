class Controller {
    constructor(model) {
        this.model = model;
    }

    async select(object = null) {
        return await this.model.find(object).exec();
    }

    async delete(object) {
        return await this.model.findOneAndDelete(object).exec();
    }

    async insert(object) {
        await this.model.create(object);
    }
}

module.exports = Controller;