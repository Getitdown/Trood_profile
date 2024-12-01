import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import Tasks from '../../components/Tasks/Tasks';
import Form from '../../components/Form/Form';
import s from './ProfilePage.module.css'

export default function ProfilePage() {
  return (
    <div className={s.container}>
        <div className={s.form_right}>
            <Header/>
            <Projects/>
            <Tasks/>
        </div>
        <div className={s.form_left}>
            <Form/>
        </div>
        
    </div>
  )
}
