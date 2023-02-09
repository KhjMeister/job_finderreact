import { useState,useEffect } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import React from 'react'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [lastName, setLastName] = useState(user.lastName)
  const [location, setLocation] = useState(user.location)
//   useEffect(() => {
//     if(user){
//       setName(user.name)
//       setEmail(user.email)
//       setLastName(user.lastName)
//       setLocation(user.location)
//     }
// }, [user])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>پروفایل</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            labelText='نام '

            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='نام خانوادگی'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type='email'
            labelText='ایمیل '

            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            labelText='مکان زندگی'
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'لطفا صبر کنید' : 'ثبت تغییرات'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
