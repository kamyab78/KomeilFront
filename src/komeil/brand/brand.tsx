import React, { useRef, useState, useEffect } from 'react';
import { Config } from '../config/config'
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './brand.scss';
import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/landing/mask.png'

import Mask1 from '../../assets/images/landing/mask1.png'
const Brand: React.FC<ConnectedProps<typeof connector>> = function () {
    const [branddetail, setbranddetail] = useState<any>({})
    const [productbrandlist, setproductbrandlist] = useState([])
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

        getproductbrand()
        getdetailbrand()
   
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    function getdetailbrand() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/getbranddetail?brandid="+window.localStorage.getItem('brandid'), requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setbranddetail(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function getproductbrand() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/getbrandproduct?brandid="+window.localStorage.getItem('brandid'), requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setproductbrandlist(rep)

                })





            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="komeil-brand-page row">
            <div className='col'>
            <div className='row row-brand'>
                    <div className='col-md-1 '></div>

                    {/* <div className='col-md-10 col-xs-12 brand-box'>
                 <div className='row ' > */}

                     <div className='col-md-3 col-xs-12'>
                         <img alt='' src={branddetail.imageUrl}></img>
                     </div>
                     <div className='col-md-7 col-xs-12 txt-brand'>
                         <h1>{branddetail.title}</h1>
                         <div dangerouslySetInnerHTML={{ __html: branddetail.description }}></div>
                       
                     {/* </div>
                 </div> */}
                    </div>
                    <div className='col-md-1 '></div>
                </div>


                <div className='row product-row'>
                    <div className='col-md-1 '></div>

                    <div className='col-md-10 col-xs-12 product-box'>
                        <div className='product-box-main'>
                            <h1>محصولات</h1>

                            <div className='product-items row'>

                                <div className=' col-md-1'></div>
                                <div className=' col-md-10 col-xs-12'>
                                    <div className='row'>
                                        {productbrandlist.map((index: any) => (
                                            <div className=' col-md-4 col-xs-12' style={{marginTop:'20px'}}>
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
                                <div className=' col-md-1'></div>


                            </div>


                        </div>
                    </div>
                    <div className='col-md-1 '></div>
                </div>


            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(Brand);
