changes needed for production

remove frontend package.json 
line 2 "proxy": "http://localhost:4000",

Home.js
line8 remove -- const response = await fetch('/api/info/')
add -- const response = await fetch('http://localhost:4000/api/info')

infoDetails
line4 remove const response = await fetch('/api/info/')
add -- const response = await fetch('http://localhost:4000/api/info')

infoForm
line29 remove  const response = await fetch('/api/info', {
add --  const response = await fetch('http://localhost:4000/api/info', {

useSignup
line13 remove const respone = await fetch('./api/user/signup')
add -- const respone = await fetch('http://localhost:4000/api/user/signup')