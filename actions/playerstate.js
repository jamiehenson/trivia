var Reflux = require('reflux');
 
var PlayerActions = Reflux.createActions([
  'createNote',
  'editNote'
]);
 
module.exports = PlayerActions;