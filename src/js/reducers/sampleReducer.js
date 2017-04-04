import { ACTION1, ACTION2 } from '../actions/sampleActions';

const initialState = { foo: 'bar'}

const sample = (state = initialState, action) => {

    switch (action.type) {

        case ACTION1: 
            return { foo:'action1'};

        case ACTION2: 
            return { foo:'action2'};

        default:
            return state;
    }
};
export default sample;