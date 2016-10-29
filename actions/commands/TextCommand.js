/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-29-2016
*/

var TextCommand = function() {
  var whatYoudSay = function() {
    console.log("Hope you have a nice day!");
  };

  return {
    handle: whatYoudSay
  }
}

module.exports = TextCommand;
