const SUPABASE_URL = "https://emloyjampawjqmrrwoqo.supabase.co";
const SUPABASE_ANNON_KEY = "sb_publishable_LAcvlWiTlAjK05phHYJvTg_R7pbIvFH";

const supabased = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANNON_KEY
);

//Login

async function login(email, password) {
    const {data, error} = await supabased.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alerot(error.message);
        return false;
    }

    return true;
}

async function getSession() {
    const {data} = await supabased.auth.getSession();

    return data.session;
}

async function isLoggedIn() {
    const session = await getSession();
    return session !== null;
}

async function logout() {
    const {error} = await supabased.auth.signOut();

    if(error){
        console.error("Logout error:", error.message);
        alert("Logout Failed: " + error.message);
        return;
    }

    window.location.href = "index.html";
}

async function loadProfile() {
    const {
        data: {user}
     } = await supabase.auth.getUser();

     if (!user) {
        window.location.href = "login.html";
        return;
     }
    
    document.getElementById("email") = user.email;
    document.getElementById("phone") = user.phone;
    document.getElementById("username") = user.username;
    document.getElementById("location") = user.location;
    document.getElementById("facebook") = user.facebook;
    document.getElementById("instagram") = user.instagram;
    document.getElementById("twitter") = user.twitter;
}