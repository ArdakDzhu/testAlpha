import * as types from './actionTypes';

const initialState = {
    memes: [],
    menuStatus: 0,
    filteredMemes: [],
}

export const memesList = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_MEMES:
            return {...state, memes: action.payload}
        case types.CHANGE_STATUS_LIKE_MEM:
            const index = state.filteredMemes.findIndex((item) => item.id === action.payload)
            return {...state, filteredMemes: [...state.filteredMemes, state.filteredMemes[index].statusLike = !state.filteredMemes[index].statusLike]}
        case types.CHANGE_MENU_STATUS:
            return {...state, menuStatus: action.payload}
        case types.FILTERED_ALL:
            return {...state, filteredMemes: [...state.memes]}
        case types.FILTERED_LOVER:
            const loverMemes = state.memes.filter(item => item.statusLike === true)
            console.log(loverMemes)
            return {...state, filteredMemes: loverMemes}
        default:
            return state;

    }
}
