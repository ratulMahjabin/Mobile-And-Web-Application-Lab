import React, { useState, useContext } from 'react'
import Timer from './Components/Timer'
import { TimerContext } from './Context/TimerContext'

export default function TimerList() {
  const { timerContext, setTimerContext } = useContext(TimerContext)
  const [addButton, setAddButton] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    project: '',
  })
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const changeAddButtonStatus = () => {
    setAddButton(!addButton)
  }
  const createButtonOnClick = () => {
    changeAddButtonStatus()
    setTimerContext([
      ...timerContext,
      { title: formData.title, project: formData.project, secs: 0 },
    ])
    setFormData({
      title: '',
      project: '',
    })
  }
  const cancelButtonClick = () => {
    changeAddButtonStatus()
  }
  return (
    <div>
      {timerContext.map((timer) => (
        <div>
          <Timer timer={{ ...timer }} />
          <hr />
        </div>
      ))}
      {!addButton && (
        <div>
          <button onClick={changeAddButtonStatus}>
            <p>add</p>
          </button>
        </div>
      )}
      {addButton && (
        <div>
          <form>
            <label>Title</label>
            <textarea
              name={'title'}
              value={formData.title}
              onChange={onChangeFormData}
            ></textarea>
            <label>Project</label>
            <textarea
              name={'project'}
              value={formData.project}
              onChange={onChangeFormData}
            ></textarea>
            <button onClick={createButtonOnClick}>Create</button>
            <button onClick={cancelButtonClick}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  )
}
