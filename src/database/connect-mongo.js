const mongoose = require('mongoose');
const db_config = require('../config/db_config.json');

module.exports = function() {
    mongoose.connect(db_config.url + db_config.db, db_config.db_configs);

    return mongoose;
}