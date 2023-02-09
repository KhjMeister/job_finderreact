import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import React from 'react'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>صفحه ای که درخواست کردی پیدا نشد</h3>
        <p>به نظر میاد صفحه ای که دنبالش می گردی وجود نداره </p>
        <Link to='/'>برگشت به صفحه اصلی</Link>
      </div>
    </Wrapper>
  )
}

export default Error
