 const reducer = (cartState, {type, payload})=>{

    if(type === "INCREMENT"){
       let updateAmont = cartState.cartItem.map((curElem)=>{
        if(curElem.id === payload){
            return{...curElem, amount: curElem.amount + 1}
        }
        return curElem
       })
        return {
            ...cartState, cartItem: updateAmont
        }
    }
    if(type === "DECREMENT"){
        let updatedCart = cartState.cartItem.map((curElem)=>{
            if(curElem.id == payload){
                if(curElem.amount != 0){
                    return{ ...curElem, amount: curElem.amount - 1}
                }
            }
            return curElem
        })
        return {
            ...cartState, cartItem: updatedCart
        }
    }
    if(type === "DELETE"){
        let updatedData=cartState.cartItem.filter((curElem)=>{
            return curElem.id !== payload
        })
        return {
            ...cartState, cartItem:updatedData
        }
    }




    return cartState
}


export default reducer