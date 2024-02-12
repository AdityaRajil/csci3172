function submitForm() {
    /*
        The preventDefault() function is usually used with event handlers dduring form submissions or anchor tag clicks to prevent the default action associated with the event.
    */
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var country = document.getElementById("country").value;
    var displayDiv = document.getElementById("displayData");

    /*
    To keep previous data on the page, we just have to append the innerHTML property of displayDiv element.
    */ 
    displayDiv.innerHTML += "<h3>Form Data</h3>" +
                            "<p>First Name: " + firstName + "</p>" +
                            "<p>Last Name: " + lastName + "</p>" +
                            "<p>Gender: " + gender + "</p>" +
                            "<p>Country: " + country + "</p>";
}
