import React, { Component } from 'react';
import '../css/style.css';
/*import $ from 'jquery';*/
import Typed from 'react-typed';


export default class NavBar extends Component {

render() {

  return (
   <>
<div className="banner mb-4"
>
  <Typed
  className='h3 text-light '
   strings={[
    'Your best choose...',
   'For your company...',
   'For your business ...',
   'And more !!',
   'Welcome to my page.']}
   typeSpeed={40}
   backSpeed={50}
   />
</div>

   </>
   );
}
}


