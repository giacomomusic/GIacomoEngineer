// Import Supabase client library via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Supabase keys
const SUPABASE_URL = 'https://wscnygnsnnqkuiyslwsy.supabase.co'
const SUPABASE_KEY = 'sb_publishable_dQIDUqGO778PAoIlz4fvNA_l-6M8NSy'

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// DOM elements
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const signupBtn = document.getElementById('signup')
const loginBtn = document.getElementById('login')
const statusP = document.getElementById('status')

// Signup button listener
signupBtn.addEventListener('click', async () => {
  const { data, error } = await supabase.auth.signUp({
    email: emailInput.value,
    password: passwordInput.value
  })
  if (error) statusP.textContent = 'Error: ' + error.message
  else statusP.textContent = 'Signup successful! Check your email.'
})

// Login button listener
loginBtn.addEventListener('click', async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value
  })
  if (error) statusP.textContent = 'Error: ' + error.message
  else statusP.textContent = 'Login successful!'
})
