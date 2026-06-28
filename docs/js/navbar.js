
async function buildNavbar(){
  let nav = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="info.html">Info</a></li>
      <li><a href="regions.html">Regions</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="join.html">Join</a></li>
      <li>
        <a href="https://clanmacleodusa.tribalpages.com/">Genealogy</a>
      </li>
      <li>
        <a
          href="https://nebula.wsimg.com/78ba3bd5cffefc93fde13069beebdac7?AccessKeyId=088DE7FB67531E10106D&disposition=0&alloworigin=1"
          >Dunvegan foundation</a
        >
      </li>
    </ul>
    `;

  if (await isLoggedIn()){
    nav += `
      <ul>
        <li><a href="account.html">My Account</a></li>
        <li><a href="#" id="logoutBtn">Logout</a></li>
      </ul>
    `;
  } else {
    nav +=`
      <ul>
        <li><a href="login.html">Members Login</a></li>
      </ul>
    `;
  }

  document.getElementById("navMenu").innerHTML = nav;
  
  let logoutBtn = document.getElementById("logoutBtn");
  if(logoutBtn){
    logoutBtn?.addEventListener("click", async (e) => {
      e.preventDefault();
      await logout();
  });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildNavbar();

});


