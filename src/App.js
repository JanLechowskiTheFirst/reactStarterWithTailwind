import { Layout, Home, Accounts, People } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/main.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/accounts" element={<Accounts/>}/>
              <Route path="/people" element={<People/>}/>
            </Routes>
          </Layout>
      </div>
    </Router>
  );
}

export default App;
