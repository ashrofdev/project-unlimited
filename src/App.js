import './resources/scss/App.scss'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard';
import Signin from './component/signin/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>   
        <Switch > 
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/' exact component={Signin}/>
      </Switch>
    </BrowserRouter>

      {/* <Signin/> */}
     
    </div>
  );
}

export default App;
