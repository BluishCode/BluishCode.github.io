document.addEventListener("DOMContentLoaded", () => {
    console.log("Site loaded");
});

const memberBtn = document.getElementById("memberBtn");

if (memberBtn){
    memberBtn.addEventListener("click", () => {
        window.location.href = 'https://www.paypal.com/webapps/hermes?token=7VK90414HM201205D&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1782234834794&flowType=WPS&mfid=1782234834579_f85554244d478';
    });}

const loginForm = document.getElementById("loginForm");
    if(loginForm){
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("Email:", email);
        console.log("Password:", password)
    });}