import axiosClient from '@app/AxiosClient'
import { AUTH_LOGIN_ENDPOINT } from '@constant/endpoints'

const authApi = {
    signIn: async (user)  => {
        const url = `${AUTH_LOGIN_ENDPOINT}`
        return await axiosClient.post(url, user).then(response => response.data)
    }
}
export default authApi