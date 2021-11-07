import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AuthStatus, ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';

import Header from './Component/Header/Headers'
import Landing from './landing/landing.index';
import AboutUs from './aboutus/aboutus'
import Footer from './Component/footer/footer'
import { RoutePath } from 'data';
import Personal from './profile/personal/personal'
import History from './profile/history/history'
import Order from './profile/order/order' 
import Ticket from './profile/ticket/ticket'
import Detailproduct from './detailproduct/detailproduct'
import Bazarche from './bazarche/bazarche'
import Card from './card/card'
import Purchase from './purchase/purchase'
import Blog from './blog/blog'
import Login from './login/login';
import ShopSearch from './shopsearch/shopsearch'
import Shop from './shop/shop'
import Brand from './brand/brand';
import Terms from './terms/terms';

const Komeil: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {

    return (
        <Router>
       
                   <Header/>
                    <Switch>
               <Route path='/aboutus' component={AboutUs}></Route>
               <Route path='/profile/personal' component={Personal}></Route>
               <Route path='/profile/order' component={Order}></Route>
               <Route path='/profile/history' component={History}></Route>
               <Route path='/profile/ticket' component={Ticket}></Route>
               <Route path='/detailproduct' component={Detailproduct}></Route>
               <Route path='/bazarche' component={Bazarche}></Route>
               <Route path='/cart' component={Card}></Route>
               <Route path='/purchase' component={Purchase}></Route>
               <Route path='/blog' component={Blog}></Route>
<Route path='/shopsearch' component={ShopSearch}></Route>
               <Route path='/shop' component={Shop}></Route>
               <Route path='/login' component={Login}></Route>
               <Route path='/brand' component={Brand}></Route>
               <Route path='/terms' component={Terms}></Route>
             
                        <Route path="*">
                            <Redirect to="#" />
                            <Landing />
                        </Route>
                    </Switch>
              <Footer/>
        
       
        </Router>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
    isAuth: state.authStatus,
});

const connector = connect(mapStateToProps);
export default connector(Komeil);
