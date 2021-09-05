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
        getAmazingoffer()
        getproduct()
        getBanner()
        getbrand()
    }, []);
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
    return (
        <div className="komeil-landing-page row">
            <div className='col'>
                <div className='row banner-row'>

                    <div className='col-6 banner-big-box'>
                        <img src={firstBannerfirst} onClick={() => {
                            window.localStorage.setItem('categoryid', firstBanneridfirst)
                            history.push('/shop')
                        }}></img>
                    </div>
                    <div className='col-6 banner-big-box'>
                        <img src={firstBannersecond} onClick={() => {
                            window.localStorage.setItem('categoryid', firstBanneridsecond)
                            history.push('/shop')
                        }}></img>
                    </div>
                </div>

                <div className='row bazarche-row'>


                    <div className='col-12 bazarche-box'>
                        <div className='bazarche-box-main '>
                            <div className='col-10 item-bazarche-box-main'>
                                <div className='col-1'></div>
                                <div className='show-more-sub-item-bazarche-box-main col-3' onClick={() => history.push('/bazarche')}>
                                    <h1>نمایش همه کالای شگفت انگیز</h1>
                                </div>
                                {amazingofferlist.map((index: any, i: any) => (
                                    i <= 1 ? (
                                        <div className='sub-item-bazarche-box-main col-3'>
                                            <div className='div-img'>


                                                <img src={index.imageUrl} alt=''></img>
                                            </div>
                                            <h1>{index.name}</h1>
                                            <div className='div-price-sub-item-bazarche-box-main'>
                                                <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

                                                    {index.discount !== 0 ? (
                                                        <>
                                                            <h3 className='amountafterdiscount'>{index.netPrice}</h3>

                                                            <h3 >{index.netPrice * ((100 - index.discount) / 100)}</h3>
                                                        </>
                                                    ) : (
                                                        <h3 >{index.netPrice}</h3>
                                                    )}

                                                    <h3>تومان</h3>
                                                </div>
                                                <i></i>
                                                {index.discount !== 0 ? (
                                                    <div className='discount-sub-item-bazarche-box-main'>

                                                        <h6 className='discounttxt'>{index.discount}%</h6>

                                                    </div>
                                                ) : null}
                                            </div>

                                            <div className='card-box' onClick={() => history.push('/detailproduct?hash=' + index.hash + '?category=' + index.categoryname)}>
                                                {index.stock === 0 ? (


                                                    <h6>به زودی</h6>


                                                ) : (
                                                    index.have === true ? (


                                                        <h6>مشاهده بیشتر</h6>


                                                    ) : (


                                                        <h6>محصول ناموجود</h6>


                                                    )
                                                )}
                                            </div>
                                        </div>) : null

                                ))}


                                <div className='col-1'></div>
                            </div>
                            <div className='col-2 img-bazarche-box-main'>
                                <h4>کالا های شگفت انگیز</h4>
                                <img src={Bazarcheimg} alt=''></img>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row newproduct-row'>

                    <div className='col-md-6 col-xs-12 '>
                        <div className='row'>
                            {productlist.map((index: any) => (
                                <div className='col-md-6 col-xs-12'>
                                    <div className='subitem-newproduct' onClick={() => history.push('/detailproduct?hash=' + index.hash + '?category=' + index.categoryname)}>

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
                <h3 className='amountafterdiscount'>{index.netPrice}</h3>

                <h3 >{index.netPrice * ((100 - index.discount) / 100)}</h3>
            </>
        ) : (
            <h3 >{index.netPrice}</h3>
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

                                     
                                        </div>
                                    </div>
                             
                            ))}



                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 imagebox-newproduct'>
                        <img src={secondBanner} style={{ cursor: "pointer" }} alt='' onClick={() => {
                            window.localStorage.setItem('categoryid', secondBannerid)
                            history.push('/shop')
                        }}></img>
                        <h6>محصولات جدید کمیل</h6>
                    </div>
                </div>
                <div className='row bannerads-row'>
                    <div className='col-md-4 col-xs-12'>
                        <img src={thirdBanner} style={{ cursor: "pointer" }} alt='' onClick={() => {
                            window.localStorage.setItem('categoryid', thirdBannerid)
                            history.push('/shop')
                        }}></img>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                        <img src={fourhtBanner} style={{ cursor: "pointer" }} alt='' onClick={() => {
                            window.localStorage.setItem('categoryid', fourthBannerid)
                            history.push('/shop')
                        }}></img>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                        <img src={fifthBanner} alt='' style={{ cursor: "pointer" }} onClick={() => {
                            window.localStorage.setItem('categoryid', fifthBannerid)
                            history.push('/shop')
                        }}></img>
                    </div>
                </div>
                <div className='row row-service'>
                    <div className='col-12 box-service'>
                        <div className='row'>
                            <div className='col-12 box-title'>
                                <h6>برند ها</h6>
                            </div>
                        </div>
                        <div className='row brands'>
                            {brandlist.map((index: any) => (
                                <div className='col-md-2 col-xs-4' onClick={() => {
                                    window.localStorage.setItem('brandid', index.id)
                                    history.push('/brand')
                                }}>
                                    <div className='subitem-service'>

                                       
                                            <img src={index.imageUrl} alt=''></img>
                                       
                                        <h1>{index.title}</h1>

                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>

                <div className='row bannerads-row'>
                    <div className='col-md-6 col-xs-12'>
                        <img src={sixtBanner} style={{ cursor: "pointer" }} alt='' onClick={() => {
                            window.localStorage.setItem('categoryid', sixtBannerid)
                            history.push('/shop')
                        }}></img>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <img src={seventBanner} style={{ cursor: "pointer" }} alt='' onClick={() => {
                            window.localStorage.setItem('categoryid', seventBannerid)
                            history.push('/shop')
                        }}></img>
                    </div>

                </div>


            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(Landing);
