import React from 'react'
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CardsDetails = () => {
  return (
    <div className='container mt-2' >
      <h2 className='text-center'>Item details Page</h2>
      <section className='container mt-3'>
        <div className="iteamsdetails">
          <div className="items_img">
            <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
          </div>
          <div className="details">
<Table>
  <tr>
    <td>
      <p><strong>Resturant</strong> :Massala Theoryy</p>
      <p><strong>Price</strong> ₹350</p>
      <p><strong>Dishes</strong> North Indian, Biryani, Mughlai</p>
      <p><strong>Total</strong> ₹350</p>
      
    </td>
    <td>
    <p><strong>Rating</strong> <strong style={{backgroundColor:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.8★</strong></p>
    <p><strong>Order Review</strong> 1175 + order placed from here recently</p>
    <p><strong>Remove</strong><span> <DeleteForeverIcon style={{color:"red",marginBottom:"3px",cursor:"pointer"}}/></span></p>
    </td>
  </tr>
</Table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardsDetails
