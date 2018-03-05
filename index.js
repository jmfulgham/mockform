function handleForm(){
    event.preventDefault();
    let name =  document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('pw').value.trim();
    let newHTML = `<div class="row"><section class="col-6"><h2>Thank you for submitting!</h2></section></div>`;
    let errorMsg = `<div class="row"><section class="col-6"><h4>Please complete the entire form.</h4></section></div>`
    if (name, email, password == ""||null ) {
        document.getElementById('card1').innerHTML = errorMsg;
    return;
}
else{
    
    document.getElementById('card1').innerHTML = newHTML;
    document.getElementById('form').reset();
}
}