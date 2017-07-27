

export default function(state = { modal: false}, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { modal: !state.modal }
    default:
      return state;
  }
}