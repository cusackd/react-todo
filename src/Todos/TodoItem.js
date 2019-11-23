import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({todo, index, remove, setEditable, editable, cancelEdit}) => {

  const editableItem = () => {
    return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <div>
          {++index}. {todo}
        </div>
        <button className="btn  btn-dark" onClick={() => cancelEdit()}>
          <span >Cancel Edit</span>
        </button>
      </li>
    )
  }

  const nonEditableItem = () => {
    return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <div style={{ cursor: 'pointer' }} onClick={() => setEditable()}>
          {++index}. {todo}
        </div>
        <button className='close' onClick={() => remove()}>
          <span >&times;</span>
        </button>
      </li>
    )
  }

  return todo === editable ? editableItem() : nonEditableItem();

}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  setEditable: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
}

export default TodoItem
