import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShowPlanPage from './pages/show-plan-page/show-plan-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import {Switch, Route} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
      fetch('http://localhost:9000/API')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div>
        <Header />
        
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route path='/plan' component={ShowPlanPage} />
        </Switch>

        <Footer />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }

}

export default App;
