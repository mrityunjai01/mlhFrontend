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
        isAuthenticated: validCredentials(),
        userId: validCredentials() === false ? '' : jwt.decode(localStorage.getItem('jwtToken')).uid,
    },
    reducers: {
        userLogin: (state, action) => {
            fetch(`${API_URI}/user/login`, options(action.payload))
            .then(res => res.json())
            .then(res => {
                
                if (res.token) {
                    const token = res.token
                    delete res.token
                    localStorage.setItem('jwtToken', token)
                    state.isAuthenticated = true
                    console.log(jwt.decode(token))
                    state.userId = jwt.decode(token).uid
                }
                // console.log(res)
                // return res
            })
            
        },
        userLogout: (state, action) => {
            localStorage.setItem('jwtToken', '')
        }
    }
})

export const {userLogin, userLogout} = userSlice.actions
export default userSlice.reducer