import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
function Writer() {
  return (
    <div>
      <div className='Container-fluid  text-center py-2 bg-dark'>
        <div className='row'>
        <div className='col-md-12'>
        <h1 style={{ paddingTop: '100px',paddingBottom: '100px',fontSize:'40px' , margin: 'auto 0', fontWeight: 'normal', color:'white'  }}>
OUR SERVICES IS{' '}
<span style={{ color: 'orange', fontSize:'40px', paddingBottom: '100px', fontWeight: 'bold' }}>
  {/* Style will be inherited from the parent element */}
  <Typewriter
    words={['WEB DEVELOPMENT', 'MOBILE APP DEVELOPMENT', 'SOFTWARE DEVELOPMENT ', 'GAME DEVELOPMENT','SEARCH ENGION OPTIMIZATION']}
    loop={true}
    cursor
    cursorStyle='_!'
    typeSpeed={50}
    deleteSpeed={50}
    delaySpeed={3000}
  />
</span>
</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Writer


