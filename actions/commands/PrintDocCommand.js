/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-29-2016
*/

var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    //  graphic art
    console.log("Nice-Cream_JS - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('├── mkdir              ─ Create a new directory');
    console.log('└── day                  ─ Verify that it\'s a nice day);
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
