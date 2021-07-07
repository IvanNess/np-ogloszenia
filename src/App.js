import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Main from './components/main';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChoiceValue from './components/choiceValue/choiceValue';
import MySelect from './components/mySelect';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <div>
          {/* <MySelect choice='sport' choiceValues={[1, 2, 3, 4, 5]} isInner={true} title='Sport'/>
          <MySelect choice='uroda' choiceValues={[1, 7, 8, 9, 2]} title='Uroda'/>
          <MySelect choice='kadry' choiceValues={[1, 7, 8, 9, 2]} isSingleValue={true} title='Kadry'/> */}
          <Main/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
