// Initialize Supabase
const supabase = supabase.createClient(
  'https://wscnygnsnnqkuiyslwsy.supabase.co', // your project URL
  'sb_publishable_dQIDUqGO778PAoIlz4fvNA_l-6M8NSy' // your anon key
);

// Signup function
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

// Login function
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
