import {createSlice} from '@reduxjs/toolkit'

// Function to get initial value from localStorage
const getInitialValue = () => {
    try {
        const savedValue = localStorage.getItem('counterValue');
        return savedValue ? parseInt(savedValue, 10) : 0;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return 0;
    }
}

// Function to save value to localStorage
const saveToLocalStorage = (value) => {
    try {
        localStorage.setItem('counterValue', value.toString());
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

const CounterSlice = createSlice({
    name : 'counter',
    initialState : {value : getInitialValue()},
    reducers : {
        increment : (state) => {
            state.value += 1;
            saveToLocalStorage(state.value);
        },
        decrement : (state) => {
            if (state.value > 0){
                state.value -= 1;
                saveToLocalStorage(state.value);
            }
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload;
            saveToLocalStorage(state.value);
        },
        resetCounter : (state) => {
            state.value = 0;
            saveToLocalStorage(state.value);
        }
    }
    
})


export const {increment, decrement, incrementByAmount, resetCounter} = CounterSlice.actions
export default CounterSlice.reducer

