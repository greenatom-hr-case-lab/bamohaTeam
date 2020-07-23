import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShowPlanPage from './pages/show-plan-page/show-plan-page.component';
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

  /*callAPI() {
    fetch('http://localhost:9000/API')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  } */

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
        <Header />
        
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/plan/' component={ShowPlanPage} />
          <Route exact path="/plan/:id" component={Modal} />
          <Route>{'404'}</Route>
        </Switch>

        {isModal
          ? <Route exact path="/plan/:id" >
              <Modal isModal />
            </Route>
          : null
        }

        <Footer />
      </div>
    );
  }

}

export default withRouter(App);
