export const initialState={
    basket:[],
    user:null
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);
const reducer = (state,action) => {
    switch(action.type){
        case "set_user":
            return {
                ...state,
                user:action.user
            }
        case "Add_to_basket":
            return {
                ...state,
                basket:[...state.basket,action.item]
            };

        break;
        case "remove_from_basket":
            let newBasket =[...state.basket];
            const index = state.basket.findIndex((basketitem)=>basketitem.id===action.id)
            if(index >=0 ){
                newBasket.splice(index,1);
            }else{
            }
            return {
                ...state
            };
            return{
                 ...state, 
                basket:newBasket,
            };
        default:
            return state;
    }
}


export default reducer;