import React from 'react';

export default class Circle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const pix = this.props.pix.toString();
        const color = this.props.color.toString();

        const left = this.props.left || '0px';

        const radius = '50%';
        const circleClass = {
            width: pix,
            height: pix,
            backgroundColor: color,
            borderRadius: radius,
            border: '1px solid ' + color,
            marginLeft: left
        };

        return (
            <div style={circleClass}/>
        )
    }
}