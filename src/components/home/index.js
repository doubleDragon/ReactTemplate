import React from "react";
import {withRouter} from 'react-router-dom';
import './home.css';
import logo from '../../images/ic_logo.svg';
import HomeItem from './home_item';
import Http from '../../lib/Http';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let r = Http.ajax('GET', '/api/get_recommended_entry?suid=aNM3YIb2nfVMUbnEmvue&ab=welcome_3&src=web');
        r.then(text => {
            console.log('text: ', text)
        }).catch(status => {
            console.log('failed status: ', status)
        })
    }

    handleClick() {
        this.props.history.push('/about');
    }

    render() {

        const items = [
            {title: 'title 0', name:"张三", time:'10月前', count: 10},
            {title: 'title 1', name:"张三", time:'10月前', count: 10},
            {title: 'title 2', name:"张三", time:'10月前', count: 10},
            {title: 'title 3', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
            {title: 'title 4', name:"张三", time:'10月前', count: 10},
        ];
        const listItems = items.map((item, index) => (
            <li key={index}>
                <HomeItem item={item}/>
            </li>
        ));

        return (
            <div className='Home'>
                <div className='tb'>
                    <div className="tb-c">
                        <img src={logo} alt=""/>
                        <div className='tb-c-menu'>
                            首页
                        </div>

                        <div className="tb-c-lo">
                            <span className='tb-c-lo-t'>登录</span>
                            <span className='circle ml10'/>
                            <span className='tb-c-lo-t ml10'>注册</span>

                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='c-h'>
                        <div className='c-h-l'>
                            热点文章
                        </div>
                        <div className='c-h-r'>查看更多</div>
                    </div>

                    <ul>{listItems}</ul>

                </div>

            </div>
        )
    }
}

export default withRouter(Home);