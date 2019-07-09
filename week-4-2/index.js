import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png'
import exit from './iconfinder_00-ELASTOFONT-STORE-READY_close_2703079.png'
import menu from './iconfinder_Menu_4473024.png'
import { NONAME } from 'dns';
import { assignmentExpression } from '@babel/types';
import { strictEqual } from 'assert';
class Header extends React.Component {
    state = {
        open: true,
        className1: "main-nav",
        className2: "menu",
        className3: "exit"
    }
    changeDisplay = () => {
        this.setState({
            open: false,
            className1: "main-navExpand",
            className2: "menu-expand",
            className3: "exit-expand"
        })
    }
    closeMenu = () => {
        this.setState({
            open: false,
            className1: "main-nav",
            className2: "menu",
            className3: "exit"
        })
    }

    render() {

        return (
            <header id="TOP" className="main-header">
                <h1 className="title">SHOW-U</h1>
                <ul className={this.state.className1}>
                    <li><a href="#">item1</a></li>
                    <li><a href="#">item2</a></li>
                    <li><a href="#">item3</a></li>
                    <li><a href="#">item4</a></li>
                </ul>
                <img id="logo" src={logo}></img>
                <img id="menu" src={menu} className={this.state.className2} onClick={this.changeDisplay}></img>
                <img id="exit" src={exit} className={this.state.className3} onClick={this.closeMenu}></img>
            </header>
        )
    }
}

class Welcome extends React.Component {
    state = {
        title: "welcome message"
    }

    changeTitle = () => {
        this.setState({
            title: "Have a good time"
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
    state = {
        open: true,
        id: "containers_2"
    }

    appear = () => {
        this.setState({
            open: false,
            id: "containers_2appear"
        })
    }
    render() {
        return (
            <div>
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
                    <div className="myButton">
                        <button onClick={this.appear}>Call more box</button>
                    </div>
                </div>
                <div id={this.state.id}>
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
                </div>
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
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
