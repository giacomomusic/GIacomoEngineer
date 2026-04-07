// 1️⃣ Initialize Supabase
const supabase = window.supabase.createClient(
  'https://wscnygnsnnqkuiyslwsy.supabase.co', // Your Supabase Project URL
  'sb_publishable_dQIDUqGO778PAoIlz4fvNA_l-6M8NSy' // Your Supabase publishable key
);

// 2️⃣ Signup function
window.signup = async function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerText = 'Please enter both email and password.';
    return;
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerText = error.message;
  } else {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerText = 'Account created! Check your email to confirm.';
  }
};

// 3️⃣ Login function
window.login = async function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerText = 'Please enter both email and password.';
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerText = error.message;
  } else {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerText = `Logged in as ${email}!`;
  }
};
