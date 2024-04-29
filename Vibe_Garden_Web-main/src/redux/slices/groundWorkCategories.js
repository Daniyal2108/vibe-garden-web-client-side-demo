import { createSlice } from "@reduxjs/toolkit";
import images from "../../constants/images";

const initialState = {
  categories: [
    {
      title: "Essentials",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kas",
      videos: [
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
      ],
    },
    {
      title: "Building Slocks",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kas",
      videos: [
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
      ],
    },
    {
      title: "Deeper Cuts",
      videos: [
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
      ],
    },
    {
      title: "Play",
      videos: [
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
        {
          title: "Title",
          videoDuration: "3:15",
          thumbnail: `${images.placeholder3}`,
        },
      ],
    },
  ],
};

const groundWorkCategoriesSlice = createSlice({
  name: "groundWorkCategories",
  initialState,
  reducers: {
    setGWCategories: (state, action) => {
      state.categories = action.payload;
    },
    resetCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { setGWCategories, resetGWCategories } =
  groundWorkCategoriesSlice.actions;

export default groundWorkCategoriesSlice.reducer;
