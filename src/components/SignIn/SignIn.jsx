import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { SubmitButton } from '../Submit Button/SubmitButton'
import { Input } from '../Input/Input'
import googleLogo from '../../Images/Google logo.webp'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  
  const HandleSubmit = async event => {
    event.preventDefault()
    const data = await fetch('http://localhost:3000').then( rp => rp.json() )
    console.log(data)
  }

  const navigate = useNavigate()

  const navigateSignIn = () => {
    navigate('/')
  }

  return (
    <>
      <div onClick={navigateSignIn} className='sign-logo'>
            <svg width="181" height="202" viewBox="0 0 181 202" fill="none">
              <g clipPath="url(#clip0_28_2)">
                <path d="M90.4399 76.2211C95.2558 92.7798 109.846 131.58 113.721 139.58C106.788 144.532 93.6139 157.169 90.5512 164.559C90.5323 164.695 90.5157 164.836 90.4966 164.971C90.4795 164.926 90.4576 164.878 90.4399 164.832C90.4221 164.878 90.4001 164.926 90.3833 164.971C90.3489 164.8 90.3174 164.624 90.2837 164.452C87.138 157.047 74.0576 144.508 67.1587 139.58C71.0337 131.58 85.6241 92.7798 90.4399 76.2211Z" fill="white"/>
                <path d="M163.909 0C152.642 8.92758 140.002 38.3446 138.174 54.608C136.345 70.8713 140.275 102.921 141.544 118.453C142.838 134.289 138.283 150.937 129.685 146.624C126.394 152.05 121.19 163.722 106.177 176.797C113.235 178.902 127.986 191.526 133.342 200.978C140.067 196.484 145.618 185.999 155.543 181.719C161.028 185.303 164.62 193.004 165.468 201.192C169.348 195.07 181.021 172.417 180.879 141.061C178.248 109.28 162.393 84.1686 159.592 71.0853C156.747 57.7975 150.203 41.1533 163.909 0Z" fill="white"/>
                <path d="M16.9714 0C28.2376 8.92758 40.878 38.3446 42.7064 54.608C44.5347 70.8713 40.6055 102.921 39.3361 118.453C38.0418 134.289 42.5971 150.937 51.1952 146.624C54.4863 152.05 59.6896 163.722 74.7026 176.797C67.645 178.902 52.8941 191.526 47.5385 200.978C40.8127 196.484 35.2624 185.999 25.337 181.719C19.852 185.303 16.2596 193.004 15.4117 201.192C11.5322 195.07 -0.141144 172.417 0.00125126 141.061C2.63173 109.28 18.4876 84.1686 21.2885 71.0853C24.1334 57.7975 30.6767 41.1533 16.9714 0Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_28_2">
              <rect width="180.88" height="201.192" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <p>Blood Bound Games</p>
      </div>
    <div className='signin-container'>
      <form onSubmit={HandleSubmit}>
        <h2>Sign In</h2>

        <Input name='username' type='text' />
        <Input name='password' type='password' />

        <div className='sign-options-label'>
          <span>Or sign in with</span>
          <div></div>
        </div>
        <div className='sign-options'>
          <button id='google'>
            <img src={googleLogo} alt="Google logo" />
          </button>
        </div>
        <SubmitButton />
        <div className='other-sign-options'>
          <Link to={'/signup'}>
            Create Account
          </Link>
          <Link to={'/recovery'}>
            Trouble signing in?
          </Link>
        </div>
      </form>
    </div>
    </>
  )
}
