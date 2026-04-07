  if (error) {
    document.getElementById('message').style.color = 'red'
    document.getElementById('message').innerText = error.message
  } else {
    document.getElementById('message').style.color = 'green'
    document.getElementById('message').innerText = 'Account created! Check your email to confirm.'
  }
}

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
