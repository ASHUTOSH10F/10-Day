document.getElementById("form").addEventListener("submit", function(event) 
    {
    event.preventDefault(); // form ko reload hone se roke
    let name= document.getElementById("Name").value.trim();
    let email= document.getElementById("Email").value.trim();
    let password = document.getElementById("Password").value.trim();


    if(name=="")
    {
        alert("Name is required");
    }
    else if(!email.includes("@"))
    {
        alert("Enter a valid email");
    }
    else if(password.length<8)
    {
        alert("Password must be at least 8 characters long");
    }
    else
    {
        alert("Form submitted successfully");
        // Here you can add code to send the form data to the server
    }
    });