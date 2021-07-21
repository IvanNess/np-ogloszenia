import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Main from './components/main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Main/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
