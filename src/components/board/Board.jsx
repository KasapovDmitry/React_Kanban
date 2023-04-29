import React from 'react'
import Column from './column/Column'
import {useTasks} from "../../hooks/tasks/use-tasks";


export default function Board() {
  const {states} = useTasks();
  return (
    <div className='container'>
      <div className="container-board">
        {states.map(
          (state) =>
              <Column key={state.id} name={state.name} state={state.state}/>
        )}
      </div>
    </div>
  )
}

