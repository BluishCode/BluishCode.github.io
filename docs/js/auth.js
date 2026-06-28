const SUPABASE_URL = "https://emloyjampawjqmrrwoqo.supabase.co";
const SUPABASE_ANNON_KEY = "sb_publishable_LAcvlWiTlAjK05phHYJvTg_R7pbIvFH";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANNON_KEY
);

//Login

async function login(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
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
    const {data} = await supabase.auth.getSession();

    return data.session;
}

async function isLoggedIn() {
    const session = await getSession();
    return session !== null;
}