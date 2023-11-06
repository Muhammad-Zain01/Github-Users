import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
import { Typography } from 'antd';
function App() {
  return (
    <div className='main-container'>
      <div className='container' >
        <Typography.Title style={{ textAlign: 'center' }}>Github User Directory</Typography.Title>
        <SearchBox />
        <GithubUsers />
      </div>
    </div>
  );
}

export default App;
