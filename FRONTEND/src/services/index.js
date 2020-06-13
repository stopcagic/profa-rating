import axios from 'axios'
import router from '@/router'

let Services = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

Services.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Services.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || 403) {
        auth.logout()
        router.go()
    }
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
    },
    getUser() {
        return JSON.parse(localStorage.getItem("user"))
    },
    getToken() {
        let user = auth.getToken()
        if (user && user.token) {
            return user.token
        }
        else return 'Token does not exist.'
    }
}

export { Services, profs, auth }