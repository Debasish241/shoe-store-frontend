import {
    createSlice
} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'counter',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addtoCart:(state,action)=>{
            const item = state.cartItems.find((p)=> p.id === action.payload.id)
            if(item){
                item.quantity++;
                item.attributes.proce = item.oneQuantityPrice *item.quantity
            }else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        updateCart :(state, action)=>{
            state.cartItems = state.cartItems.map((p)=>{
                if(p.id === action.payload.id){
                    if(action.payload.key === 'quantity'){
                        p.attributes.price = p.oneQuantityPrice * action.payload.val
                    }
                    return {...p, [action.payload.key]: action.payload.val}
                }
                return p;
            })
        },
        removeFromCart:(state, action)=>{
            state.cartItems = state.cartItems.filter((p)=> p.id !== action.payload.id)
        }
    },
})

// Action creators are generated for each case reducer function
export const {addtoCart,updateCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer