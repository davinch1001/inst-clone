import axios from "axios";

const UPDATE_ALBUM_DATA = 'UPDATE_ALBUM_DATA';
const initState = {
  albumsData: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ALBUM_DATA: {
            return {...state, albumsData: action.albumData}
        }
        default: return state
    }
}

export const getAlbumData = () => {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/photos')
            .then(({data}) => {
                return dispatch({type:UPDATE_ALBUM_DATA, albumData: data})
            })
    }
}