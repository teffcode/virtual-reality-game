import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'

import { CarsContext } from '../../Context'

import './styles.css'

const Form = () => {
    const context = useContext(CarsContext)
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm()
  
    const checkValues = async () => {
        if (isValid && isDirty) {
            context.setShowComponent(true)
        } else {
            context.setShowComponent(false)
        }
    }

  return (
    <div className='form'>
        <h1 className='form__title'>VIRTUAL REALITY GAME</h1>
        <p className='form__subtitle'>Please, fill out this form to start</p>
        <form onSubmit={handleSubmit(checkValues)}>
            <div className='form-field'>
                <label className='form-field__label'>Name:</label>
                <div>
                    <input
                        className='form-field__input'
                        placeholder='Max Emilian Verstappen'
                        {...register('name', { required: true })} />
                    {errors.name && <span className='form-field__error'>This field is required</span>}
                </div>
            </div>

            <div className='form-field'>
                <label className='form-field__label'>Email:</label>
                <div>
                    <input
                        className='form-field__input'
                        placeholder='max@formulaone.com'
                        type='email'
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span className='form-field__error'>This field is required and should be a valid email</span>}
                </div>
            </div>

            <div className='form-field'>
                <label className='form-field__label'>Date of Birth:</label>
                <div>
                    <input
                        className='form-field__input'
                        type="date"
                        {...register('dateOfBirth', { required: true })} />
                    {errors.dob && <span className='form-field__error'>This field is required</span>}
                </div>
            </div>

            <div className='form-field'>
                <label className='form-field__label'>Favorite Color:</label>
                <div>
                    <input
                        className='form-field__input'
                        placeholder='Red'
                        {...register('favoriteColor', { required: true })} />
                    {errors.color && <span className='form-field__error'>This field is required</span>}
                </div>
            </div>

            <div className='form-field'>
                <label className='form-field__label'>Salary:</label>
                <div>
                    <div className='form-field__range'>
                        <span>60K</span>
                        <span>100K</span>
                    </div>
                    <input
                        className='form-field__input'
                        type="range"
                        min="60000"
                        max="100000"
                        {...register('salary', { required: true })} />
                    {errors.salary && <span className='form-field__error'>This field is required</span>}
                </div>
            </div>

            <button className='form__button' type='submit'>Start</button>
        </form>
    </div>
  )
}

export default Form