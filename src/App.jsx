import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
import { Typography } from 'antd';
import { get } from './common/API';
import { useEffect, useState } from 'react';
import { useGithub } from './hooks/useGithub';
function App() {
  
  // const [loadings, setLoading] = useState(true);
  // const [pagination, setPagination] = useState(false)
  // const handleData = async (query = '') => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   let per_page = 100;
  //   let page = urlParams.get('page') ?? 1;
  //   let url = "https://api.github.com/users";
  //   if (query !== '') url = `https://api.github.com/search/users?q=${query}&per_page=${per_page}&page=${page}`;
  //   const response = await get(url)
  //   if (response?.status == 200) {
  //     if (Array.isArray(response.data)) {
  //       // setData(response.data)
  //       setPagination(false)
  //     } else {
  //       console.log(response.data.total_count / per_page)
  //       // setData(response.data.items)
  //       setPagination(true)
  //     }
  //   }
  // }
  // useEffect(() => { handleData() }, [])
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
