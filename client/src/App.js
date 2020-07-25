import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShowPlanPage from './pages/show-plan-page/show-plan-page.component';
import RegistrationPage from './pages/registration-page/registration-page.component';
import ShowGradesPage from './pages/show-grades-page/show-grades-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Modal from './components/modal/modal.component';

import {Switch, Route, withRouter} from 'react-router-dom';

import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
    //this.state = { apiResponse: '' };
  }

  componentWillUpdate() {
    const {location} = this.props;
    if (!(location.state && location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }  

  render() {
    const {location} = this.props;
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div className='App'>

        {/*
          Рендерим хедер только, если юзер залогинился
        */}

        <Header />
        
        <Switch location={isModal ? this.previousLocation : location}>

          {/*
            Редирект со страницы регистрации, если юзер уже залогинился
          */}

          <Route excat path='/register' component={RegistrationPage} />
          <Route exact path='/plans' component={HomePage} />
          <Route exact path='/plan/:id' component={ShowPlanPage} />
          <Route exact path='/grades' component={ShowGradesPage} />
          <Route exact path="/c/plan/:id" component={Modal} />

          <Route>{'404'}</Route>
        </Switch>

        {isModal
          ? <Route exact path="/c/plan/:id" >
              <Modal isModal />
            </Route>
          : null
        }

        {/*
          Рендерим футер только, если юзер залогинился
        */}

        <Footer />
      </div>
    );
  }

}

export default withRouter(App);
