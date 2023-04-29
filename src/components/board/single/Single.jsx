import React, {useEffect, useState} from 'react'
import css from './Single.module.scss';
import {useParams, useNavigate} from 'react-router-dom'
import {useTasks} from "../../../hooks/tasks/use-tasks";

export const Single = () => {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId])

    const navigateBack = () => navigate(-1);

    return (
      <div className="container container-single">
        <div className={css.single}>
            {task &&
            <div  className={css.singlebody}>
                <textarea className={css.name}
                          value={task.name}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  name: e.target.value
                              })}
                />
                <textarea className={css.description}
                    onChange={(e) =>
                        setTask({
                            ...task,
                            description: e.target.value
                        })}
                        value={
                        task.description 
                        ? task.description
                        : "This task has no description"
                        }
                />
            </div>
            }
            <button className={css['button-close']} onClick={navigateBack}>
              &#10006;
            </button>
            <div className={css['button-save']}>
                <button className='column__footer_btn save'
                 onClick={() => {
                    updateTask(task);
                }}>Save Card</button>
            </div>
        </div>
      </div>
        
    )
}
