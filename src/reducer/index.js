import { combineReducers } from 'redux';

const counterCountReducer =(counter = 0, action)=>{
    if (action.type === 'COUNTER_PLUS'){
        return counter + 1;
    } else if (action.type === 'COUNTER_MINUS'){
        return counter - 1;
    } else if (action.type === 'COUNTER_DUPLI') {
        return counter * 2;
    }
    return counter;
};

export default combineReducers({
    counter: counterCountReducer
})