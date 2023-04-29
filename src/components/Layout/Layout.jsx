import React from 'react';
import cl from './Layout.module.scss';
import {LayoutProvider} from "../../hooks/layout/layout-provider";
import {TaskProvider} from "../../hooks/tasks/task-provider";

export default function Layout(props) {
  return (
    <TaskProvider>
      <LayoutProvider>
        <div className={cl.layout}>{props.children}</div>
      </LayoutProvider>
    </TaskProvider>
  )
}

