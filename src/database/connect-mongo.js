const mongoose = require('mongoose');
const db_config = require('../config/db_config.json');

mongoose.connect(db_config.url + db_config.db, db_config.db_configs);

module.exports = mongoose;