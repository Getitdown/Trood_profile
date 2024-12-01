import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css';
import Avatar from '../Avatar/Avatar';
import Radio from '../Radio/Radio';
import Interests from '../Interests/Interests';


export default function Form() {

    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm();
    
    const nameRegister = register('name', {
        required: '*The field "Name" is required',
        pattern: {
            value: /^[\p{Letter}\s\-.']+$/u,
            message: 'Please, enter a valid name',
        }
    });

    const lastNameRegister = register('lastname', {
        required: '*The field "Lastname" is required',
        pattern: {
            value: /^[\p{Letter}\s\-.']+$/u,
            message: 'Please, enter a valid lastname',
        }
    });

    const jobTitleRegister = register('jobtitle');

    const phoneRegister = register('phone', {
        required: '*The field "Phone" is required',
        pattern: {
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            message: 'Please, enter a valid phone. Phone number must be in the format +<country code><number>',
        }
    });
    const emailRegister = register('email', {
        required: '*The field "Email" is required',
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Please, enter a valid email',
        }
    });

    const addressRegister = register('address');

    const pitchRegister = register('pitch');

    const sendForm = data => {

        localStorage.setItem('formData', JSON.stringify(data));

        reset(data)
    };

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            reset(parsedData)
        }
    }, [reset]);

    const handleReset = () => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            reset(parsedData)
        } else {
            reset();
        }
    };

    const setAvatarURL = (newAvatarURL) => {
        setValue('avatarURL', newAvatarURL)
    }

    return (
        <form onSubmit={handleSubmit(sendForm)} className={s.form} >
            <div className={s.form_avatar}>
                <Avatar avatarURL={watch('avatarURL')} setAvatarURL={setAvatarURL}/>
            </div>
            <div className={s.form_input} >
                <input type="text" placeholder='Name' {...nameRegister} />
                {errors.name && <p>{errors.name?.message}</p>}
                <input type="text" placeholder='Lastname' {...lastNameRegister} />
                {errors.lastname && <p>{errors.lastname?.message}</p>}
                <input type="text" placeholder='Job Title' {...jobTitleRegister} />
                <input type="text" placeholder='Phone' {...phoneRegister} />
                {errors.phone && <p>{errors.phone?.message}</p>}
                <input type="text" placeholder='Email' {...emailRegister} />
                {errors.email && <p>{errors.email?.message}</p>}
                <input type="text" placeholder='Address' {...addressRegister} />
                <input type="text" placeholder='Pitch' {...pitchRegister} />
            </div>
            <Radio />
            <Interests />
            <div className={s.form_buttons}>
                <button type='submit'>Save</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </form>
    )
}
