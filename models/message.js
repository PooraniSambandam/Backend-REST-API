var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;//Schema is used to map mongoDB(json files) to JS objects(Row object with fields(key) and their content(value))

var messageSchema   = new Schema({
    text: String,
    user: String
});

module.exports = mongoose.model('Message', messageSchema);