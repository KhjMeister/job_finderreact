import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import React from 'react'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'ویرایش شغل' : 'اضافه کردن شغل'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
            labelText="موقعیت شغلی"

          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
            labelText=" شرکت"
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='مکان شغل'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
  
          />
          {/* job status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
            labelText='وضعیت  شغل'

          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='نوع کار'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              ثبت
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              پاک کردن فرم
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
