import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './Header.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Config } from 'komeil/config/config';
import {Navbar,Nav} from 'react-bootstrap'

const Headers = () => {
    const history = useHistory();
    const [stylecategory, setstylecategory] = useState({ display: 'none' });
    const [resSearch, setresSearch] = useState({ display: 'none' });
    const [categorylist, setcategorylist] = useState([])
    const [resultsearchlist, setresultsearchlist] = useState([])
    const [isLogin, setisLogin] = useState(false)
    const [searchtxt, setsearchtxt] = useState('')
    const [userdata, setuserdata] = useState<any>({})
    const [cartitemcount, setcartitemcount] = useState(-1)
    const [wichPhoto,setwichPhoto]=useState('')
    const [flag, setflag] = useState(0)
    useEffect(() => {
        getuserdata()
     
        console.log(window.localStorage.getItem('phone'))
        if (window.localStorage.getItem('phone') === null)
            setisLogin(false)
        else
            setisLogin(true)

        getCategory()
        getorderlist()

    }, []);
    function getCategory() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/categories", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    console.log(Math.floor(rep.length / 5))
                    setflag(Math.floor(rep.length / 5))

                    setcategorylist(rep)
                })





            })
            .catch(error => console.log('error', error));


    }
    function getuserdata() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/user/detail?mobile=" + window.localStorage.getItem('phone'), requestOptions)
            .then(response => {



                response.json().then(rep => {

                    setuserdata(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function gotopage(id: any,categoryname:any) {
        console.log(id)
        setstylecategory({ display: 'none' })
        window.localStorage.setItem('categoryid', id)
        window.localStorage.setItem('categoryname',categoryname)
        history.push('/shop?catid='+id)
    }
    function getorderlist() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/order/log/" + window.localStorage.getItem('phone') + "/NOT_PAID", requestOptions)
            .then(response => {
                console.log(response)
                response.json().then(rep => {

                    console.log(rep)
                    setcartitemcount(rep.length)
                })





            })
            .catch(error => console.log('error', error));

    }
    function searchsome(value: any) {
        setsearchtxt(value)

        if (value === "") {
            setresSearch({ display: 'none' })
        }
        else {
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    // "Authorization": "Basic " + window.localStorage.getItem('basic')

                }


            };

            fetch(Config()['webapi'] + "/landing/search-drop-down/" + value, requestOptions)
                .then(response => {



                    response.json().then(rep => {
                        console.log(rep)
                        setresultsearchlist(rep)
                        setresSearch({ display: 'block' })
                    })





                })
                .catch(error => console.log('error', error));

        }

    }
    function clickonsearchres(hash: any,categoryname:any) {
        setresSearch({ display: 'none' })
        setsearchtxt('')
        history.push('/detailproduct?hash=' + hash+'?category='+categoryname)
    }
    function pressenter(e: any) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            setresSearch({ display: 'none' })
            window.localStorage.setItem('searchkeyword', searchtxt)
            setsearchtxt('')
            history.push('/shopsearch')
        }

    }


    return (
        <div className="row main-div-header">
            <div className='col-12'>
                <div className='row'>
                <div className='col-md-3'></div>
                    <div className="col-md-4 col-xs-6 search-div ">
                        <div className='box'>
                            <input placeholder='جستجوی محصولات در کمیل شاپ' onKeyUp={pressenter} value={searchtxt} onChange={(e) => searchsome(e.target.value)}></input>
                            <SearchIcon className='seachIcon' />
                            <div className='box-result' style={resSearch}>
                                {resultsearchlist.map((result: any) => (
                                    <div className=' item-box-result' onClick={() => clickonsearchres(result.productHash,result.categoryname)}>
                                        <h6 >
                                            {result.productName}
                                        </h6>
                                        <h1>
                                            در دسته بندی
                                        </h1>
                                        <h6>
                                            {result.categoryName}
                                        </h6>

                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                    <div className='col-md-2'></div>
                    <div className=" col-md-3 col-xs-6">
     <Link to='/'  className='logo-div'>
                        <img alt="" src={Logo} />
                        <div className='box-txt-name'>
                               <h1>کمیل شاپ</h1>
                               <h2>کمترین قیمت، بهترین کیفیت</h2>
                        </div>
                     
                    </Link>
                    </div>
               
               
                </div>

              <Navbar collapseOnSelect expand="lg" className='bottom-box'>
 

 <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'blue',backgroundColor:'#ffc400'}} />
 <Navbar.Collapse id="responsive-navbar-nav">
   <Nav  fill style={{width:'100%'}}>
   <Nav.Item className='profile-card-div'>
                        <div className='shoping-div' onClick={()=>history.push('/cart')}>
                            <i className="material-icons-outlined">
                                shopping_bag
                            </i>
                            {cartitemcount>=1?(
   <h6>{cartitemcount}</h6>
                            ):null}
                         
                        </div>

                       
                            {isLogin?(
                                <div className='profile-div' onClick={()=>history.push('/profile/personal')}>
     <i style={{cursor:"pointer"}} className="material-icons-outlined" >
     person
 </i>  
 {userdata.firstName === null ? (
                                        <h6 className="d-none d-md-block">سلام کاربر محترم</h6>
                                    ) : (
                                        <h6 className="d-none d-md-block">سلام {userdata.firstName}</h6>
                                    )}
     </div>
                            ):(
                                <div className='profile-div' onClick={()=>history.push('/login')}>
                                    <i style={{cursor:"pointer"}} className="material-icons-outlined" >
                                person
                            </i>  
 <h6>ورود</h6>
                                </div>
                             
                            )}
                         
                        </Nav.Item>
                        <Nav.Item style={{flex:1}}></Nav.Item>
                  
                    <Nav.Link href='/bazarche' className="item-box" >
                        <div className='promotion-box'>
                            <h6>
                               پیشنهاد ویژه

                            </h6>
                            <i className="material-icons-outlined">
                                local_offer
                            </i>
                        </div>

                    </Nav.Link>
                    <Nav.Link href='/blog' className='item-box'>
                        <h5>اخبار</h5>
                    </Nav.Link>
                    <Nav.Link href='/aboutus' className="item-box" ><h5>درباره ما</h5></Nav.Link>
                  
                    <Nav.Link href='/' className='item-box'>
                        <h5>خانه</h5>
                        <i className="material-icons-outlined">
home
</i>
                    </Nav.Link>
                    <Nav.Item   onClick={e => {
                        setstylecategory({ display: 'block' });
                    }} className="category-box"         onMouseLeave={e => {
                        setstylecategory({ display: 'none' })
                    }} 
               >

                        دسته بندی
                        <i className="material-icons-outlined" onClick={() =>{console.log('1212')}}>
                            reorder
                        </i>
                    </Nav.Item>



   </Nav>

</Navbar.Collapse>

</Navbar>
                
            </div>
     

            <div className='col-12 div-show-category' style={stylecategory} 
                               >
                <div className='row row-result-category' 
                               >
                    {/* <div className=''>  */}
                    
                        {flag === 0 ? (
                            <>
                                                  <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                                    setstylecategory({ display: 'block' });
                                }}
                                    onMouseLeave={e => {
                                        setstylecategory({ display: 'none' })
                                    }}>
                        {categorylist.map((result: any, i) => (

                            <div className='col-item-category'>
                              
                                <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                {result.name}
                            </h6>
                         
                       
                            </div>


                        ))}
                        </div>
                              <div className='col-md-5'></div>
                            <div className='col-md-4 img-category'>
                                <img src={wichPhoto}></img>
                            </div>
                            </>
          
                        
                    ) : flag === 1 ? (
                        <>
                            <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                setstylecategory({ display: 'block' });
            }}
                onMouseLeave={e => {
                    setstylecategory({ display: 'none' })
                }}>
                                {categorylist.slice(0, 5).map((result: any) => (
                                    <div className=' col-item-category'>
                                            
                                        <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                setstylecategory({ display: 'block' });
            }}
                onMouseLeave={e => {
                    setstylecategory({ display: 'none' })
                }}>
                                {categorylist.slice(5).map((result: any) => (
                                    <div className=' col-item-category'>
                                            
                                             <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4 img-category'>
                                <img src={wichPhoto}></img>
                            </div>
                        </>
                    ) : flag === 2 ? (
                        <>
                            <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                setstylecategory({ display: 'block' });
            }}
                onMouseLeave={e => {
                    setstylecategory({ display: 'none' })
                }}>
                                {categorylist.slice(0, 5).map((result: any) => (
                                    <div className=' col-item-category'>
                                         
                                        <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                setstylecategory({ display: 'block' });
            }}
                onMouseLeave={e => {
                    setstylecategory({ display: 'none' })
                }}>
                                {categorylist.slice(5, 10).map((result: any) => (
                                    <div className=' col-item-category'>
                                          
                                        <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-3 col-row-result-category" onMouseEnter={e => {
                setstylecategory({ display: 'block' });
            }}
                onMouseLeave={e => {
                    setstylecategory({ display: 'none' })
                }}>
                                {categorylist.slice(10).map((result: any) => (
                                    <div className=' col-item-category'>
                                      
                                        <h6 onClick={() => gotopage(result.id,result.name)} onMouseEnter={()=>setwichPhoto(result.imageUrl)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                           
                            <div className='col-md-3 img-category'>
                                <img src={wichPhoto}></img>
                            </div>
                        </>
                    ) : 
                  null} 
                    </div>
                   

                        {/* </div> */}
            </div>

        </div>
    );

}
export default Headers;
