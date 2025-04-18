import React from 'react'
import m1 from '../Assets/clothes/1.jpg'
import m2 from '../Assets/clothes/2.jpg'
import m3 from '../Assets/clothes/3.jpg'
import m4 from '../Assets/clothes/4.jpg'
import {Link} from 'react-router-dom'

const ProductList2 = () => {
  return (
 <>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<h1 className='vhead'>View our Latest Clothings</h1>
<br></br>
<br></br>
<div className='pseudo'></div>

<div className='productsets'>

<div className='colarge'>
<img src={m1} className='m1'></img>
<br></br>
<br></br>
<h4>Professional work wear</h4>
<br></br>
<Link to='/shop' className='viewbtn2'>View Now</Link>
</div>



<div className='colarge'>
<img src={m2} className='m1'></img>
<br></br>
<br></br>
<h4>Traditional Designs Style</h4>
<br></br>
<Link to='/shop' className='viewbtn2'>View Now</Link>
</div>


<div className='colarge'>
<img src={m3} className='m1'></img>
<br></br>
<br></br>
<h4>Genz Styles Branding</h4>
<br></br>
<Link to='/shop' className='viewbtn2'>View Now</Link>
</div>




</div>
 </>
  )
}

export default ProductList2
