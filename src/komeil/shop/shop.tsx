import React, { useRef } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './shop.scss';
// import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/shop/mask.png'
import { Checkbox ,Switch,Slider } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { Config } from 'komeil/config/config';
import MetaTags from 'react-meta-tags';

const Shop: React.FC<ConnectedProps<typeof connector>> = function () {
    const [productlist,setproductlist]=useState<any>([])
    const [descriptionMetatag, setdescriptionMetatag] = useState('')
    const [canonicalMetatag, setcanonicalMetatag] = useState('')
    const [titleMetatag, settitleMetatag] = useState('')
    const [Detailcategory, setDetailcategory] = useState<any>({})

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var location = window.location.href;
        var splitloc = location.split('?')
        var secondarray = splitloc[1]
        var catid = secondarray.split('catid=')
        console.log(catid[1])
        getConfigCategory(catid[1])

getlist(catid[1])
    }, [window.localStorage.getItem('categoryid')]);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      function getConfigCategory(id) {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/getdetailcategory?categoryid=" + id, requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setdescriptionMetatag(rep.descriptionMetatag)
                    settitleMetatag(rep.titleMetatag)
                    document.title = rep.titleMetatag
                    setcanonicalMetatag(rep.canonicalMetatag)
                    setDetailcategory(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function getlist(id){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
    
            }
    
    
        };
    
        fetch(Config()['webapi'] + "/landing/listproductwithcategory?categoryid="+id, requestOptions)
            .then(response => {
    
    
    
                response.json().then(rep => {
    console.log(rep)
                    setproductlist(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
    const history = useHistory();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (
        <div className="komeil-shop-page row">
                        <MetaTags>

<meta property="canonical" content={canonicalMetatag} />
<meta name="description" content={descriptionMetatag} />
<meta property="og:title" content={titleMetatag} />
<meta property="og:image" content="%PUBLIC_URL%/Logo.png" />
</MetaTags>
            <div className='col'>
            <div className='row'>
    <div className='col-12 col-catname'>
        <div className='boxcatname'>
            <h6 style={{cursor:'pointer'}} onClick={()=>window.location.replace('/')}>خانه/</h6>
        <h6>{window.localStorage.getItem('categoryname')}</h6>
        </div>
      
        
    </div>
</div>
<div className='row row-result'>
    <div className='col-md-1'></div>
                        <div className='col-md-10 col-xs-10 box-result'>
  
                            <div className='row' >
    
      {productlist.map((index: any) => (
                                    <div className='col-md-4 col-lg-4 col-6 '>
                                        <div className='subitem-box-result' >
                                            <Link to={'/detailproduct?hash=' + index.hash + '?category=' + index.categoryname}>
                                                <div className='div-img-subitem-box-result'>
                                                    <img src={index.imageUrl} alt={index.altImg} title={index.name}></img>
                                                </div>

                                                {index.name.length >= 38 ? (
                                                    <h1>{index.name.substring(0, 38)}...</h1>
                                                ) : (
                                                    <h1>{index.name}</h1>
                                                )}


                            
                                                        
                                               
<div className='div-price-subitem-box-result' >
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
                                            </Link>
                                        </div>


                                    </div>
                                ))}

                            </div>

                        </div>
                        <div className='col-md-1'></div>


                </div>  
          
            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(Shop);
