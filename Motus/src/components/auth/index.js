import React, { Component } from 'react';
import './index.css';

class Auth extends Component {
    
    state = {
        labelLogin: 'Логин',
        labelLoginActive: '',
        labelPassword: 'Пароль',
        labelPasswordActive: '',
    };

    tempAuth = () => {

        this.setState({
            labelLoginActive: 'form__label--active',
            labelPasswordActive: 'form__label--active',            
        });

        document.location.assign('http://localhost:3000/');

    };
    
  
    render() {

    // const DistinationItem = (props) => 
    //     <div className="distination__item">
    //         <a href={props.link} className="distination__item--link">
    //             <div className="distination__item--img">
    //                 <img src={images[props.imageLink]} alt={props.imageName} className={props.className} />
    //             </div>
    //             <div className="distination__item--count">
    //                 <span>{props.distination}</span>
    //             </div>
    //         </a>
    //     </div>
    // ;

    // function tempAuth() {

    //     // document.location.assign('https://cssgradient.io');
    //     this.setState.labelLogin = '0';

    // };

      return (
        <div className="auth">
            <div className="auth__head">
                <div className="title">
                    <span>Авторизация</span>
                </div>
                <div className="subtitle">
                    <span>Введите свой логин и пароль</span>
                </div>
            </div>
            <div className="auth__body">
                <form className="form auth__form">
                    <div className="form__item">
                        <label for="login" className={`form__label ${this.state.labelLoginActive}`}>{this.state.labelLogin}</label>
                        <input id="login" type="text" className="form__input"/>
                    </div>
                    <div className="form__item">
                        <label for="password" className={`form__label ${this.state.labelPasswordActive}`}>{this.state.labelPassword}</label>
                        <input id="password" type="password" className="form__input"/>
                    </div>
                    <div className="form__item form__item--checkbox">
                        <div className="checkbox">
                            <label for="remember" className="form__label">Запомнить меня</label>
                            <input id="remember" type="checkbox" className="form__input form__input--checkbox"/>
                        </div>
                        <div className="restore">
                            <a 
                              className="restore--link"
                              href=""
                              target="_blank"
                            >
                                <span>Забыли пароль?</span>
                            </a>
                        </div>
                    </div>
                    <button type="button" className="btn btn--auth btn--gradient btn--small" onClick={this.tempAuth}>ВОЙТИ</button>
                </form>
            </div>
        </div>
      );
    }
  }
  
export default Auth;