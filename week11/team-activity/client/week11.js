import makeRequest from './authHelpers.js'
import Auth from './auth.js'

const auth = new Auth()

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    auth.login(getPosts)
})

async function getPosts() {
    const data = await makeRequest("posts", "GET", null, auth.token)
    console.log(data)
}