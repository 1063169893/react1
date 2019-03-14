import axios from 'axios'

export default ({ method, url, params, data, headers }) => {
    return axios({
            method,
            url,
            params,
            data,
            headers
        }).then(res => res.data)
        .catch(err => err)
}