import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1> Favorite Places</h1>
        <Link className='link' to='/banff'>Banff</Link>
        <Link className='link' to='/capecod'>Cape Cod</Link>
        <Link className='link' to='/whitemountains'>White Mountains</Link>
    </div>
  )
}
export default Home;