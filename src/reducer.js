
export const initialState = {
    user : null,
    playlists  : [],
    playing : false,
    item : null,
    token : null,
}

const reducer = (state, action) => {

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

        case "SET_TOKEN":
            return{
                ...state,
                token : action.token
            }

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists : action.playlists,
            }

        case "SET_RECENTLY_PLAYED":
            return{
                ...state,
                recently_played : action.recently_played
            }

        case "SET_RECOMMENDATION":
            return{
                ...state,
                recommendation: action.recommendation
            }

        default:
            return state;
    }

}

export default reducer;