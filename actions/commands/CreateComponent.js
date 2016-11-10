/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-19-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 11-09-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var stringName = name.toLowerCase();

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your component, it's not a choice");
      throw new Error('nice component Name');
    }

    console.log("Chilling your project");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'client', 'app', 'components', name);

    // old files
    var tsFile = path.join(workDir, 'client', 'app', 'components', name, 'main.component.ts');
    var scssFile = path.join(workDir, 'client', 'app', 'components', name, 'main.component.scss');
    var htmlFile = path.join(workDir, 'client', 'app', 'components', name, 'main.component.html');

    // new files
    var newTSFile = path.join(workDir, 'client', 'app', 'components', name, stringName + '.component' + '.ts');
    var newSCSSFile = path.join(workDir, 'client', 'app', 'components', name, stringName + '.component' + '.scss');
    var newHTMLFile = path.join(workDir, 'client', 'app', 'components', name, stringName + '.component' + '.html');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Tasting sweet ...');

       fs.rename(tsFile, newTSFile);
       fs.rename(scssFile, newSCSSFile);
       fs.rename(htmlFile, newHTMLFile);

       // rename Main in Component.ts
       fs.readFile(newFile, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/Main/ig, capitalName);

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
