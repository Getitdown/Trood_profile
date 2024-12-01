import React from 'react';
import { GoPlus } from "react-icons/go";
import s from './Projects.module.css'

export default function Projects() {
  return (
    <div className={s.projects_container}>
        <h3>Projects:</h3>
        <div className={s.rectangle}>
            <div>
                <p>Create project</p>
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
