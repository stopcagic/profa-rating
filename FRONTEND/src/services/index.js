import axios from 'axios'
import router from '@/router'

let Services = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

Services.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + auth.getToken();
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
    async signup(email, password, faks) {

        let response = await Services.post('/user/register', {
            email: email,
            password: password,
            faks: faks
        })
        let data = await response.data

        return data
    },
    logout() {
        localStorage.removeItem('user')
    },
    getUser() {
        return JSON.parse(localStorage.getItem("user"))
    },
    getToken() {
        let user = auth.getUser()
        if (user && user.token) {
            return user.token
        }
        else return 'Token does not exist.'
    },
    getAuthenticated() {
        let user = auth.getUser()
        if (user && user.token) return true;
        else return false;
    },
    state: {
        get authenticated() {
            return auth.getAuthenticated()
        }
    }
}
export { Services, profs, auth }