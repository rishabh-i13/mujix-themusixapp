export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //Remove after finished developing
    // token: 'BQBQHg_krV5w7DvYgPwRbL1tO9pdheblZtyerJMr3b-L-tDYEV5EKF3yB65IqM7HSv3zyzlFq02FLZMWmLKK59l2QuRFMXo3VQU2AIP5cYD6q1cyWXPa0WU31x_Mcs2NF-DFPmAxG661luxNx7gHptC6H30TShVMApGpOcymFLaPU4f76DZIhlbYXI4YM29ERLhL5IOEJm8u-alvFxw_',
};

const reducer=(state,action)=>{
console.log(action);

// Action-> type,[payload]

switch(action.type){
    case "SET_USER":
        return {
            ...state,
            user:action.user
        };
    case "SET_TOKEN":
        return{
            ...state,
            token:action.token,
        }
    case "SET_PLAYLISTS":
        return{
            ...state,
            playlists:action.playlists,
        }
    case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        }
        case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };
        case "SET_PLAYING":
            return {
             ...state,
             playing: action.playing,
            };
        case "SET_ITEM":
                return {
                ...state,
                item: action.item,
            };

        
        default:
            return state;
}
}

export default reducer;