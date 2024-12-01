import React, { useState } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import s from './Avatar.module.css'

export default function Avatar({ avatarURL, setAvatarURL }) {

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarURL(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (file.size > 2 * 1024 * 1024) {
      alert('The file is too large! Please choose a file smaller than 2MB.');
      return;
    }
  };

  return (
    <label className={s.avatar}>
      {avatarURL ? (
        <img src={avatarURL} alt='Avatar' className={s.avatarImage} />
      ) : (
        <TbCameraPlus />
      )}
      <input
        type="file"
        accept='image/*'
        onChange={handleAvatarChange}
        className={s.fileInput} />
    </label>
  );
}
