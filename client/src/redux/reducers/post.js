const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        posts: action.payload,
      };

    case "CREATE_POST":
      return {
        posts: [...state.posts, action.payload],
      };

    case "UPDATE_POST":
      return {
        posts: [
          ...state.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        ],
      };

    case "DELETE_POST":
      const filtered = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return { ...state, posts: filtered };

    default:
      return state;
  }
};

export default postReducer;
