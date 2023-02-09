import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import React from 'react'

const links = [
  { id: 1, text: 'داشبرد', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'تمام کارها', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'اضافه کردن کار', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'پروفایل', path: 'profile', icon: <ImProfile /> },
]

export default links
