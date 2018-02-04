import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


class Test extends Component {

    constructor(props) {
        super(props);
        if(props.history) {
            console.log('history is not null')
        } else {
            console.log('history is null')
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('about');
    }

    render() {
        return (
            <div>
                this is test page
                <div>
                    <button onClick={this.handleClick}>点击</button>
                </div>
            </div>
        );
    }
}
export default withRouter(Test);