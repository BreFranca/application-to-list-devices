import axios from 'axios'
import { store } from 'react-notifications-component';

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
        store.addNotification({
            title: "Sucesso!",
            message: "Status atualizado com sucesso",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        });
        return true
    })
        .catch(function (error) {
            // handle error
            store.addNotification({
                title: "Erro!",
                message: "Não foi possível atualizado o Status",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            });
            console.warn('Error', error)
            return false
        })

}