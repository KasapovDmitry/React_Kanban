import React, { useState } from 'react'
import Card from './card/Card'
import {useTasks} from "../../../hooks/tasks/use-tasks";
export default function Column(props) {

  const [isNewTaskInputShown, setIsNewTaskInputShown] = useState(false);
  const [inputCardName, setInputCardName] = useState();
  const [castInput, setCastInput] = useState(false);
  const [inputSelectValue, setInputSelectValue] = useState("Выбирите задачу");

  const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(undefined);

  const {getTasksByState, getTasksByExcludedState, addTask, moveTask, removeTask } = useTasks();

  const tasks = getTasksByState(props.state);
  const hasTasks = tasks.length > 0;

  const onInputCard = (e) => {
      setInputCardName(e.target.value);
  }

  return (
    <div className='column'>
      <div className="column__header">{props.name}</div>
      <div className="column__wrapper">
        {hasTasks &&
          tasks.map((task) =>
              <Card key={task.id} id={task.id} name={task.name} onRemove={(id) => {
                  removeTask(id);
              }}/>
          )
        }
      </div>

      {isNewTaskInputShown &&
        <div className='card'>
          <input className='newtask' type="text" onInput={onInputCard}/>
        </div>
      }

      {isNewTaskSelectShown &&
        <div className="card-select">
          <div className='card__select_field'
            onClick={() => {
              setCastInput(() => castInput ? false : true);
            }}
          >
            <div className="selext-name">
              {inputSelectValue}
            </div>
            <div 
              onClick={() => {
                setCastInput(false);
              }}
              className={castInput ? 'select-out' : 'select-arrow'}
            >
               +
            </div>
          </div>
          {castInput &&
            <div className="select__menu_wrap">
              <div className="select__menu">
                {getTasksByExcludedState(props.state).map((task) =>
                  <p className="select__menu_link" 
                    key={task.id} 
                    value={task.id}
                    onClick={() => {
                      setSelectedTaskId(task.id);
                      setInputSelectValue(task.name);
                      setCastInput(false);
                    }}
                  >{task.name}</p>
                )}
              </div>
            </div>  
          }
        </div>
        
      }

      <div className="column__footer">
        {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
        <button className='column__footer_btn' onClick={() => props.state === 'backlog'
            ? setIsNewTaskInputShown(true)
            : setIsNewTaskSelectShown(true)}
        >+ Add Task</button>}

        {(isNewTaskInputShown || isNewTaskSelectShown) &&
          <button className='column__footer_btn save' onClick={() => {
              if (props.state === 'backlog') {
                if(inputCardName) {
                  setIsNewTaskInputShown(false)
                  addTask(inputCardName);
                  setInputCardName(undefined);
                } else {
                  alert("Введите значение в инпут!");
                }
              } else {
                  setIsNewTaskSelectShown(false);
                  moveTask(selectedTaskId, props.state);
                  setInputSelectValue("Выбирите задачу");
              }
          }}
          >Submit</button>
        }
        {(isNewTaskInputShown || isNewTaskSelectShown)
          && <button className='column__footer_btn close' onClick={() => {
              if (props.state === 'backlog') {
                setIsNewTaskInputShown(false)
              }else {
                setIsNewTaskSelectShown(false);
              }
          }}
          >&#10006;</button>
        }
      </div>
    </div> 
  )
}

