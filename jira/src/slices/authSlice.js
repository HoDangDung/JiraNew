import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";
import { Navigate } from "react-router-dom";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

// signin action
export const signin = createAsyncThunk(
    "auth/signin",
    async (values) => {
        try {
            const data = await authAPI.signin(values);
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        } catch (error) {
            throw error;
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("user");
            return (<Navigate to="/" />, { ...state, user: null });
        }
    },
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

export const { logout } = authSlice.actions;

export default authSlice.reducer;