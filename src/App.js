import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
import { get } from './common/API';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState({})
  const [query, setQuery] = useState("")
  const handleData = async () => {
    // &page,per_page,sort,order}
    let url = "https://api.github.com/users";
    if(query != '') url =  `https://api.github.com/search/users?q=${query}`
    const response = await get(url)
    if(response.status == 200){
      setData(response.data)
    }
  }
  useEffect(() => {handleData()}, [])
  return (
    <div className='main-container'>
      <div className='container' >
        <SearchBox />
        <GithubUsers data={data}/>
      </div>
    </div>
  );
}

export default App;
