import React from 'react';
import s from './Interests.module.css'

export default function Interests() {
  return (
    <div className={s.interests_container}>
        <div>
            <p>The scopes of your interest:</p>
            <button>+</button>
        </div>
        <div>
            <p>Potential interests:</p>
            <button>+</button>
        </div>
        <div>
            <p>Your links:</p>
            <button>+</button>
        </div>
    </div>
  )
}
