import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomQuotes = createAsyncThunk('quote/fetchRandom', async () => {
    const response = await axios.get("https://api.quotable.io/random",{httpsAgent:true});
    return response.data;
});

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomQuotes.fulfilled, (state, action) => {
                state.quote = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchRandomQuotes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomQuotes.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            });
    },
});

export default quoteSlice.reducer;
