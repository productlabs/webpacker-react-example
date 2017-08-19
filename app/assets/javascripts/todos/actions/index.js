
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_DONE_FILTER = 'TOGGLE_DONE_FILTER';
export const SELECT_ORDER = 'SELECT_ORDER';

// TODO: remove created_at and retrieve it in saga.
export function addTodo(content, due_date, created_at) {
  return {
    type: ADD_TODO,
    payload: { content, due_date, created_at },
  };
}

export function updateTodo(id, content, due_date) {
  return {
    type: UPDATE_TODO,
    payload: { id, content, due_date },
  };
}

export function toggleTodoDone(id) {
  return {
    type: TOGGLE_TODO_DONE,
    payload: { id },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
}

export function toggleDoneFilter() {
  return {
    type: TOGGLE_DONE_FILTER,
  };
}

export function selectOrder(sortBy) {
  return {
    type: SELECT_ORDER,
    payload: { sortBy },
  };
}
