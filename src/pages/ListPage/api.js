import axios from 'axios'

const apiPath = 'http://localhost:8888/devices'
export const getPhones = async () => {
    return await axios.get(apiPath)
        .then(function (response) {
            // handle success
            const { data } = response.data
            return data.map((phone) => {
                phone.status = phone.active ? 'activate' : 'deactivate'
                return phone
            })
        })
        .catch(function (error) {
            // handle error
            console.warn('Error', error)
            return error
        })
}

export const updateStatus = async (readingName, active) => {
    return await axios.patch(`${apiPath}/${readingName}?active=${active}`).then(function (response) {
        // handle success
        return true
    })
        .catch(function (error) {
            // handle error
            console.warn('Error', error)
            return false
        })

}