document.addEventListener("DOMContentLoaded", () => {
    console.log("Site loaded");
});

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const memberBtn = document.getElementById("memberBtn");

memberBtn.addEventListener("click", () => {
    window.location.href = 'https://www.paypal.com/webapps/hermes?token=7VK90414HM201205D&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1782234834794&flowType=WPS&mfid=1782234834579_f85554244d478';
});