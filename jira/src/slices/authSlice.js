import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

// signin action
export const signin = createAsyncThunk(
    "auth/signin",
    async (values) => {
        try {
            const data = await authAPI.signin(values);
            return data;
        } catch (error) {
            throw error;
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signin.pending, (state, action) => {
            return { ...state, loading: true };
        });
        builder.addCase(signin.fulfilled, (state, action) => {
            return { ...state, loading: false, user: action.payload };
        });
        builder.addCase(signin.rejected, (state, action) => {
            return { ...state, loading: false, error: action.error.message };
        });
    }
});

export default authSlice.reducer;