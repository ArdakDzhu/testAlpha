import * as types from './actionTypes';

export const addMemes = (memes) => {
    return {type: types.ADD_MEMES, payload: memes}
}

export const changeStatusLikeMem = (id) => {
    return {type: types.CHANGE_STATUS_LIKE_MEM, payload: id}
}

export const changeMenuStatus = (id) => {
    return {type: types.CHANGE_MENU_STATUS, payload: id}
}

export const filteredMemes = (id) => {
    if(id === 1){
        return {type: types.FILTERED_LOVER}
    }
    return {type: types.FILTERED_ALL}
}

export const fetchMemes = () => {
    return (dispatch) => {
        return fetch(`https://api.imgflip.com/get_memes`)
            .then((res) => res.json())
            .then((res) => res.data.memes.map(item => ({...item, statusLike: false})))
            .then((res) => dispatch(addMemes(res)))
            .then((res) => dispatch(filteredMemes(0)))
    }
}

