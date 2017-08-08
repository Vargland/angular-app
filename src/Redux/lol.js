
//store
var store = Redux.createStore(reducer,state);

//state
var state = {
  list : []
}
//reducer
function reducer (state,action){
  var newState = Object.assign({},state);
  if(action.type === 'ADD'){ 
    newState.list = state.list.concat([{
      id:action.id,
      li:"<li>"+action.todo+"  <button onclick='removeItem("+action.id+")'>delete</button> </li>"
    }]);
  }else if(action.type === 'REMOVE'){
    newState.list =  state.list.filter(function(item){
      return parseInt(item.id) !== parseInt(action.id); 
    });       
  }
  return newState;
}

//action 
 
var actionAdd = function(todo,id){
  return {
  type:  'ADD',
  todo,
  id
  }
};

var actionRemove = function(id){
  return {
  type:  'REMOVE',
  id
  }
}
//dispacht
var id = 1;
var addTodo = function(event){
  if(event.keyCode === 13){
   store.dispatch(actionAdd(event.target.value,id));
    event.target.value = '';
    id++;
   }
}

var removeItem =  function(id){
  store.dispatch(actionRemove(id));
}
//subcribe

var showTodos = function(){
  document.getElementById("todoList").innerHTML = store.getState().list.map(function(item){ return item.li }); 
}

store.subscribe(showTodos);


