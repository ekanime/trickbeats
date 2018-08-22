// $('contact-form').submit(function(e){
//     name = document.getElementById('name');
//     email = document.getElementById('email');
//     message = document.getElementById('message');

//     if(!name.value||!email.value||!message.value){
//         alert('Please check your entries');
//     }else{
//         $.ajax({
//             url: "https://formspree.io/trickbeatsent@gmail.com", 
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         });
//         e.preventDefault();
//         $(this).get(0).reset();
//         alert('Message Sent');
//     }
// });