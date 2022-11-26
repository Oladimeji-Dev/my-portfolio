import React from 'react'
import { HomeSection } from '../../component/HomeSection/HomeSection'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className='container'>
        <HomeSection />
        <section className="two">
            <h1>Second Page</h1>
        </section>
        <section className="three">
            <h1>Third Page</h1>
        </section>
        <section className="four">
            <h1>Fourth Page</h1>
        </section>
        <section className="five">
            <h1>Fifth Page</h1>
        </section>
    </div>
  )
}
