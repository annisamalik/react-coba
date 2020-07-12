import React from 'react';
import {ThemeContext} from './theme';
import '../index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LifeUp from "../LifeUp";
  import Form from "../form";
import ToDo from '../ToDoList';

class Halamanku extends React.Component{
    render(){
        return (
            <ThemeContext.Consumer>
                {({colorTheme, onChangeTheme, bahasa}) => 
                {return (

                            <div style={
                                {
                                    backgroundColor : colorTheme ==='dark' ? 'black' : 'white',
                                    color : colorTheme === 'dark' ? 'white' : 'black'
                                }
                            }>

                            <>
        <div className="header" style={{ backgroundColor : colorTheme ==='dark' ? 'black' : 'white'}}>
            <h1>My Website</h1>
            <p>Resize the browser window to see the effect.</p>
        </div>

        
       
        <Router>
            <div className="topnav">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/convert">Dollar Converter</Link></p>
            <p><Link to="/form">Form</Link></p>
            <p><Link to="/todo">To Do List</Link></p>
            <button onClick={onChangeTheme}>
                {colorTheme ==='dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            </div>
        <div className="row">
        <div className="leftcolumn">
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'black' : 'white'}}>
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/convert">
            <LifeUp />
        </Route>
        <Route path="/form">
            <Form />
        </Route>
        <Route path="/todo">
            <ToDo />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>

            </div>
        </div>

       
        <div className="rightcolumn" style={{ backgroundColor : colorTheme ==='dark' ? '#aaa' : 'white'}}>
            <div classNames="card" style={{ backgroundColor : colorTheme ==='dark' ? 'gray' : 'white'}}>
            <h2>About Me</h2>
            <div className="fakeimg">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'gray' : 'white'}}>
            <h3>Popular Post</h3>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            </div>
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'gray' : 'white'}}>
            <h3>Follow Me</h3>
            <p>Some text..</p>
            </div>
        </div>
        </div>
        </Router>
<div className="footer">
  <h2>Footer</h2>
</div>
        </>
                            
                            
                            
                            </div>
                        )}
                }
            </ThemeContext.Consumer>
        )
        
    }
}

  

export default Halamanku;

function Home() {
    return (
    <>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div className="fakeimg" >Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </>);
  }