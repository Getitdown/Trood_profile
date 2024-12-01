import React from 'react';
import s from './Tasks.module.css';
import { GoPlus } from "react-icons/go";

export default function Tasks() {
  return (
    <div className={s.tasks_container}>
        <h3>Tasks:</h3>
        <div className={s.rectangle}>
            <div>
                <p>Create task</p>
                <ul></ul>
            </div>
            <label>
                <input type="" />
            </label>
            <GoPlus />
        </div>
    </div>
  )
}
