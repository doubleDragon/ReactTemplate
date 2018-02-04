import React from "react";
import {withRouter} from 'react-router-dom';
import './home.css';
import logo from '../../images/ic_logo.svg';


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div>
                <div className="tb">
                    <img src={logo} alt=""/>
                    <div className='tb-menu'>
                        首页
                    </div>

                    <div className="tb-lo">
                        <span className='tb-lo-t'>登录</span>
                        <span className='circle ml10'/>
                        <span className='tb-lo-t ml10'>注册</span>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);