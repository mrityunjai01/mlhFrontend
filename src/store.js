import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import courseSlice from './reducers/courseSlice'
export default configureStore({
    reducer: {
        user: userSlice,
        course: courseSlice,
    },
})