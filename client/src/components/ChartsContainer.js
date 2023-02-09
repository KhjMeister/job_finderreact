import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'


const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useAppContext()
  return (
    <Wrapper>
      <h4>درخواست های این ماه</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'نمودار مساحتی' : 'نمودار میله ای'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}

export default ChartsContainer
