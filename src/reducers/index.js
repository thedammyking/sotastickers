import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

function cart(state=[], action) {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case 'SELECT_SIZE':
            {let {index, size} = action;
            let newState = [...state] ;
            newState[index].size = size;
            return newState;}
        case 'ENTER_ITEM_QUANTITY':
            {let {index, qty} = action;
            let newState = [...state] ;
            newState[index].qty = qty;
            return newState;}
        case 'DUPILCATE_ITEM':
            return [
                ...state.slice(0, action.index),
                {...state[action.index]},
                ...state.slice(action.index)
            ];
        default:
            return state;
    }
}

const rootReducer = combineReducers({cart, routing: routerReducer})

export default rootReducer;