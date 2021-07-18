import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jsonwebtoken'

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
        jwt.decode(authorizationToken)
        return true
    } catch(err) {
        return false
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        allCourses: [],
        myCourses: [],
        thisCourse: null,
    },
    reducers: {
        getAllCourses: (state) => {
            fetch('/api/articles')
            .then(res => res.json())
            .then(res => {
                state.allCourses = res.data
            })
        },
        getThisCourse: (state) => {
            fetch('/api/articles')
            .then(res => res.json())
            .then(res => {
                state.thisCourse = res.data
            })
        }, 
        getMyCourses: (state) => {
            fetch('/api/articles')
            .then(res => res.json())
            .then(res => {
                state.myCourses = res.data
            })
        }
    }
})

export const {getAllCourses, getThisCourse, getMyCourses} = userSlice.actions
export default userSlice.reducer