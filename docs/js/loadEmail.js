async function loadProfile() {
    const {
        data: {user}
     } = await supabased.auth.getUser();

     document.getElementById("email").value = user.email

     const {data, error} = await supabased
     .from("profiles")
     .select("*")
     .eq("id", user.id)
     .single();

     if (error && error.code === "PGRST116") {
        await supabased
        .from("profiles")
        .insert({
            id: user.id
        });

        return loadProfile();
    }
    if (error) {
        console.error(error);
        return;
     }
    
    for (const [key, value] of Object.entries(data)){
        const input = document.getElementById(key);

        if (input){
            input.value = value ?? "";
        }
    }
}

loadProfile();

async function saveProfile() {
    const {
        data: {user}
    } = await supabased.auth.getUser();

    const {error} = await supabased
    .from("profiles")
    .update({
        phone:
            document.getElementById("phone").value,
        username:
            document.getElementById("username").value,
        location:
            document.getElementById("location").value,
        facebook:
            document.getElementById("facebook").value,
        instagram:
            document.getElementById("instagram").value,
        twitter:
            document.getElementById("twitter").value,
    })
    .eq("id", user.id);

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    alert("Profile saved!");
}

document
    .getElementById("saveBtn")
    .addEventListener("click", async (e) => {
        e.preventDefault();
        await saveProfile();
    });