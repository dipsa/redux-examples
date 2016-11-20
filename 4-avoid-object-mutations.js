const toggleTodo = (todo) => {
  // mutating
  // todo.completed = !todo.completed;
  // return todo;

  // non-mutating
  // return {
  //   id: todo.id,
  //   text: todo.text,
  //   completed: !todo.completed
  // }

  // es6 - require a polyfill like babel
  // return Object.assign({}, todo, {
  //  completed: !todo.completed
  // });

  // es7 - proposed, enabled in babel with stage 2 preset
  return {
    ...todo,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('all tests passing...');
