import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:"user",
    initialState:{
        products : null,
        isFetching : false,
        error : false
    },
    reducers:{
        //GET ALL
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        getProductSuccess:(state, action)=>{
            state.isFetching=false;
            state.products = action.payload;
        },
        getProductFailure:(state, action)=>{
            state.isFetching=false;
            state.error = true;
        },
         //DELETE
         deleteProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        deleteProductSuccess:(state, action)=>{
            state.isFetching=false;
            state.products.splice(
                state.products.findIndex((item)=> item._id===action.payload),1
            );
        },
        deleteProductFailure:(state, action)=>{
            state.isFetching=false;
            state.error = true;
        }

    },
});

export const {getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure} = productSlice.actions;
export default productSlice.reducer;