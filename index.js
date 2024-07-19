// Write your code below:
function handleFormSubmit(event) {
    //make a delete request to the apis endpoint 
    //to delete the user with the specified userid
    axios.delete('https://crudcrud.com/api/9249b687966644688ab2be96aa2c5be8/users/${userId}')
    .then((res)=>{
      //if the delete request is successful,remove the user's div from the dom
      console.log(res);
    })
    .catch((err)=>{
      //if there is an error with delete request, log the error the console
      console.log(err);
    });
  }
  
  // Do not touch the code below
  module.exports = handleFormSubmit;
  