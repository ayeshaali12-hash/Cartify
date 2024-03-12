import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToWishlist(state, action){
            // console.log("state",state)
            // console.log("action",action)
            let tempData = state.data;
            let isItemExist = false;
            tempData.map((item)=>{
                if(item.id==action.payload.id){
                    isItemExist = true;
                    // console.log("fsdf",action.payload.id)
                }
            });
            if(!isItemExist){
                tempData.push(action.payload);
            }
            state.data = tempData;
            // console.log("action",action);
            // console.log("state",state);

        },

        // RemoveItemFromWishlist(state, action){
        //     console.log("action payload",action.payload);
        //     console.log("state",state);
        //     // const wishlistItems = state.data.filter(
        //     //     (wishlistItem) => wishlistItem.id !== action.payload.id
        //     // );
        //     // state.data = wishlistItems;
        //     // tempData.filter((item)=>{
                
        //     //     console.log("action.payload",action)
        //     //     item.id==action.payload.id})
        // }

        RemoveItemFromWishlist(state, action){
            let tempData = state.data;
            console.log("tempData", tempData);
            console.log("action.payload", action.payload);
            tempData.splice(action.payload, 1)

            state.data = tempData;
        },

    },
});
export const {addItemToWishlist, RemoveItemFromWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;