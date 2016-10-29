/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-19-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-29-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var capitalName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your component, it's not a choice");
      throw new Error('nice component Name');
    }

    console.log("Chilling your project");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'client', 'app', 'components', name);
    var file = path.join(workDir, 'client', 'app', 'components', name, 'Component.ts');
    var newFile = path.join(workDir, 'client', 'app', 'components', name, capitalName + '.ts');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Tasting sweet ...');

       fs.rename(file, newFile);

       // rename Main in Component.ts
       fs.readFile(newFile, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/Main/g, capitalName);

        fs.writeFile(newFile, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });

       console.log("Life's pretty sweet!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = ComponentCommand;
