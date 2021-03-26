//Reducer
//State = [{...}, {...}]
/**
 * {
 * type :LIKE /DISLIKE
 * payload:{ personnage star Wars}
 * }
 */
export const getAllLikesCount = state =>  state.length;
export const isLiked = (state,person) => state.find (p => p.url === person.url);


//reducer
function starWarsLike(state ,action){

    switch(action.type){
        case "LIKE":{
            return [...state, action.payload]
        }
        case "DISLIKE":{
            return state.filter(person => person.url !== action.payload.url)
        }
        default:
            return state
    }

}
export default starWarsLike;