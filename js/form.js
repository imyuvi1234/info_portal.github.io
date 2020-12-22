function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }

  {
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
  
  {
      var z = document.forms["myForm"]["email"].value;
      if (z == "") {
        alert("email must be filled out");
        return false;
      }
  {
        var q = document.forms["myForm"]["textarea"].value;
        if (q == "") {
          alert("textarea must be filled out");
          return false;
        }
  

} 
