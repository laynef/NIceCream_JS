/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-29-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');
var jsonfile = require('jsonfile');


var CreateCommand = function(name) {
  var ProjectName = name;

  var newProject = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your project, it's not a choice");
      throw new Error('nice create Name');
    }

    console.log("Chilling your project " + name);

    var src = path.join(__dirname, '..', '..', 'project', 'temp');
    var dest = path.join(workDir, name);

    var file = './' + name + '/package.json';

    var obj = {
      'name': ProjectName,
      'dependencies' : {
        "jquery": "^3.1.1"
      }
    };

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('This sugar is sweet ...');

       // create package.json
       jsonfile.writeFile(file, obj, {spaces: 2}, function (er) {
         // should be null
       });

       console.log("NIce Cream on a sunny day!");
    });

  };
  return {
    handle: newProject
  }
};

module.exports = CreateCommand;
