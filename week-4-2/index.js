import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png'
import exit from './iconfinder_00-ELASTOFONT-STORE-READY_close_2703079.png'
import menu from './iconfinder_Menu_4473024.png'
import { NONAME } from 'dns';
import { assignmentExpression } from '@babel/types';

const Header = () => {
    return (
        <header id="TOP" className="main-header">
            <h1 className="title">SHOW-U</h1>
            <ul className="main-nav">
                <li><a href="#">item1</a></li>
                <li><a href="#">item2</a></li>
                <li><a href="#">item3</a></li>
                <li><a href="#">item4</a></li>
            </ul>
        <img id="menu" src={menu} onClick={()=>{
            document.getElementById('menu').style.display = 'none';
            document.getElementById('exit').style.display = 'inline-block';
            document.querySelector('.main-nav').style.display = 'flex'}}></img>
        <img id="exit" src={exit} onClick={()=>{
            document.getElementById('exit').style.display = 'none';
            document.getElementById('menu').style.display = 'inline-block';
            document.querySelector('.main-nav').style.display = 'none'}}></img>
        <img id="logo" src={logo}></img>
            
        </header>
    )
}

class Welcome extends React.Component {
    state = {
        title : "welcome message"
    }

    changeTitle=()=> {
      this.setState( {
        title : "Have a good time"
        })
    }
    render() {
        return (
            <div className="welcome">
                <h1 id="myHeading" onClick={this.changeTitle}>
                    {this.state.title}
                </h1>
            </div>
        )
    }
}




const ContainerTitle = () => {
    return (
        <h2 className="containerTitle">Section Title</h2>
    )
}

class Container extends React.Component {
    render() {
        return (
            <div className="containers">
                <div className="first row">
                    <div>
                        <p className="content">content one</p>
                    </div>
                </div>
                <div className="second row">
                    <div>
                        <p className="content">content two</p>
                    </div>
                </div>
                <div className="third row">
                    <div>
                        <p className="content">content three</p>
                    </div>
                </div>
                <div className="fourth row">
                    <div>
                        <p className="content">content four</p>
                    </div>
                </div>
                <button id="myButton" onClick={() => document.getElementById('containers_2').style.display = "flex"}>Call more box</button>          
            </div>
        );
    }
}


    


class Containers_2 extends React.Component {
//     state ={
//         show :document.getElementById("containers_2").style.display = "none"
//    }
//    addMore =()=>{
//        this.setState({
//         show :document.getElementById("containers_2").style.display = "flex"
//        })
//    }   
    render() {
        return (            
                <div id="containers_2">
                <div className="first row">
                    <div>
                        <p className="content">content one</p>
                    </div>
                </div>
                <div className="second row">
                    <div>
                        <p className="content">content two</p>
                    </div>
                </div>
                <div className="third row">
                    <div>
                        <p className="content">content three</p>
                    </div>
                </div>
                <div className="fourth row">
                    <div>
                        <p className="content">content four</p>
                    </div>
                </div>
                
                {/* <button id="myButton" onClick={this.addMore}>Call more box</button> */}
            </div>
            
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Welcome />
                <ContainerTitle />
                <Container />       
                <Containers_2 />
                {/* <Containers_2 show={document.getElementById('containers_2')} />*/}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
