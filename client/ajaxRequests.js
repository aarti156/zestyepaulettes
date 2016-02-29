/* This file handles all the ajax requests to the server and database. */

//This ajax requests is to fetch all the techies stored in database.
var getTechies = function(success, fail) {
  $.get({
    url: '/api/techie',
    success: success,
    error: fail
  });
};

//This ajax requests is used to get techies from databse that have a specific set of a skill(techieType)
var getTechiesByType = function(techieType, callback) {
  $.get({
    url: '/api/techie/' + techieType,
    success: callback,
    error: function(data){
      console.error(data);
    },
    data: {
      'techieType': techieType 
    }
  });
};

//Todo: This ajax requests is sent to the angellist api to fetch data.
var getAngelListData = function(success, fail) {
  $.get({
    url: '/api/techie',
    success: success,
    error: fail
  });
}

window.getTechies = getTechies;
window.getTechiesByType = getTechiesByType;

//This ajax requests is used to signup a new techie to the database.
var signUpTechie = function(newTechieObject, success, fail){
  $.post({
    url: '/api/techie',
    data: newTechieObject,
    success: success,
/* as a reminder, this is the success  and error callback we need in our app.js when we call it
    success: function(data) {
      this.setState({data: data});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
*/
    error: fail,
  });
};
window.signUpTechie = signUpTechie;
