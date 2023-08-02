
export const addReview = (reviewData) => {
    return {
      type: "ADD_REVIEW",
      payload: reviewData,
    };
  };
  
  const initialState = {
    reviews: [
      { name: "John Doe", reviews: "thnx wael 1" },
      { name: "Jane Smith", reviews: "thnx wael 2" },
      { name: "David Johnson", reviews: "thnx wael 3" },
    ],
  };
  
  const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_REVIEW":
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reviewReducer;
  