import { INCREMENT, DECREMENT } from '../actions/counterActions';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: write the code for case INCREMENT


        // TODO: write the code for case DECREMENT
        

        default:
            return state;
    }
};

export default counterReducer;