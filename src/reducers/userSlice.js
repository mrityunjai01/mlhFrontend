import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jsonwebtoken'
const API_URI = "http://localhost:8080"
const options = data => {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};

const validCredentials = () => {
    const authorizationToken = localStorage.getItem('jwtToken')
    if (authorizationToken === null)
        return false
    try {
        if (jwt.decode(authorizationToken)) return true
        else return false
    } catch(err) {
        return false
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticate: false,
        userId: validCredentials() === false ? '' : jwt.decode(localStorage.getItem('jwtToken')).uid,
        email: 'not logged in'
    },
    reducers: {
        userLogin: (state, action) => {
            const token = localStorage.getItem('jwtToken')
            state.userId = jwt.decode(token).id
            state.email = jwt.decode(token).email
            state.isAuthenticated = true
            
            
        },
        userLogout: (state, action) => {
            state.isAuthenticated = false
            state.userId = "No Auth"
            state.email = "Not logged in"
            localStorage.setItem('jwtToken', '')
        }
    }
})

export const {userLogin, userLogout} = userSlice.actions
export const userLoginThunk = userLoginCreds => async dispatch => {
    let res = await fetch(`${API_URI}/user/login`, options(userLoginCreds))
    res = await res.json()
    
    if (res.token) {
        const token = res.token
        delete res.token
        localStorage.setItem('jwtToken', token)
        
        dispatch(userLogin())
        return "AUTH_OK"
    }
    return "AUTH_ERR"
}
export default userSlice.reducer