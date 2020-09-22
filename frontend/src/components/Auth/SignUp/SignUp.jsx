import React from 'react'
import {Link} from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import {useDispatch} from 'react-redux'
import {fetchUserRegistration} from '../../../redux/actionType'

export const SignUp = () => {
		const [state, useState] = useForm({email: '', password: '', userName: ''})
		const dispatch = useDispatch()
  return (
      <>
        Sign up with your email address
        <label htmlFor="email-signup">What should we call you?</label>
        <input
            id="email-signup"
            type="email"
            name="email"
            placeholder="Enter your email"
						value={state.email}
						onChange={useState}
        />
        <label htmlFor="password-signup">PASSWORD:</label>
        <input
            id="password-signup"
            type="password"
            name="password"
            placeholder="Create a password"
						value={state.password}
						onChange={useState}
        />
        <label htmlFor="userName-signup">What should we call you?</label>
        <input
            id="userName-signup"
            type="text"
            name="userName"
            placeholder="Enter a profile name"
						value={state.userName}
						onChange={useState}
        />
        <button
            className="btn btn-green btn-lg"
						onClick={(e) => {
						  e.preventDefault()
						  dispatch(fetchUserRegistration(state))
						}}
        >
          Sign up
        </button>

        Have an account?

        <Link to="/login">
          Log in
        </Link>
      </>
  )
}
