const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //pwShowHide.forEach(eyeIcon =>{
    for(let i = 0; i < pwShowHide.length; i++ ) {
        pwShowHide[i].addEventListener("click", ()=>{
            //pwFields.forEach(pwField =>{
            for(let j = 0; j < pwFields.length; j++) {
                if(pwFields[j].type ==="password"){
                    pwFields[j].type = "text";

                    //pwShowHide.forEach(icon =>{
                        pwShowHide[i].classList.replace("uil-eye-slash", "uil-eye");
                    //})
                }else{
                    pwFields[j].type = "password";

                    //pwShowHide.forEach(icon =>{
                        pwShowHide[i].classList.replace("uil-eye", "uil-eye-slash");
                    //})
                }
            }
        })
    }

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
