import React, { useRef, useEffect } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './landing.style.scss';
import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/landing/mask.png'
import Brand from '../../assets/images/landing/brand.png'
import Mask1 from '../../assets/images/landing/mask1.png'
import Newproduct from '../../assets/images/landing/newpro.png'
import Banner1 from '../../assets/images/landing/banner1.png'
import Banner2 from '../../assets/images/landing/banner2.png'
import Banner3 from '../../assets/images/landing/banner3.png'
import { Config } from '../config/config'
import Banner4 from '../../assets/images/landing/banner4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useState } from 'react';
const Landing: React.FC<ConnectedProps<typeof connector>> = function () {
    const [amazingofferlist, setamazingofferlist] = useState<any>([])
    const [productlist, setproductlist] = useState<any>([])
    const [firstBannerfirst, setfirstBannerfirst] = useState('')
    const [firstBannernamefirst, setfirstBannernamefirst] = useState('')
    const [firstBanneridfirst, setfirstBanneridfirst] = useState('')
    const [firstBannersecond, setfirstBannersecond] = useState('')
    const [firstBannernamesecond, setfirstBannernamesecond] = useState('')
    const [firstBanneridsecond, setfirstBanneridsecond] = useState('')
    const [secondBanner, setsecondBanner] = useState('')
    const [secondBannername, setsecondBannername] = useState('')
    const [secondBannerid, setsecondBannerid] = useState('')
    const [thirdBanner, setthirdBanner] = useState('')
    const [thirdBannername, setthirdBannername] = useState('')
    const [thirdBannerid, setthirdBannerid] = useState('')
    const [seventBanner, setseventhBanner] = useState('')
    const [seventBannername, setseventhBannername] = useState('')
    const [seventBannerid, setseventhBannerid] = useState('')
    const [fourhtBanner, setfourthBanner] = useState('')
    const [fourthBannername, setfourthBannername] = useState('')
    const [fourthBannerid, setfourthBannerid] = useState('')
    const [fifthBanner, setfifthBanner] = useState('')
    const [fifthBannername, setfifthBannername] = useState('')
    const [fifthBannerid, setfifthBannerid] = useState('')
    const [sixtBanner, setsixthBanner] = useState('')
    const [sixtBannername, setsixthBannername] = useState('')
    const [sixtBannerid, setsixthBannerid] = useState('')
    const [brandlist, setbrandlist] = useState([])
    const [firstpageproduct,setfirstpageproduct]=useState([])
    const sliderRef = useRef<Slider | null>(null);
    const history = useHistory();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        getAmazingoffer()
        getproduct()
        getBanner()
        getbrand()
        firstpage()
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    function getAmazingoffer() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/amazing-offers?page=0&size=2000000000", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setamazingofferlist(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function getproduct() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/products?page=0&size=4", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setproductlist(rep)

                })





            })
            .catch(error => console.log('error', error));
    }
    function getBanner() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/banners", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    for (var i = 0; i < rep.length; i++) {
                        if (rep[i].bannerType === 'firstbanner_landing_first') {
                            setfirstBannerfirst(rep[i].imageUrl)
                            setfirstBannernamefirst(rep[i].categoryName)
                            setfirstBanneridfirst(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'firstbanner_landing_second') {
                            setfirstBannersecond(rep[i].imageUrl)
                            setfirstBannernamesecond(rep[i].categoryName)
                            setfirstBanneridsecond(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'secondbanner_landing') {
                            setsecondBanner(rep[i].imageUrl)
                            setsecondBannername(rep[i].categoryName)
                            setsecondBannerid(rep[i].categoryId)
                        }

                        if (rep[i].bannerType === 'thirdbanner_landing') {
                            setthirdBanner(rep[i].imageUrl)
                            setthirdBannername(rep[i].categoryName)
                            setthirdBannerid(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'seventhbanner_landing') {
                            setseventhBanner(rep[i].imageUrl)
                            setseventhBannername(rep[i].categoryName)
                            setseventhBannerid(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'fourthbanner_landing') {
                            setfourthBanner(rep[i].imageUrl)
                            setfourthBannername(rep[i].categoryName)
                            setfourthBannerid(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'fifthbanner_landing') {
                            setfifthBanner(rep[i].imageUrl)
                            setfifthBannername(rep[i].categoryName)
                            setfifthBannerid(rep[i].categoryId)
                        }
                        if (rep[i].bannerType === 'sixthbanner_landing') {
                            setsixthBanner(rep[i].imageUrl)
                            setsixthBannername(rep[i].categoryName)
                            setsixthBannerid(rep[i].categoryId)
                        }
                    }

                })





            })
            .catch(error => console.log('error', error));
    }
    function getbrand() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/brands", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setbrandlist(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function firstpage(){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/firstpageproduct", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setfirstpageproduct(rep)

                })





            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className="komeil-landing-page row">
            <div className='col'>
            <div className='row banner-row'>

            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        speed={2500}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide className="media-card">
        <Link className='' to={'/shop?catid='+firstBanneridfirst} onClick={() => {
                        window.localStorage.setItem('categoryid', firstBanneridfirst)
                   
                    }}>

                        <img src={firstBannerfirst} alt='کمیل شاپ' title='کمیل شاپ'></img>
                    </Link>
        </SwiperSlide>
        <SwiperSlide className="media-card">
        <Link className='' to={'/shop?catid='+secondBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', secondBannerid)
              
                    }}>
                        <img src={secondBanner} alt='کمیل شاپ' title='کمیل شاپ'></img>
                    </Link>
        </SwiperSlide>
        <SwiperSlide className="media-card">
        <Link className=''  to={'/shop?catid='+thirdBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', thirdBannerid)
               
                    }}>
                        <img src={thirdBanner} alt='کمیل شاپ' title='کمیل شاپ'></img>
                    </Link>
        </SwiperSlide>
      </Swiper>


{/* 
                    <div className='col-md-1 '></div>
                    <Link className='col-md-10 col-xs-12 banner-big-box' to={'/shop?catid='+firstBanneridfirst} onClick={() => {
                        window.localStorage.setItem('categoryid', firstBanneridfirst)
                   
                    }}>

                        <img src={firstBannerfirst} alt='کمیل شاپ' title='کمیل شاپ'></img>
                    </Link>
                    <div className='col-md-1'></div> */}
                </div>
                {/* <div className='row banner-row'>
                    <div className='col-md-1 '></div>
                    <Link className='col-md-5 col-lg-5 col-6  banner-left-box' to={'/shop?catid='+secondBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', secondBannerid)
              
                    }}>
                        <img src={secondBanner} alt='کمیل شاپ' title='کمیل شاپ'></img>

                    </Link>
                    <Link className='col-md-5 col-lg-5 col-6  banner-right-box' to={'/shop?catid='+thirdBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', thirdBannerid)
               
                    }}>
                        <img src={thirdBanner} alt='کمیل شاپ' title='کمیل شاپ'></img>

                    </Link>
                    <div className='col-md-1 '></div>
                </div> */}



                <div className='row bazarche-row'>
                    <div className='col-md-1 '></div>

                    <div className='col-md-10 col-xs-12 bazarche-box'>
                        <div className='row bazarche-box-main '>
                        


<div className='col-md-10 col-xs-10 item-bazarche-box-main d-none d-md-block d-lg-block'>
<Swiper
     className='swipper-main'
       spaceBetween={0}
       slidesPerView={3}
       navigation={true}
      
      
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
        {amazingofferlist.map((result: any,i) => (
      <SwiperSlide>
          <div className='sub-item-bazarche-box-main ' >
          <Link to={'/detailproduct?hash=' + result.hash+'?category='+result.categoryname} >
                                        <div className='div-img'>
                                            {result.discount !== 0 ? (
                                                <h6 className='discounttxt'>{result.discount}%</h6>
                                            ) : null}

                                            <img src={result.imageUrl} alt={result.name} title={result.name}></img>
                                        </div>

                                        <h1>{result.name}</h1>
                              
                                     
                                    
                                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

                                        {result.netPrice===0?(
                                    <h3>برای قیمت تماس بگیرید</h3>
                                ):result.netPrice===1?(
                                    <h3>این محصول سفارشی می باشد</h3>
                                ):(
                                    result.discount !== 0 ? (
                                        <>
                                            <h3 className='amountafterdiscount'>{result.netPrice.toLocaleString()}</h3>

                                            <h3 >{(result.netPrice * ((100 - result.discount) / 100)).toLocaleString()}</h3>

                                            <h3>تومان</h3>
                                        </>
                                    ) : (
                                        <>
                                                <h3 >{result.netPrice.toLocaleString()}</h3>
                                                <h3>تومان</h3>
                                        </>
              
                                    )
                                )}

                                          
                                        </div>


                                        <div className='div-btn'>
                                            {result.stock === 0 ? (
                                                <div className='cardbox-finish'>
                                                    <h6>ناموجود</h6>

                                                </div>
                                            ) : (
                                                <div className='card-box'>
                                                    <h6>جزيیات بیشتر</h6>

                                                </div>
                                            )}

                                        </div>
                                    </Link>  
          </div>
         
      </SwiperSlide>
   
      ))}
    </Swiper>
       {/* {amazingofferlist.map((result: any,i) => (
                              
                                                  <Link to={'/detailproduct?hash=' + result.hash+'?category='+result.categoryname} className='sub-item-bazarche-box-main col-md-3 col-xs-3' >
                                        <div className='div-img'>
                                            {result.discount !== 0 ? (
                                                <h6 className='discounttxt'>{result.discount}%</h6>
                                            ) : null}

                                            <img src={result.imageUrl} alt=''></img>
                                        </div>

                                        <h1>{result.name}</h1>
                              
                                     
                                    
                                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

                                            {result.discount !== 0 ? (
                                                <>
                                                    <h3 className='amountafterdiscount'>{result.netPrice}</h3>

                                                    <h3 >{result.netPrice * ((100 - result.discount) / 100)}</h3>
                                                </>
                                            ) : (
                                                <h3 >{result.netPrice}</h3>
                                            )}

                                            <h3>تومان</h3>
                                        </div>


                                        <div className='div-btn'>
                                            {result.stock === 0 ? (
                                                <div className='cardbox-finish'>
                                                    <h6>ناموجود</h6>

                                                </div>
                                            ) : (
                                                <div className='card-box'>
                                                    <h6>جزيیات بیشتر</h6>

                                                </div>
                                            )}

                                        </div>
                                    </Link>  
                                    
                        

                                ))} */}
</div>
<div className='col-md-10 col-xs-10 item-bazarche-box-main d-block d-md-none d-lg-none'>
<Swiper
     
       spaceBetween={0}
       slidesPerView={2}
       navigation={true}
      
      
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
        {amazingofferlist.map((result: any,i) => (
      <SwiperSlide>
           <div className='sub-item-bazarche-box-main ' >
           <Link  to={'/detailproduct?hash=' + result.hash+'?category='+result.categoryname}>
                                        <div className='div-img'>
                                            {result.discount !== 0 ? (
                                                <h6 className='discounttxt'>{result.discount}%</h6>
                                            ) : null}

                                            <img src={result.imageUrl} alt={result.name} title={result.name}></img>
                                        </div>
{result.name.length>=20?(
 <h1>{result.name.substring(0,20)}...</h1>
):(
 <h1>{result.name}</h1>
)}
                                       
                              
                                     
                                    
                                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >
                                        {result.netPrice===0?(
                                    <h3>برای قیمت تماس بگیرید</h3>
                                ):result.netPrice===1?(
                                    <h3>این محصول سفارشی می باشد</h3>
                                ):(
                                    result.discount !== 0 ? (
                                        <>
                                            <h3 className='amountafterdiscount'>{result.netPrice.toLocaleString()}</h3>

                                            <h3 >{(result.netPrice * ((100 - result.discount) / 100)).toLocaleString()}</h3>

                                            <h3>تومان</h3>
                                        </>
                                    ) : (
                                        <>
                                                <h3 >{result.netPrice.toLocaleString()}</h3>
                                                <h3>تومان</h3>
                                        </>
              
                                    )
                                )}
                                        </div>


                                        <div className='div-btn'>
                                            {result.stock === 0 ? (
                                                <div className='cardbox-finish'>
                                                    <h6>ناموجود</h6>

                                                </div>
                                            ) : (
                                                <div className='card-box'>
                                                    <h6>جزيیات بیشتر</h6>

                                                </div>
                                            )}

                                        </div>
                                        </Link>
                                    </div>  
      </SwiperSlide>
   
      ))}
    </Swiper>
       {/* {amazingofferlist.map((result: any,i) => (
                              
                                                  <Link to={'/detailproduct?hash=' + result.hash+'?category='+result.categoryname} className='sub-item-bazarche-box-main col-md-3 col-xs-3' >
                                        <div className='div-img'>
                                            {result.discount !== 0 ? (
                                                <h6 className='discounttxt'>{result.discount}%</h6>
                                            ) : null}

                                            <img src={result.imageUrl} alt=''></img>
                                        </div>

                                        <h1>{result.name}</h1>
                              
                                     
                                    
                                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

                                            {result.discount !== 0 ? (
                                                <>
                                                    <h3 className='amountafterdiscount'>{result.netPrice}</h3>

                                                    <h3 >{result.netPrice * ((100 - result.discount) / 100)}</h3>
                                                </>
                                            ) : (
                                                <h3 >{result.netPrice}</h3>
                                            )}

                                            <h3>تومان</h3>
                                        </div>


                                        <div className='div-btn'>
                                            {result.stock === 0 ? (
                                                <div className='cardbox-finish'>
                                                    <h6>ناموجود</h6>

                                                </div>
                                            ) : (
                                                <div className='card-box'>
                                                    <h6>جزيیات بیشتر</h6>

                                                </div>
                                            )}

                                        </div>
                                    </Link>  
                                    
                        

                                ))} */}
</div>
                      
                           
                                <div className='col-md-2 col-xs-2 img-bazarche-box-main'>
                                    <h4>فروش ویژه</h4>
                                    <img src={Bazarcheimg} alt='image' title='title'></img>
                                    <button onClick={()=>history.push('/bazarche')}>مشاهده همه</button>
                                </div>
                         


                        </div>
                    </div>
                    <div className='col-md-1 '></div>
                </div>
                {/* <div className='row newproduct-row'>

                    <div className='col-md-6 col-xs-12 '>
                        <div className='row'>
                            {productlist.map((index: any,i) => (
                                <div className='col-md-6 col-xs-12'>
                                    {i<=1?(
                                        <div className='subitem-newproduct-one-two'>
                                                                          <Link to={'/detailproduct?hash=' + index.hash + '?category=' + index.categoryname}  >

<div className='div-img-new'>

    <img src={index.imageUrl} alt=''></img>
</div>
<h1>{index.name}</h1>

{index.stock === 0 ? (


<h6 className='simpletxt'>به زودی</h6>


) : (
index.have === true ? (


<div className='div-price-subitem-newproduct'>
<div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

{index.discount !== 0 ? (
<>
<h3 className='amountafterdiscount'>{index.netPrice.toLocaleString()}</h3>

<h3 >{(index.netPrice * ((100 - index.discount) / 100)).toLocaleString()}</h3>
</>
) : (
<h3 >{index.netPrice.toLocaleString()}</h3>
)}

<h3>تومان</h3>
</div>
<i></i>
{index.discount !== 0 ? (
<div className='discount-subitem-newproduct'>

<h6 className='discounttxt'>{index.discount}%</h6>

</div>
) : null}


</div>



) : (


<h6 className='simpletxt'>محصول ناموجود</h6>


)
)}


</Link>
                                        </div>
               
                                    ):(
                                       <div className='subitem-newproduct-three'>
                                            <Link  to={'/detailproduct?hash=' + index.hash + '?category=' + index.categoryname} >

<div className='div-img-new'>

    <img src={index.imageUrl} alt=''></img>
</div>
<h1>{index.name}</h1>

{index.stock === 0 ? (


<h6 className='simpletxt'>به زودی</h6>


) : (
index.have === true ? (


<div className='div-price-subitem-newproduct'>
<div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

{index.discount !== 0 ? (
<>
<h3 className='amountafterdiscount'>{index.netPrice.toLocaleString()}</h3>

<h3 >{(index.netPrice * ((100 - index.discount) / 100)).toLocaleString()}</h3>
</>
) : (
<h3 >{index.netPrice.toLocaleString()}</h3>
)}

<h3>تومان</h3>
</div>
<i></i>
{index.discount !== 0 ? (
<div className='discount-subitem-newproduct'>

<h6 className='discounttxt'>{index.discount}%</h6>

</div>
) : null}


</div>



) : (


<h6 className='simpletxt'>محصول ناموجود</h6>


)
)}


</Link>
                                       </div>
                                    )}
                               
                                    </div>
                             
                            ))}



                        </div>
                    </div>
                    <Link className='col-md-6 col-xs-12 imagebox-newproduct' to={'/shop?catid='+secondBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', secondBannerid)
               
                    }}>
                        <img src={secondBanner} style={{ cursor: "pointer" }} alt='' ></img>
                        <h6>محصولات جدید کمیل</h6>
                    </Link>
                </div> */}

                <div className='row product-row'>
                    <div className='col-md-1 '></div>

                    <div className='col-md-10 col-xs-12 product-box'>
                        <div className='product-box-main'>
                            <h1>محصولات</h1>

                            <div className='product-items row'>

                                <div className=' col-md-1'></div>
                                <div className=' col-md-10 col-xs-12'>
                                    <div className='row'>
                                        {productlist.map((result: any) => (
                                            <div className=' col-md-4 vol-lg-4 col-6' style={{ marginTop: '20px' }}>
                                                <div className='sub-product-items'  >
                                                  <Link  to={'/detailproduct?hash=' + result.hash+'?category='+result.categoryname}>
                                                                 <div className='div-img'>
                                                        {result.discount !== 0 ? (
                                                            <h6 className='discounttxt'>{result.discount}%</h6>
                                                        ) : null}

                                                        <img src={result.imageUrl} alt={result.name} title={result.name}></img>
                                                    </div>

                                                    {result.name.length>=38?(
 <h1>{result.name.substring(0,38)}...</h1>
):(
 <h1>{result.name}</h1>
)}
                                               
                                                   
                                                    <div className='classRowprice' >
{result.discount !== 0 ? (
                                        <>
                                            <h3 className='amountafterdiscount'>{result.netPrice.toLocaleString()}</h3>

                                            <h3 >{(result.netPrice * ((100 - result.discount) / 100)).toLocaleString()}</h3>

                                            <h3>تومان</h3>
                                        </>
                                    ) : (
                                        result.netPrice !==0 ?(
                                            <>
                                            <h3 >{result.netPrice.toLocaleString()}</h3>
                                            <h3>تومان</h3>
                                    </>
                                        ):null
                               
              
                                    )
                                }
                                                       

                                                        
                                                    </div>


                                                    <div className='div-btn'>
{result.have === true?(
               result.stock === 0 ? (
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
                                                  </Link>
                                     
                                                </div>

                                            </div>

                                        ))}


                                    </div>
                                </div>
                                <div className=' col-md-1'></div>


                            </div>


                        </div>
                    </div>
                    <div className='col-md-1 '></div>
                </div>
                <div className='row brand-row'>
                    <div className='col-md-1 '></div>

                    <div className='col-md-10 col-xs-12 brand-box'>
                        <div className='brand-box-main'>
                            <h1>برند ها</h1>
                            <div className='brands row'>
                                {brandlist.map((item: any) => (
                                    <div className='brands-items col-md-1 col-xs-4' onClick={() => {
                                        window.localStorage.setItem('brandid', item.id)
                                        history.push('/brand')
                                    }}>
                                        <img src={item.imageUrl} alt=''></img>
                                        <h6>{item.title}</h6>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    <div className='col-md-1 '></div>
                </div>





                <div className='row bannerads-row'>
                    <Link className='col-md-4 col-xs-12' to={'/shop?catid='+thirdBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', thirdBannerid)
               
                    }}>
                        <img src={thirdBanner} style={{ cursor: "pointer" }} alt=''></img>
                    </Link>
                    <Link className='col-md-4 col-xs-12' to={'/shop?catid='+fourthBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', fourthBannerid)
               
                    }}>
                        <img src={fourhtBanner} style={{ cursor: "pointer" }} alt=''></img>
                    </Link>
                    <Link className='col-md-4 col-xs-12' to={'/shop?catid='+fifthBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', fifthBannerid)
               
                    }}>
                        <img src={fifthBanner} alt='' style={{ cursor: "pointer" }} ></img>
                    </Link>
                </div>
                {/* <div className='row bannerads-row'>
                    <Link className='col-md-6 col-xs-12'  to={'/shop?catid='+sixtBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', sixtBannerid)
               
                    }}>
                        <img src={sixtBanner} style={{ cursor: "pointer" }} alt='' ></img>
                    </Link>
                    <Link className='col-md-6 col-xs-12'  to={'/shop?catid='+seventBannerid} onClick={() => {
                        window.localStorage.setItem('categoryid', seventBannerid)
               
                    }}>
                        <img src={seventBanner} style={{ cursor: "pointer" }} alt='' ></img>
                    </Link>

                </div> */}


            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(Landing);
