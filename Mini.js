/**
 * Mini.js
 * Mini.js is a little and simple example of library for http(s) requests
 * -- Management
 *
 * @license The Unlicense, http://unlicense.org/
 * @version 0.1
 * @author  Carlos Ganoza Plasencia, https://github.com/drneox/
 * @updated 2018-07-17
 * @link    https://github.com/janl/mustache.js/
 *
 *
 */

class Mini{
  constructor(webservice, token){
    this.webservice = webservice;
    this.token = token;
  }
  client(method, endPoint) {
    self = this;
    return new Promise(function (resolve, reject) {
        var mini = new XMLHttpRequest();
        mini.open(method, self.webservice +  endPoint + "/", true);
        mini.setRequestHeader("Content-type", "application/json");
        mini.setRequestHeader("Authorization", self.token);
        mini.onload = function(){
          if (this.status >= 200 && this.status < 300) {
            resolve(JSON.parse(mini.response));
          } else {
            reject({
              status: self.status,
              statusText: mini.statusText
            });
          }
        }
        mini.onerror = function(){
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
        mini.send();
      });
  }
}
