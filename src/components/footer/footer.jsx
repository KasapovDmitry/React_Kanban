import React from 'react'
import {useTasks} from "../../hooks/tasks/use-tasks";

export default function Footer(props) {
  const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer-wrapper">
            <div className="statistic">
              <div className="statistic__sek statistic__active">
                <p className="statistic--text">Active tasks: </p>
                <span className="statistic--num">{getActiveTaskCount()}</span>
              </div>
              <div className="statistic__sek statistic__finish">
                <p className="statistic--text">Finished tasks: </p>
                <span className="statistic--num">{getFinishedTaskCount()}</span>
              </div>
            </div>
            <div className="copiright">
              <div className="statistic__sek statistic__copiright">
                <p className="statistic--text">Kanban board by: </p>
                <span className="statistic--num"> Kasapov Dmitry,</span>
                <span className="statistic--num"> 2023г.</span>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

 