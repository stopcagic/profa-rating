import axios from 'axios'

let Services = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

let profs = {
    async getall() {
        let response = await Services.get('/predavaci')
        let data = await response.data

        return data
    }
}

let auth = {
    async login(email, password) {
        let response = await Services.post('/user/login', {
            email: email,
            password: password
        })
        let data = await response.data

        localStorage.setItem('user', JSON.stringify(data))

        return true;
    },
    logout() {
        localStorage.removeItem('user')
    }
}

export { Services, profs, auth }