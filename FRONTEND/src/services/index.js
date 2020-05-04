import axios from 'axios'

let Services = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

let profs = {
    async getall() {
        let response = await Services.get('/home')
        let data = await response.data

        return data
    }
}

export { Services, profs }