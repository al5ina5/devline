import Axios from 'axios'

var API_URL = 'http://localhost:3001/api'

export function doSignUp(name, email, password, callback) {
    Axios.post(API_URL + '/auth/signup', {
        name,
        email,
        password
    })
        .then((res) => callback(res, null))
        .catch((error) => callback(null, error))
}
