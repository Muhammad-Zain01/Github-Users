import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
import { get } from './common/API';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const handleData = async (query = '') => {
    let page = 1;
    let per_page = 100;
    setLoading(true);
    let url = "https://api.github.com/users";
    if(query !== '') url =  `https://api.github.com/search/users?q=${query}&per_page=${per_page}&page=${page}`;
    const response = await get(url)
    if(response.status == 200){
      console.log(response);
      setData(Array.isArray(response.data) ? response.data : response.data.items)
      setLoading(false);
    }
  }
  useEffect(() => {handleData()}, [])
  return (
    <div className='main-container'>
      <div className='container' >
        <SearchBox setQuery={(value) => handleData(value)}/>
        <GithubUsers data={data} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
