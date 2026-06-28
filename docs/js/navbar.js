const session = await getSession();

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

if (!session){
    document.getElementById("navMenu").innerHTML =`
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
} else {
    document.getElementById("navMenu").innerHTML =`
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
    `
}