import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
import { Typography, notification } from 'antd';
import useNotifcation from './hooks/useNotifcation';
function App() {
  const [contextHolder] = useNotifcation()
  return (
    <>
      {contextHolder}
      <div className='main-container'>
        <div className='container' >
          <Typography.Title style={{ textAlign: 'center' }}>Github User Directory</Typography.Title>
          <SearchBox />
          <GithubUsers />
        </div>
      </div>
    </>
  );
}

export default App;
