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