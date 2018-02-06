import React from 'react';

import Http from "../../lib/Http";
import Home from './home';


export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Http.get('/api/get_recommended_entry')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({data: json.d});
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            });
    }

    render() {
        return (
            <Home data={this.state.data}/>
        )
    }
}