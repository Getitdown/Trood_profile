import React from 'react';
import s from './Header.module.css';
import { IoMdArrowBack } from "react-icons/io";


export default function Header() {
  return (
    <div className={s.header}>
        <IoMdArrowBack />
        <img src="logo.png" alt="Logo"  />
        <h2>Profile</h2>
    </div>
  )
}
