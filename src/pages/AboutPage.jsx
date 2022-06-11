import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
<div className='about'>
  <h1>About this project</h1>
  <p>ho la lal laaaaaaaaaaa</p>
  <p>v 1.0.09</p>
  <p>
    <Link to='/'>back</Link>
  </p>
</div>
    </Card>
  )
}

export default AboutPage