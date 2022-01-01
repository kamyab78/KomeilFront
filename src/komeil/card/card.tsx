import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './card.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Config } from 'komeil/config/config';
import Emptybas from '../../assets/images/emptybascket.png'
const Card = () => {
  const [Orderlist,setOrderlist]=useState<any>([])
  const [cost,setcost]=useState<any>(0)
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

getorderlist()
}, []);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
  function getorderlist(){
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // "Authorization": "Basic " + window.localStorage.getItem('basic')

        }


    };

    fetch(Config()['webapi'] + "/order/log/"+window.localStorage.getItem('phone')+"/NOT_PAID", requestOptions)
        .then(response => {
          if(response.status===200){
              response.json().then(rep => {

               console.log(rep)
               var total=0
               for(var i=0;i<rep.length;i++){
if(rep[i].productItemResponseDTO.discount===0){
total+=(rep[i].productItemResponseDTO.netPrice)*rep[i].count
}
else{
total+=(rep[i].productItemResponseDTO.netPrice * ((100 - rep[i].productItemResponseDTO.discount) / 100))*rep[i].count
}
               }
               setcost(total)
               setOrderlist(rep)
            })
          }
          





        })
        .catch(error => console.log('error', error));

}
function deleteItem(id,pid){
  
  const body = {
"orderListId": id,
"number": 0,
"productItemId": pid,

  }
var requestOptions = {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    // "Authorization": "Basic " + window.localStorage.getItem('basic')

},
body: JSON.stringify(body)


};

fetch(Config()['webapi'] + "/order/edit-number/" + window.localStorage.getItem('phone'), requestOptions)
.then(response => {


    console.log(response)

    if (response.status === 200) {
     getorderlist()

    }
 






})
.catch(error => console.log('error', error));  
}

return(
    <div className='row komeil-card-page'>
             <div className='col-1'/>
        <div className='col-10 title-box'>
<h1>سبد خرید</h1>
        </div>
        <div className='col-1'/>
        <div className='col-1'/>
        <div className='col-10'>
          {Orderlist.length===0?(
            <>
            <div className='row row-empty'>
<div className='box-row-empty'>
  <img src={Emptybas}></img>
  <h1>سبد خرید شما خالی است</h1>
  <Link className='txtback' to="/">بازگشت</Link>
</div>
            </div>
            </>
          ):(
<>
<div className='row row-titles'>
  
    <div className='col-1 col-titles'></div>
    <div className='col-2 col-titles'><h1>قیمت</h1></div>
    <div className='col-1 col-titles'><h1>تعداد</h1></div>
    <div className='col-2 col-titles'><h1>فی</h1></div>
      <div className='col-6 col-titles'><h1>نام محصول</h1></div>
</div>
<div className='row'>
  <div className='col col-items-card'>
    {Orderlist.map((index:any)=>(
  <div className='row row-items'>
  
  <div className='col-1 col-items'><i onClick={()=>deleteItem(index.id,index.productItemResponseDTO.id)} className="material-icons-outlined">
delete_outline
</i></div>
{index.productItemResponseDTO.discount===0?(
     <div className='col-2 col-items'>
       <h6>تومان</h6>
       <h1>{((index.productItemResponseDTO.netPrice)*index.count).toLocaleString()}</h1>
  
     </div>
  ):(
    <div className='col-2 col-items'>
       <h6>تومان</h6>
      <h1>{((index.productItemResponseDTO.netPrice * ((100 - index.productItemResponseDTO.discount) / 100))*index.count).toLocaleString()}  </h1>
  
      </div>
  )}
  <div className='col-1 col-items'><h1>{index.count}</h1></div>
 
  {index.productItemResponseDTO.discount===0?(
     <div className='col-2 col-items'>
         <h6>تومان</h6>
       <h1>{index.productItemResponseDTO.netPrice.toLocaleString()}</h1>
   
     </div>
  ):(
    <div className='col-2 col-items'>
      <h6>تومان</h6>
      <h1>{(index.productItemResponseDTO.netPrice * ((100 - index.productItemResponseDTO.discount) / 100)).toLocaleString()}</h1>
    
    </div>
  )}
 
    <div className='col-6 col-items'>
      
        <div className='sub-description-col-items'>
<h1>{index.productItemResponseDTO.name}</h1>
{index.colorname!=="0"?(
  <h2>رنگ :{index.colorname}</h2>
):null}



        </div>
        <div className='sub-img-col-items'>
<img alt='' src={index.productItemResponseDTO.imageUrl}></img>
        </div>
    </div>
</div>

    ))}

  </div>
</div>

<div className='row row-amount'>
  

  <div className='col-4 col-amount'>
  <h6>تومان</h6>
    <h1> {cost.toLocaleString()} </h1>
    </div>
  <div className='col-8 total-col-amount'><h1>مجموع</h1></div>

</div>
<div className='row row-btn'>
  

  <div className='col-3 col-btn'>
      <Link className='checkoutbtn' to='/purchase'>ثبت نهایی</Link>
  </div>
  <div className='col-3 col-btn'>
  <Link className='continuebtn' to='/'>ادامه خرید</Link>
  </div>
  <div className='col-6 '></div>

</div>
   
</>
          )}

        </div>
        <div className='col-1'/>
    </div>
)
}
export default Card