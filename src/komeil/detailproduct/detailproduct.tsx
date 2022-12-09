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
import ReactTooltip from 'react-tooltip';
import MetaTags from 'react-meta-tags';

const Detailproduct = () => {
    const [detailproduct, setdetailproduct] = useState<any>({})
    const [colorid, setcolorid] = useState<any>(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [imgurl,setimgurl]=useState('')
    const [addphoto,setaddphoto]=useState<any>([])
    const [descriptionMetatag,setdescriptionMetatag]=useState('')
    const [canonicalMetatag,setcanonicalMetatag]=useState('')
    const [titleMetatag,settitleMetatag]=useState('')
    const [relatedlist,setrelatedlist]=useState([])
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var location = window.location.href;
        var splitloc = location.split('?')
        var secondarray = splitloc[1]
        var hash = secondarray.split('hash=')
        console.log(hash[1])
        getdetailproduct(hash[1])
        related(hash[1])
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
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
                    var arradd= rep.productAdditionalImages
                    arradd.sort((firstItem, secondItem) => firstItem.createdAt - secondItem.createdAt);
                  
                    setaddphoto(arradd.reverse())
                    setdescriptionMetatag(rep.descriptionMetatag)
                    settitleMetatag(rep.titleMetatag)
                    document.title=rep.titleMetatag
                    setcanonicalMetatag(rep.canonicalMetatag)
                    setdetailproduct(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function related(hash:any){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/related?hash=" + hash, requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setrelatedlist(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function Addtocard() {
        if(number<=detailproduct.stock){
            console.log(colorid)
            var idcolor=null
            if(colorid!==0)
            idcolor=colorid
              const body = {
            "colorId": idcolor,
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
    <div className='row komeil-detailproduct-page' >
             <MetaTags>
                
                <meta property="canonical" content={canonicalMetatag} />
           <meta name="description" content={descriptionMetatag} />
           <meta property="og:title" content={titleMetatag} />
           <meta property="og:image" content="%PUBLIC_URL%/Logo.png" />
         </MetaTags>
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
                                    detailproduct.colorsList.map((index: any,i:any) => (
                                        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => clickoncolor(index.id)} >
                                            <div data-tip data-for={'id'+i} style={{ width: '35px', height: '35px', backgroundColor: index.hex, borderRadius: '100%', marginRight: '10px' ,borderStyle:'solid',borderColor:'gray',borderWidth:'1px'}}> </div>
                                            <ReactTooltip id={'id'+i}>{index.name}</ReactTooltip>
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
            <h3>{(detailproduct.netPrice * ((100 - detailproduct.discount) / 100)).toLocaleString()}</h3>
        </div>
           ):(
            <div className='item-col-price-and-add'>
           
            <h4>تومان</h4>
            <h3>{detailproduct.netPrice.toLocaleString()}</h3>
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
                               addphoto.map((index: any,i:any) => (
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
                            <table>
              {detailproduct.productHeight!==""&& detailproduct.productHeight!="تنظیم نشده است"?(
                                  <tr>
                                  <td className='td-title'>ارتفاع محصول</td>
                                  <td>{detailproduct.productHeight}</td>
                                
                                </tr>
                            ):null}


                                                 {detailproduct.productLength!=="" && detailproduct.productLength!="تنظیم نشده است"?(
                                                              <tr>
                                                              <td className='td-title'>طول محصول</td>
                                                              <td>{detailproduct.productLength}</td>
                                                            
                                                            </tr>
                
                            ):null}
                    
                                     {detailproduct.productWidth!==""&& detailproduct.productWidth!="تنظیم نشده است"?(
                                                 <tr>
                                                 <td className='td-title'>عرض محصول</td>
                                                 <td>{detailproduct.productWidth}</td>
                                               
                                               </tr>
                   
                            ):null}
                                     {detailproduct.boxHeight!==""&& detailproduct.boxHeight!="تنظیم نشده است"?(
                                                 <tr>
                                                 <td className='td-title'>ارتفاع بسته</td>
                                                 <td>{detailproduct.boxHeight}</td>
                                               
                                               </tr>
                     
                            ):null}

{detailproduct.boxLength!==""&& detailproduct.boxLength!="تنظیم نشده است"?(
            <tr>
            <td className='td-title'>طول بسته</td>
            <td>{detailproduct.boxLength}</td>
          
          </tr>
                           
                            ):null}
                                     {detailproduct.boxWidth!==""&& detailproduct.boxWidth!="تنظیم نشده است"?(
                                                 <tr>
                                                 <td className='td-title'>عرض بسته</td>
                                                 <td>{detailproduct.boxWidth}</td>
                                               
                                               </tr>
                      
                            ):null}
                                    {detailproduct.weight!==""&& detailproduct.weight!="تنظیم نشده است"?(
                                                <tr>
                                                <td className='td-title'>وزن</td>
                                                <td>{detailproduct.weight}</td>
                                              
                                              </tr>
                           
                            ):null}
                             
                                      {detailproduct.brandname!==""&& detailproduct.brandname!="تنظیم نشده است"?(
                                                  <tr>
                                                  <td className='td-title'>برند</td>
                                                  <td>{detailproduct.brandname}</td>
                                                
                                                </tr>
                        
                            ):null}
                                          {detailproduct.material!==""&& detailproduct.material!="تنظیم نشده است"&&detailproduct.material!=null?(
                                                  <tr>
                                                  <td className='td-title'>جنس محصول</td>
                                                  <td>{detailproduct.material}</td>
                                                
                                                </tr>
                        
                            ):null}
                                          {detailproduct.count!==""&& detailproduct.count!="تنظیم نشده است"&&detailproduct.count!=null?(
                                                  <tr>
                                                  <td className='td-title'>پارچه</td>
                                                  <td>{detailproduct.count}</td>
                                                
                                                </tr>
                        
                            ):null}
</table>

                    
                           
                        
                        
                          


                                    
                           
                        </div>
                        <div className='col-md-1'></div>
                   
               </div>
             
               <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10 txt-col-related'>
                        <h6>محصولات مشابه</h6></div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-8 '>
                        <div className='row row-scroll' style={{ marginBottom: '20px' }} >
                            {relatedlist.map((index:any)=>(
   <Link className='col-md-4 row-item-center ' to={'/detailproduct?hash=' + index.hash+'?category='+index.categoryname} onClick={() => window.location.replace('/detailproduct?hash=' + index.hash+'?category='+index.categoryname)}>
   <div className='item-related'>
       <div className='div-img'>
           <img src={index.imageUrl} alt='image' title='title'></img>
       </div>

       {index.name.length>=30?(
 <h1>{index.name.substring(0,30)}...</h1>
):(
 <h1>{index.name}</h1>
)}
  
         
  <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >
{index.discount !== 0 ? (
                                        <>
                                            <h3 className='amountafterdiscount'>{index.netPrice.toLocaleString()}</h3>

                                            <h3 >{(index.netPrice * ((100 - index.discount) / 100)).toLocaleString()}</h3>

                                            <h3>تومان</h3>
                                        </>
                                    ) : (
                                        index.netPrice !==0 ?(
                                            <>
                                            <h3 >{index.netPrice.toLocaleString()}</h3>
                                            <h3>تومان</h3>
                                    </>
                                        ):null
                               
              
                                    )
                                }
                                                       

                                                        
                                                    </div>


                                                    <div className='div-btn'>
{index.have === true?(
               index.stock === 0 ? (
                <div className='cardbox-finish'>

                    <h6>به زودی</h6>
                </div>
            ) : (
                <div className='card-box'>

                    <h6>جزيیات بیشتر</h6>
                </div>





            )
):(
    <div className='card-box'>

    <h6>ناموجود</h6>
</div>
)}
                                         
                                                    </div>

   </div>
</Link>

                            ))}
                         
                      </div>


                    </div>


                    <div className='col-2'></div>
                </div>
             
               </div>
               </div>
)
}
export default Detailproduct