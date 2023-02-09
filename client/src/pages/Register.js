import React,{ useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: ' وروود با موفقیت انجام شد در حال انتقال ....',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'کاربر ایجاد شد در حال انتقال ....',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page rtl-style'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'ورود' : 'ثبت نام'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText="نام"

          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText="ایمیل"

        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText="پسورد"
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          ثبت
        </button>
        <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: 'testUser@test.com', password: 'secret' },
              endPoint: 'login',
              alertText: ' وروود با موفقیت انجام شد در حال انتقال ....',
            });
          }}
        >
          {isLoading ? 'در حال لود شدن ...' : 'دمو'}
        </button>
        <p style={{direction:'rtl'}}>
          {values.isMember ? 'هنوز ثبت نام نکرده اید؟' : 'قبلا ثبت نام کرده اید؟'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'ثبت نام' : 'ورود'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
