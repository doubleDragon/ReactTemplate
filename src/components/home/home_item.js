import React from "react";
import './home_item.css'
import Circle from '../circle';

export default class HomeItem extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className='HomeItem'>
                <div className='hi-t'>
                    {this.props.item.title}
                </div>

                <div className='hi-c'>
                    <div className='hi-c-0'>
                        iOS
                    </div>

                    <div className='hi-c-1'>
                        {this.props.item.name}
                    </div>

                    <div className='ml10'>
                        <Circle color='#8f969c' pix='4px'/>
                    </div>

                    <div className='hi-c-1 ml10'>
                        {this.props.item.time}
                    </div>

                    <div className='ml10'>
                        <Circle color='#8f969c' pix='4px'/>
                    </div>


                    <div className='hi-c-1 ml10'>
                        {this.props.item.count + '次阅读'}
                    </div>

                </div>
            </div>
        )
    }
}