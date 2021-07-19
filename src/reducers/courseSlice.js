import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jsonwebtoken'
const API_URI = "http://localhost:8080"
const options = data => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwtToken')
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
        getAllCourses: (state, action) => {
            state.allCourses = action.payload.courses
        },
        getThisCourse: (state) => {
            fetch('/api/courses')
            .then(res => res.json())
            .then(res => {
                state.thisCourse = res.data
            })
        }, 
        getMyCourses: (state, action) => {
            state.myCourses = action.payload.courses
        }
    }
})

export const {getAllCourses, getThisCourse, getMyCourses} = userSlice.actions
export const getAllCoursesThunk = () => async dispatch => {
    let res = await fetch(`${API_URI}/course/getCourses`, options({}))
    res = await res.json()
    
    if (Array.isArray(res)) {
        dispatch(getAllCourses({
                courses: res
            })
        )
        return "OK"
    }
    return res
}
export const getMyCoursesThunk = () => async dispatch => {
    let res = await fetch(`${API_URI}/course/getCourses`, options({}))
    res = await res.json()
    
    if (Array.isArray(res)) {
        dispatch(getMyCourses({
                courses: res
            })
        )
        return "OK"
    }
    return res
}

export default userSlice.reducer