function validateForm() {

    //get name
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if(name.trim() ==="" || email.trim() === "")
    {
        alert("Fields cannot be empty");
    }

}