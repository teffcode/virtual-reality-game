import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'

import { CarsContext } from './Context'

const Form = () => {
    const context = useContext(CarsContext)
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm()
  
    const checkValues = async data => {
        if (isValid && isDirty) {
            context.setShowComponent(true)
        } else {
            context.setShowComponent(false)
        }
    }

  return (
    <div>
        <h1>Welcome 😊</h1>
        <form onSubmit={handleSubmit(checkValues)}>
            <div>
                <label>Name:</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>

            <div>
                <label>Email:</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>This field is required and should be a valid email</span>}
            </div>

            <div>
                <label>Date of Birth:</label>
                <input type="date" {...register('dob', { required: true })} />
                {errors.dob && <span>This field is required</span>}
            </div>

            <div>
                <label>Favourite Colour:</label>
                <input {...register('colour', { required: true })} />
                {errors.colour && <span>This field is required</span>}
            </div>

            <div>
                <label>Salary:</label>
                <input type="range" min="0" max="100000" {...register('salary', { required: true })} />
                {errors.salary && <span>This field is required</span>}
            </div>

            <button type='submit'>Continue</button>
        </form>
    </div>
  )
}

export default Form