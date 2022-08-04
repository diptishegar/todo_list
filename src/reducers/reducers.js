
import {
    CREATE_PROFILE,
    DELETE_PROFILE
} from '../actions/actions';



export const profiles = (state = [], action) => {
    const {type, payload} = action;
    switch(type){
        case CREATE_PROFILE:{
            const {text, descrip, difficulty} = payload;
                const newProfile = {
                    text,
                    descrip,
                    difficulty,
                    key: state.length
                };
            
            return state.concat(newProfile);
        }
        case DELETE_PROFILE: {
            const {text} = payload;
            return state.filter(prof => prof.text !== text);
        }
        default:
            return state;
   
    }
    return state;
}

