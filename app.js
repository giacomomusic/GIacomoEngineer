1️⃣ Supabase client (replace with YOUR keys)
const supabase = window.supabase.createClient(
  'YOUR_SUPABASE_URL',  // ← Paste your Supabase Project URL here
  'YOUR_ANON_KEY'       // ← Paste your Supabase anon/public key here
)

// 2️⃣ Signup function
window.signup = async function() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    document.getElementById('message').style.color = 'red'
    document.getElementById('message').innerText = error.message
  } else {
    document.getElementById('message').style.color = 'green'
    document.getElementById('message').innerText = 'Account created! Check your email to confirm.'
  }
}

// 3️⃣ Login function
window.login = async function() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    document.getElementById('message').style.color = 'red'
    document.getElementById('message').innerText = error.message
  } else {
    document.getElementById('message').style.color = 'green'
    document.getElementById('message').innerText = `Logged in as ${email}!`
  }
}
