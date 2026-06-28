async function loadHeader() {
    const res = await fetch("componenets/header.html");
    const html = await res.text();

    document.body.insertAdjacentHTML("afterbegin", html);
}

async function loadFooter() {
    const res = await fetch("componenets/footer.html");
    const html = await res.text();

    document.body.insertAdjacentHTML("beforeend", html);
}

async function loadLayout() {
    await loadHeader();
    await loadFooter();
}
