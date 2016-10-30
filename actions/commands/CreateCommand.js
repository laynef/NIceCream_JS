/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-30-2016
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
      "version": "0.0.0",
      "scripts": {
        "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
        "lite": "lite-server",
        "tsc": "tsc",
        "tsc:w": "tsc -w"
      },
      "dependencies": {
        "@angular/common": "~2.1.1",
        "@angular/compiler": "~2.1.1",
        "@angular/core": "~2.1.1",
        "@angular/forms": "~2.1.1",
        "@angular/http": "~2.1.1",
        "@angular/platform-browser": "~2.1.1",
        "@angular/platform-browser-dynamic": "~2.1.1",
        "@angular/router": "~3.1.1",
        "@angular/upgrade": "~2.1.1",
        "angular-in-memory-web-api": "~0.1.13",
        "bootstrap": "^3.3.7",
        "core-js": "^2.4.1",
        "reflect-metadata": "^0.1.8",
        "rxjs": "5.0.0-beta.12",
        "systemjs": "0.19.39",
        "zone.js": "^0.6.25"
      },
      "devDependencies": {
        "@types/core-js": "^0.9.34",
        "@types/node": "^6.0.45",
        "concurrently": "^3.0.0",
        "lite-server": "^2.2.2",
        "typescript": "^2.0.3"
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
