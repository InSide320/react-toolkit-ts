import axios from "axios";
import {IUser} from "../../modules/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         setTimeout(() => dispatch(userSlice.actions.usersFetchingSuccess(response.data)), 1500)
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)