async function buildNavbar() {
  let nav = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="info.html">Info</a></li>
      <li><a href="regions.html">Regions</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="join.html">Join</a></li>
    </ul>
    `;

  if (await isLoggedIn()) {
    nav += `
      <ul>
        <li><a href="account.html">My Account</a></li>
        <li><a href="#" id="logoutBtn">Logout</a></li>
      </ul>
    `;
  } else {
    nav += `
      <ul>
        <li><a href="login.html">Members Login</a></li>
      </ul>
    `;
  }

  document.getElementById("navMenu").innerHTML = nav;

  let logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn?.addEventListener("click", async (e) => {
      e.preventDefault();
      await logout();
    });
  }
}
