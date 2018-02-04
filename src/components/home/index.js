import React from "react";
import {Link,withRouter} from 'react-router-dom';
import './home.css';


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
                <h1>this is Home page header</h1>
                <p>this is content in Home Page</p>

                <button onClick={this.handleClick}>点击测试</button>

                <div>
                    <Link to='/about'>intent to about</Link>
                </div>

                <div className='sub'>
                    this is sub text
                </div>

            </div>
        )
    }
}

export default withRouter(Home);