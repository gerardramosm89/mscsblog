
export default function(state = { images: [] }, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return { ...state, images: action.payload.images.data}
    default:
      return state;
  }
}