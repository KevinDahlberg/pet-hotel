$(function(){
  console.log("Team Awesome Sourced");

  var getPets = function (){
    //insert get function for getting pets and posting them to the DOM
    console.log("Get Inventory Function");
    $.ajax({
      type: 'GET',
      url: '/getPets',
      success: function(response){
        console.log('back from pet database with: ', response);
        //display inventory to DOM
        displayPets(response);
      } //end success function
    }); // end ajax function
  }; //end getPets

  var displayPets = function (pets){
    for (var i = 0; i < pets.length; i++) {
      $('#pets').append('<tr>');
      var $el = $('#pets').children().last();
      $el.append('<td>' + pets.id + '</td>');
      $el.append('<td>' + pets.owner + '</td>');
      $el.append('<td>' + pets.name + '</td>');
      $el.append('<td>' + pets.breed + '</td>');
      $el.append('<td>' + pets.type + '</td>');
    }
  };
});
