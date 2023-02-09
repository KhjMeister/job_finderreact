import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              نرم افزار مدیریت  کار
            </h1>
            <p>
            این پرو ژه برای جویندگان کار فناوری اطلاعات و برای یافتن و درخواست شغل مناسب است. جستجوی شغل یا ایجاد یک شغل برای تمام نفرات قابل دستیابی است. مشاغل را بر اساس علایق خود پیدا کنید
            </p>
            <Link to='/register' className='btn btn-hero'>
              ورود/ثبت نام
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
