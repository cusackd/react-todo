// ------------------------------------
// Constants
// ------------------------------------
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_SAVE = 'TODOS_SAVE'
export const TODOS_REMOVE = 'TODOS_REMOVE'
export const TODOS_UPDATE_TEXT = 'TODOS_UPDATE_TEXT'
export const TODOS_SET_EDITABLE = 'TODOS_SET_EDITABLE'
export const TODOS_CLEAR_ERROR = 'TODOS_CLEAR_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export function add () {
  return {
    type: TODOS_ADD
  }
}

export function save () {
  return {
    type: TODOS_SAVE
  }
}

export function remove (todo) {
  return {
    type: TODOS_REMOVE,
    payload: todo
  }
}

export function updateText (textString) {
  return {
    type: TODOS_UPDATE_TEXT,
    payload: textString
  }
}

export function setEditable (textString) {
  return {
    type: TODOS_SET_EDITABLE,
    payload: textString
  }
}

export function clearError () {
  return {
    type: TODOS_CLEAR_ERROR
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [TODOS_ADD]: state => {
    if (state.textString === '') {
      return {...state, inputError: 'Please add text' }
    } else if (state.list && state.list.includes(state.textString)) {
      return {...state, inputError: 'Item has already been added' }
    } else {
      return {...state, list: [...state.list, state.textString], textString: '' }
    }
  },
  [TODOS_SAVE]: state => {
    if (state.textString === '') {
      return {...state, inputError: 'Please add text' }
    } else if (state.list.includes(state.textString)) {
      return {...state, inputError: 'Item has already been added' }
    } else {
      return {
        ...state,
        list: state.list.map((item) => {
          if (item === state.editable) {
            return state.textString
          }
          return item
        }),
        textString: '',
        editable: '',
      }
    }
  },
  [TODOS_REMOVE]: (state, action) => ({ ...state, list: state.list.filter(t => t !== action.payload), inputError: '' }),
  [TODOS_UPDATE_TEXT]: (state, action) => ({ ...state, textString: action.payload}),
  [TODOS_CLEAR_ERROR]: state => ({ ...state, inputError: ''}),
  [TODOS_SET_EDITABLE]: (state, action) => ({ ...state, editable: action.payload, textString: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: ['Buy milk', 'Do exercises', 'Cook dinner'],
  textString: '',
  editable: '',
  inputError: '',
}
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
