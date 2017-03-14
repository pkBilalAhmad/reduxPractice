function todoApp(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      var newState = Object.assign({}, state);
 
      newState.todo.items.push({
        message: action.message,
        completed: false
      });
 
      return newState;
 
    case 'COMPLETE_TODO':
      var newState = Object.assign({}, state);
 
      newState.todo.items[action.index].completed = true;
 
      return newState;
 
    case 'DELETE_TODO':
      var items = [].concat(state.todo.items);
 
      items.splice(action.index, 1);
 
      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });
 
    case 'CLEAR_TODO':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });
 
    default:
      return state;
  }
}







// function todoApp(state, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       var newState = Object.assign({}, state);
 
//       newState.todo.items.push({
//         message: action.message,
//         completed: false
//       });
 
//       return newState;
 
//     default:
//       return state;
//   }
// }