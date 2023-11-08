import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'
import Calendar from './pages/calendar/Calendar'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainPage from "./components/MainPage"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
          <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/calendar">
              <Calendar/>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App

