import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummydata'
import WidgetSm from '../../components/widgetSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'


const Home = () => {
  return (
    <div className='home'>
         <FeaturedInfo />
         <Chart data={userData}  title='User Analytics' dataKey='Active User' grid/>
         <div className='homeWidgets'>
          <WidgetSm />
          <WidgetLg />
         </div>
    </div>
  )
}

export default Home
