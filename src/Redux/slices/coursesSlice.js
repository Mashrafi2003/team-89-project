import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'

const coursesSlice = createSlice({
    name: 'couses',
    initialState: {
        all: []
    }
})

export default coursesSlice.actions;

