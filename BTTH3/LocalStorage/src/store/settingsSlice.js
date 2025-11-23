import { createSlice } from '@reduxjs/toolkit';
import { getSettings, updateSettings } from '../database/Database';

const initialState = {
    darkMode: false,
    fontSize: 16,
    isLoading: true,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setSettings: (state, action) => {
            state.darkMode = action.payload.darkMode;
            state.fontSize = action.payload.fontSize;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setDarkMode, setFontSize, setSettings, setLoading } = settingsSlice.actions;

export const loadSettings = () => {
    return async (dispatch) => {
        try {
            const settings = await getSettings();
            dispatch(setSettings(settings));
        } catch (error) {
            console.error('Error loading settings:', error);
            dispatch(setLoading(false));
        }
    };
};

export const updateDarkMode = (darkMode) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setDarkMode(darkMode));
            const state = getState();
            await updateSettings(state.settings.darkMode, state.settings.fontSize);
        } catch (error) {
            console.error('Error updating dark mode:', error);
        }
    };
};

export const updateFontSize = (fontSize) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setFontSize(fontSize));
            const state = getState();
            await updateSettings(state.settings.darkMode, state.settings.fontSize);
        } catch (error) {
            console.error('Error updating font size:', error);
        }
    };
};

export default settingsSlice.reducer;

