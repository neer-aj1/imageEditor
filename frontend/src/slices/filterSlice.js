import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    sharpness: 0,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setBrightness: (state, action) => {
            state.brightness = action.payload;
        },
        setContrast: (state, action) => {
            state.contrast = action.payload;
        },
        setSaturation: (state, action) => {
            state.saturation = action.payload;
        },
        setHue: (state, action) => {
            state.hue = action.payload;
        },
        setSharpness: (state, action) => {
            state.sharpness = action.payload;
        },
    }
});

export const {setBrightness, setContrast, setSaturation, setHue, setSharpness} = filterSlice.actions;
export default filterSlice.reducer;