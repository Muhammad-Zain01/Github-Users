import './App.css';
import SearchBox from './components/search-box';
import GithubUsers from './components/github-users';
function App() {
  return (
    <div className='main-container'>
      <div className='container'>
        <SearchBox />
        <GithubUsers />
      </div>
    </div>
  );
}

export default App;
