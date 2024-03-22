import { useState, useEffect } from 'react'

import './App.css'

import { FaCheck, FaTimes } from 'react-icons/fa'

function App() {

  const [task, setTask] = useState([])

  function add(e) {

    e.preventDefault();
    const form = e.target;
    const value = form.querySelector("input").value;
    form.querySelector("input").value = ""
    form.querySelector("input").focus()

    if (value) {
      setTask([...task, { id: Math.random(), body: value }])
    }

  }

  function done(btn) {
    const task = btn.target.parentElement.parentElement
    task.classList.toggle("done");
  }

  function remove(btn) {
    const task = btn.target.closest("div")
    task.classList.add("delected")
    setTimeout(() => {
      task.remove()
    }, 700)
  }

  return (
    <main>
      <div className="container">
        <h1>Lista de tarefas</h1>
        <form onSubmit={add}>
          <div className="box">
            <input type="text" id="form-input" placeholder="Digite aqui a tarefa..." />
            <button>Adicionar</button>
          </div>
        </form>

        <div className="list-tasks">
          <h2>Lista de tarefas</h2>

          {task.map(task => (
            <div className="task" key={task.id}>
              <p>{task.body}</p>
              <button className='btn-done' onClick={done}><FaCheck /></button>
              <button className='btn-delete' onClick={remove}><FaTimes /></button>
            </div>
          ))}

        </div>
      </div>
    </main>
  )

}

export default App;
