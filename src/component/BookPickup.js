import React from 'react';
import 'antd/dist/antd.css';
import { Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

class BookPickup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            completed: []
        };
    }

    render() {
        return (
            <div>
                <div>Book a Pickup</div>
                <div>
                    <span>Package Number:</span><input type="text" />
                </div>
                <div>
                    <span>Pickup </span>
                    <DatePicker/>
                    <TimePicker format={format}/>
                </div>
                    <Button>Book</Button>{" "}
                    <Button>Cancel</Button>
            </div>



        );
    }
}

export default BookPickup;