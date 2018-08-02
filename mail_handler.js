$('#contactForm').on('submit', submitForm); // step 1: connect submit action to button
function submitForm() {
    // step 2: get data from input fields
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();


    // check if data is present
    console.log(name, email, message);

    // step 3: send data to contact form mailer
    $.ajax({
        method: 'post',
        url: 'http://example.com/api/contact.php', //your API, If you do not have one, no data will sent
        dataType: 'json',
        data: {
            'to_email': 'your.email@example.com',
            'from_fname': fname,
            'from_email': email,
            'message': message
        },
        'success': formSuccess,
        'error': formError
    });
    return false;//inorder not to referesh the page.
}
// step 4: handle response (success or error)
function formSuccess(result) {
    if (result.error) { // there was an error
        alert(result.error);
    } else { // everything went well
        alert(result.response);
        $("#contactForm")[0].reset(); //instead of saying getElementById
        // clear input fields
    }
}
// step 5: handle error
function formError(xhr, status, error) {
    alert("There has been an error. Please retry");
}