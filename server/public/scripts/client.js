$(function(){
  console.log("Team Awesome Sourced");

  var getPets = function (){
    //insert get function for getting pets and posting them to the DOM
    console.log("Get Inventory Function");
    $.ajax({
      type: 'GET',
      url: '/owners',
      success: function(response){
        console.log('back from pet database with: ', response);
        //display inventory to DOM
        displayPets(response);
      } //end success function
    }); // end ajax function
  }; //end getPets

  //function to display Pets in the DOM
  var displayPets = function (pets){
    console.log("in displayPets path");
    for (var i = 0; i < pets.length; i++) {
      $('#pets').append('<tr>');
      var $el = $('#pets').children().last();
      $el.append('<td>' + pets.owner + '</td>');
      $el.append('<td>' + pets.name + '</td>');
      $el.append('<td>' + pets.breed + '</td>');
      $el.append('<td>' + pets.type + '</td>');
    }// end for loop
  }; // end displayPets

  //function to check in and check out pets
  var checkInPets = function (){
    //request for checking in pets
    $.ajax({
      type: "PUT",
      url: "",
      data: "",
      success: function (response){
        getPets();
      }
    });// end ajax
  };

  //function to check out pets
  var checkOutPets = function (){
    //request for checking Out pets
    $.ajax({
      type: "PUT",
      url: "",
      data: "",
      success: function (response){
        getPets();
      }
    });// end ajax
  };// end checkOutPets

  //function to updatePets
  var updatePets = function (){
    //PUT request for updating pets
    $.ajax({
      type: "PUT",
      url: "",
      data: "",
      success: function (response){
        getPets();
      }
    });// end ajax
  }; //end updatePets

  //function to remove pets
  var removePet = function (){
    //DELETE request for deleting pets
    $.ajax({
      type: "DELETE",
      url: "" + petID + "/",
      success: function (){
        console.log("in delete pets path");
        getPets();
      }
    });//end ajax
  }; //end removePet

  //function to create pets
  var createPet = function (){
    //POST request for adding pets to the DB
    $.ajax({
      type: 'POST',
      url: '',
      data: objectToSend,
      success: function (response){
        if (response === 'OK'){
          //update display
          getPets();
        } else {
          alert ('error adding item');
        }
      }
    });
  }; // end createPet

  //function to create owner
  var createOwner = function (){
    //POST request for adding owners to the DB
    $.ajax({
      type: 'POST',
      url: '',
      data: objectToSend,
      success: function (response){
        if (response === 'OK'){
          //update display
          getPets();
        } else {
          alert ('error adding item');
        }
      }
    });
  }; // end createOwner

});
