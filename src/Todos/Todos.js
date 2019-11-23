import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import TodoCongrats from './TodoCongrats';

export const Todos = ({ list, textString, inputError, add, save, remove, updateText, setEditable, clearError, editable }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '400px' }} >
      <h2>Todos:</h2>
      <ul className='list-group list-group-flush'>
      {!list || list.length === 0 && <TodoCongrats /> }
      {
        list && list.map((t, idx) => (
          <TodoItem
            key={t}
            todo={t}
            index={idx}
            editable={editable}
            setEditable={() => setEditable(t)}
            cancelEdit={() => setEditable('')}
            remove={() => remove(t)}
          />
        ))
      }
      </ul>

      <br />

      <div className='input-group'>
        <input
          type='text'
          className={`form-control ${inputError ? 'is-invalid' : ''}`}
          value={textString}
          onChange={e => updateText(e.target.value)}
          placeholder='Write something'
          onFocus={() => clearError()}
        />
        <div className='input-group-append'>
          {editable && editable.length ? (
            <button className='btn btn-outline-secondary' onClick={save}>Save</button>
          ) : (
            <button className='btn btn-outline-secondary' onClick={add}>Add</button>
          )}
        </div>
        <div className='invalid-feedback' >{inputError}</div>
      </div>
    </div>
  )
}

Todos.propTypes = {
  list: PropTypes.array.isRequired,
  textString: PropTypes.string.isRequired,
  editable: PropTypes.string.isRequired,
  inputError: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
  setEditable: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired
}

export default Todos
