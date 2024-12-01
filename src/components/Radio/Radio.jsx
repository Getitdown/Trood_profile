import React from 'react';
import s from './Radio.module.css';

export default function Radio() {
  return (
    <div className={s.toggle_contiiner}>
        <p>Show your profile in Launchpad?</p>
        <div className={s.toggle_group}>
            <label>
                <input type="radio" name="visibility" value="Public"  /> Public
            </label>
            <label>
                <input type="radio" name="visibility" value="Private" defaultChecked/> Private
            </label>
        </div>
    </div>
  )
}
