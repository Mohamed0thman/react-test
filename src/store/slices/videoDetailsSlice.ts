import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StatusEnum from 'constants/StatusEnum';
import { videosAPI } from '../../services/api';

const initialState = {
  video: null,
  status: StatusEnum.IDLE,
  errors: null,
};

const getVideo = createAsyncThunk(
  'videoDetails/getVideo',
  async (id, { rejectWithValue }) => {
    try {
      const res = await videosAPI.getVideo(id);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

const videoDetailsSlice = createSlice({
  name: 'videoDetails',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getVideo.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getVideo.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = StatusEnum.SUCCESS;
        state.errors = null;
        state.video = payload.data;
      })
      .addCase(getVideo.rejected, (state, { payload }) => {
        state.status = StatusEnum.ERROR;
        state.errors = payload;
      }),
});

export default videoDetailsSlice;

export const videoDetailsReducer = videoDetailsSlice.reducer;
export const videoDetailsActions = videoDetailsSlice.actions;
export const selectVideo = (state) => state.videoDetails.items;
export const selectVideoDetailsStatus = (state) => state.videoDetails.status;
export const selectVideoDetailsErrors = (state) => state.videoDetails.errors;
export { getVideo };
