const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const success = await login(email, password);
            
            if(success){
                window.location.href = "index.html"
            } else (
                console.log('login failed')
            )
        });

console.log(loginForm)