import axios from "axios"
import authHeader from "./authHeader"

const baseURL = "http://localhost:5000/api/users"

const register = async ({ username, email, password }) => {
    try {
        const res = await axios.post(baseURL + "/register", { username, email, password }, authHeader)
        if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
        return res
    } catch (err) {
        return err
    }
}

const login = async ({ email, password }) => {
    try {
        const res = await axios.post(baseURL + "/login", { email, password }, authHeader)
        if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
        return res
    } catch (err) {
        return err
    }

}

const logout = async () => {
    await localStorage.removeItem("user")
}

const authService = {
    register,
    login,
    logout
}

export default authService