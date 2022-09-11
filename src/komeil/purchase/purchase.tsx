import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './purchase.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'
import React, { useEffect,useState ,useCallback} from 'react';
import { Config } from 'komeil/config/config';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const Purchase = () => {
    const [Orderlist,setOrderlist]=useState<any>([])
    const [cost,setcost]=useState<any>(0)
    const [accesstoken,setaccesstoken]=useState("")
    const [orderlistid,setorderlistid]=useState('')
    const [userdata,setuserdata]=useState<any>({})
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setemail]=useState('')
    const [address,setaddress]=useState('')
    const [codeposti,setcodeposti]=useState('')
    const [addressList,setaddressList]=useState([])
    const [addAddress,setaddAddress]=useState(false)
    const [addressId,setaddressId]=useState('')
    useEffect(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  getorderlist()
  getuserdata()
  getUserAddress()
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
                 setorderlistid(rep[0].orderListId)
                 setOrderlist(rep)
                   console.log(rep[0].orderListId)
              })
            }
            
 
  
  
  
  
          })
          .catch(error => console.log('error', error));
  
  }
  function complete(){
     
    const body = {
        "orderListId": orderlistid,
        "discountId": 0,
        "addressId": parseInt(addressId),
        "totalprice": cost*10,
        "transporstId":0
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
        
        fetch(Config()['webapi'] + "/order/complete/" + window.localStorage.getItem('phone'), requestOptions)
        .then(response => {
        
        
            console.log(response)
        
            if (response.status === 200) {

                response.json().then(rep => {
                    console.log(rep)
                    setaccesstoken(rep.accesstoken)
                     document.getElementById("formpurchase")?.click()
                                })

            
            }
         
        
        
        
        
        
        
        })
        .catch(error => console.log('error', error));  
     
  }
  function getuserdata(){
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // "Authorization": "Basic " + window.localStorage.getItem('basic')

        }


    };

    fetch(Config()['webapi'] + "/user/detail?mobile="+window.localStorage.getItem('phone'), requestOptions)
        .then(response => {



            response.json().then(rep => {

setfirstName(rep.firstName)
setlastName(rep.lastName)
setemail(rep.email)


                setuserdata(rep)
            })





        })
        .catch(error => console.log('error', error));
}
function getUserAddress(){
    var requestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          // "Authorization": "Basic " + window.localStorage.getItem('basic')
  
      },
  
  
  
  };
  
  fetch(Config()['webapi'] + "/user/address?mobile="+window.localStorage.getItem('phone'), requestOptions)
      .then(response => {
  
  
          response.json().then(rep => {
              setaddressList(rep)
              console.log(rep)
          })
   
  
  
  
  
  
      })
      .catch(error => console.log('error', error));
     }
     function createAddress(){
      const bodyaddress = {
          "des":address,
          "codeposti": codeposti
    }
    var requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          // "Authorization": "Basic " + window.localStorage.getItem('basic')
  
      },
      body:JSON.stringify(bodyaddress)
  
  
  };
  
  fetch(Config()['webapi'] + "/user/address?mobile="+window.localStorage.getItem('phone'), requestOptions)
      .then(response => {
  
  
  if(response.status===200){
      toast.success('با موفقیت ثبت شد')
      getUserAddress()
      setaddAddress(false)
      setaddress('')
      setcodeposti('')
  }
   
  
  
  
  
  
      })
      .catch(error => console.log('error', error));
     }
    return (
        <div className='row topnoor-purchase-page'>
                      <Modal show={addAddress} onHide={()=>setaddAddress(false)}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body style={{ display: "flex;",flexDirection: "column"}}>
           <h1 style={{textAlign: "right",fontSize:'18px',padding:'15px'}}>آدرس</h1>
           <textarea value={address} onChange={(e)=>setaddress(e.target.value)} style={{direction:'rtl',marginRight:'15px',borderRadius:'5px',
        borderStyle:'solid',borderColor:'gray',width:'100%'}}></textarea>
           <h1 style={{textAlign: "right",fontSize:'18px',padding:'15px'}}>کد پستی</h1>
           <input value={codeposti} onChange={(e)=>setcodeposti(e.target.value)} style={{direction:'rtl',marginRight:'15px',borderRadius:'5px',
        borderStyle:'solid',borderColor:'gray',width:'100%'}}></input>
           <br/>
           <button style={{ width: '150px', height: '40px',borderColor: 'transparent',
        borderRadius: "10px",backgroundColor: "#9439EF",color: 'white',
        marginTop:' 20px'}} onClick={createAddress}>ثبت</button>
        </Modal.Body>
   
      </Modal>
            <div className='col-12 col-title'>
                <h1>پرداخت نهایی</h1>
            </div>
            <div className='col-1'></div>

            <div className='col-5 ' style={{marginTop:'40px',display:'flex',flexDirection:'column'}}>
                {Orderlist.map((index:any)=>(
                    <div className='row col-items'>
<div className='sub-img-col-items'>
<img alt='' src={index.productItemResponseDTO.imageUrl}></img>
        </div>
<div className='sub-description-col-items'>
<h1>{index.productItemResponseDTO.name}</h1>
{index.colorname!=="0"?(
  <h2>رنگ :{index.colorname}</h2>
):null}

<h2>تعداد: {index.count}</h2>



{index.productItemResponseDTO.discount===0?(
     <div className=' col-items'>
      
       <h1>{((index.productItemResponseDTO.netPrice)*index.count).toLocaleString()}</h1>
   <h6>تومان</h6>
     </div>
  ):(
    <div className=' col-items'>
       
      <h1>{((index.productItemResponseDTO.netPrice * ((100 - index.productItemResponseDTO.discount) / 100))*index.count).toLocaleString()}  </h1>
  <h6>تومان</h6>
      </div>
  )}
</div>
     
  
</div>
                ))}


<div style={{flex:'1'}}>


      
  
</div>
    <div className='row box-price'>
    <div className='itemtotal-box-price'>
        <h1>جمع محصولات</h1>
        <i></i>
        
    <h1> {cost.toLocaleString()} </h1>
    <h6>تومان</h6>
    </div>
<div className='shiping-box-price'>
<h1>هزینه ارسال</h1>
        <i></i>
        <h6>0</h6>
</div>

<div className='total-box-price'>
<h1>مجموع</h1>
        <i></i>
        <h2> {cost.toLocaleString()} </h2>
    <h6>تومان</h6>
</div>
  
</div>
                  
            </div>
            <div className='col-5 col-data'>
           
                <div className='row'>
                <div className='col-12'>
    <div className='row'> 
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
        <div className='col-item-box-personal-box'>
   <h1> لیست آدرس ها</h1>
        </div>
     
      
    </div>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        className='item-box-address-box'
        onChange={(e)=>setaddressId(e.target.value)}
      >
        {addressList.map((index:any)=>(
                  <FormControlLabel style={{direction:"rtl",textAlign:'right',color:'black'}}  color="black" value={index.id} control={<Radio />} label={<h1 style={{color:'black'}}>{index.des}</h1>} />
        ))}
      </RadioGroup>
    {/* {addressList.map((index:any,i:any)=>(
        <div className='col-md-12 col-xs-12 '>
            <div className='item-box-address-box'>
<h1>{++i}- آدرس : {index.des}</h1>
        <h2>کد پستی : {index.postalcode}</h2>
            </div>
        
    </div> 
    ))} */}
   
  
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
       <button onClick={()=>setaddAddress(true)} style={{ width: '150px', height: '40px',borderColor: 'transparent',
        borderRadius: "10px",backgroundColor: "#9439EF",color: 'white',
        marginTop:' 20px'}}>ثبت آدرس جدید</button>
    </div>
    </div>
</div>
                </div>
                <div className='row'>
                    <div className='col-12 col-email'>
                        <h6>
                            شماره تلفن
                        </h6>
                        <input disabled={true} value={window.localStorage.getItem('phone')!}></input>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='col-6 col-method'>
                        <h6>
                           نحوه ارسال
                        </h6>
                        <input></input>
                    </div>
                    <div className='col-6 col-date'>
                        <h6>
                          تاریخ ارسال
                        </h6>
                        <input></input>
                    </div>
                </div> */}
            </div>
            <div className='col-1'></div>

            <div className='col-1'></div>
            <div className='col-5'></div>
            <div className='col-5 col-btn'>
                <div className='row'>
                <div className='col-6 item-col-btn'>
                    <button className='buybutton' onClick={complete}>خرید</button>
                </div>
                <div className='col-6 item-col-btn'>
                <button className='cancelbutton'>لغو</button>
                </div>
                </div>
            </div>
            <div className='col-1'></div>
            <form  method="post" action=" https://sepehr.shaparak.ir:8080/Pay ">
 <div>
 <input type="text" name="TerminalID" value="61001954" style={{display:'none'}}/>
 <input type="text" name="token" value={accesstoken} style={{display:'none'}}/>
 <input type="submit" id='formpurchase' value="پرداخت "className="submit" style={{display:'none'}}/>
 </div>
</form>
        </div>
    )
}
export default Purchase