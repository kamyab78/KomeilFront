import React, { useState,useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './detailproduct.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask1 from '../../assets/images/landing/mask.png'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Config } from 'komeil/config/config';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactImageMagnify from 'react-image-magnify';
import Modal from 'react-bootstrap/Modal'

const Detailproduct = () => {
    const [detailproduct, setdetailproduct] = useState<any>({})
    const [colorid, setcolorid] = useState<any>(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [imgurl,setimgurl]=useState('')
    useEffect(() => {
        var location = window.location.href;
        var splitloc = location.split('?')
        var secondarray = splitloc[1]
        var hash = secondarray.split('hash=')
        console.log(hash[1])
        getdetailproduct(hash[1])
    }, []);
    
    const [number, setnumber] = useState<any>(1);
    function clickonremove(){
        if(number!==1){
            setnumber(number-1)
        }
    }
    function getdetailproduct(hash: any) {

        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/detailproducts?hash=" + hash, requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setdetailproduct(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function Addtocard() {
        if(number<=detailproduct.stock){
              const body = {
            "colorId": colorid,
            "number": number,
            "pid": detailproduct.id,
         
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

        fetch(Config()['webapi'] + "/order/submit/" + window.localStorage.getItem('phone'), requestOptions)
            .then(response => {


                console.log(response)

                if (response.status === 200) {
                
                    if (localStorage.getItem('phone') === null) {
                        toast.error('ابتدا وارد حساب کاربری خود شوید')
                    }
                    else {
                        response.json().then(rep => {
                        
                            if (rep.code === 200) {
                                toast.success(rep.message)
                                setTimeout(function(){ window.location.reload() }, 1300);
                            }

                            console.log(rep)
                            // setdetailproduct(rep)
                        })
                    }
                }






            })
            .catch(error => console.log('error', error));  
        }
        else{
            toast.error("تعداد درخواست بیشتر از موجودی می باشد. حداکثر "+detailproduct.stock+"تعداد موجود است")
        }
    
    }
    function clickoncolor(id: any) {
        if (colorid !== 0) {
            if (document.getElementById('divcolor' + id)!.style.display === 'none') {
                document.getElementById('divcolor' + colorid)!.style.display = 'none'
                document.getElementById('divcolor' + id)!.style.display = 'block'
            }
            else
                document.getElementById('divcolor' + id)!.style.display = 'none'
        }
        else {
            document.getElementById('divcolor' + id)!.style.display = 'block'
        }

        setcolorid(id)


    }
    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
      }, [])
    
      const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
      }, [])
return(
    <div className='row topnoor-detailproduct-page' >

       <div className='col-12'>
           <div className='row row-base'>
           <Modal show={isModalOpen} onHide={()=>setIsModalOpen(false)}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
            <img style={{width:'100%'}} src={imgurl}></img>
        </Modal.Body>
   
      </Modal>
<div className='col-md-9 col-xs-12 col-desc'>
<div className='firstRow-col-desc'>
    <h1>{detailproduct.name}</h1>
    <span></span>

<h6>{detailproduct.rate}</h6>
<i className="material-icons-outlined detail-star-active-row">
star
</i>
</div>
{detailproduct.stock!==0?(
   <div className='secondRow-col-desc'>
    <h6>رنگ</h6>
    <div className="box-colors">

              {detailproduct.colorsList !== undefined ? (
                                    detailproduct.colorsList.map((index: any) => (
                                        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => clickoncolor(index.id)} >
                                            <div style={{ width: '35px', height: '35px', backgroundColor: index.hex, borderRadius: '100%', marginRight: '10px' }}> </div>
                                            <div id={'divcolor' + index.id} style={{ position: 'absolute', width: '35px', height: '35px', borderRadius: '100%', backgroundColor: 'rgb(365,365,365,0.5)', top: '0', display: 'none' }}>
                                                <span className="material-icons-outlined" style={{ margin: '5px' }}>
                                                    done
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : null} 
    </div>
    
</div> 
):null}

<div className='thirdRow-col-desc'>
{detailproduct.stock!==0?(
    detailproduct.have===true?(
  <div className='col-price-and-add'>

   
     <div className='item-col-price-and-add-title'>
          <h5>قیمت کالا</h5>
    </div>
        {detailproduct.discount!==0?(
        <div className='item-col-price-and-add'>
          
                      <div className='discount-item-col-price-and-add'>
    <h3>{detailproduct.discount}%</h3>
</div>
          
  
<h2>{detailproduct.netPrice}</h2>
        </div>
          ):null}
           {detailproduct.discount!==0?(
  <div className='item-col-price-and-add'>
           
            <h4>تومان</h4>
            <h3>{detailproduct.netPrice * ((100 - detailproduct.discount) / 100)}</h3>
        </div>
           ):(
            <div className='item-col-price-and-add'>
           
            <h4>تومان</h4>
            <h3>{detailproduct.netPrice}</h3>
        </div>
           )}

   
      
     
     
     
              <div className='detail-number-row'> 
                    <i onClick={()=>setnumber(number+1)} className="material-icons-outlined plusicon">
add
</i>
 
<input  value={number}></input>
       <i onClick={clickonremove} className="material-icons-outlined minusicon">
remove
</i>

        </div>
        {detailproduct.stock<=10 && detailproduct.stock>0?(
                           
                            <div className='alarm-box'>
                                
                            <i className="material-icons-outlined">
info
</i>
<h6>از این محصول {detailproduct.stock} عدد باقی مانده</h6>
                            </div>
                      
                         ):null} 


        <button className='card-box' onClick={Addtocard} >

افزودن به سبد خرید

                                    </button>
      
       
  
    </div>
  
    ):(
        <div className='col-not-enough'>
        <button disabled={true} className='card-box' >

ناموجود

                                    </button>
                                    </div>
    )

):(
    <div className='col-not-enough'>

<button disabled={true} className='card-box' >

به زودی

                                    </button>
      
 
   </div>
 
)}
  
    <i></i>
    <div className="box-description">
        <h1>خلاصه محصول</h1>
    <div style={{direction:"rtl",paddingTop:"10px"}} dangerouslySetInnerHTML={{ __html: detailproduct.description }}></div>  
    </div>
  
</div>
</div>
<div className='col-md-3 col-xs-12 col-img'>
<img alt='' src={ detailproduct.imageUrl} onClick={()=>{setimgurl( detailproduct.imageUrl);setIsModalOpen(true)}}></img>

<div className='additional-img'>
{detailproduct.productAdditionalImages !== undefined ? (
                                detailproduct.productAdditionalImages.map((index: any,i:any) => (
                                 i<=2?(
                                    <img alt='' src={index.imageUrl} onClick={()=>{setimgurl(index.imageUrl);setIsModalOpen(true)}}></img>
                
                                 ):null
                                        
                                  
                                ))
                            ) : null}

</div>
</div>
               </div>
               <div className='row'>
       
                   <div className='col-md-1'></div>
                        <div className='col-md-10 col-xs-12 sometxtfeature'>
                        <div className='title-table'>
                                 <h6>مشخصات محصول</h6> 
                            </div>
                            {detailproduct.productHeight!==null?(
                               <div className="eachrow">
                                <h1>:ارتفاع محصول</h1>
                                <h2>{detailproduct.productHeight}</h2> 
                            </div>   
                            ):null}
                                     {detailproduct.productLength!==null?(
                               <div className="eachrow">
                                <h1>:طول محصول</h1>
                                <h2>{detailproduct.productLength}</h2> 
                            </div>   
                            ):null}
                                     {detailproduct.productWidth!==null?(
                               <div className="eachrow">
                                <h1>:عرض محصول</h1>
                                <h2>{detailproduct.productWidth}</h2> 
                            </div>   
                            ):null}
                                     {detailproduct.boxHeight!==null?(
                               <div className="eachrow">
                                <h1>:ارتفاع بسته</h1>
                                <h2>{detailproduct.boxHeight}</h2> 
                            </div>   
                            ):null}
                                     {detailproduct.boxLength!==null?(
                               <div className="eachrow">
                                <h1>:طول بسته</h1>
                                <h2>{detailproduct.boxLength}</h2> 
                            </div>   
                            ):null}

{detailproduct.boxWidth!==null?(
                               <div className="eachrow">
                                <h1>:عرض بسته</h1>
                                <h2>{detailproduct.boxWidth}</h2> 
                            </div>   
                            ):null}
                                     {detailproduct.brandname!==null?(
                               <div className="eachrow">
                                <h1>:برند</h1>
                                <h2>{detailproduct.brandname}</h2> 
                            </div>   
                            ):null}
                                    
                           
                        </div>
                        <div className='col-md-1'></div>
                   
               </div>
             
               <div className='row'>
                   <div className='col-1'></div>
                   <div className='col-10 txt-col-related'>
                       <h6>محصولات مشابه</h6></div>
                   <div className='col-1'></div>
<div className='col-2'></div>
{/* <div className='col-8 '>
<div className='row ' style={{marginBottom:'20px'}} >
        <div className='col-md-4 col-xs-12 row-item-center '>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>
<div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
  
        </div>   
            </div>
    
            <div className='col-md-4 col-xs-12 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
        </div>   
            </div>
            <div className='col-md-4 col-xs-12 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
        </div>   
            </div>
    </div>


</div>
 */}

<div className='col-2'></div>
               </div>
             
               </div>
               </div>
)
}
export default Detailproduct