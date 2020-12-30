import React from 'react';
import { Button } from 'antd';

const MTButton = (props) => {
    const { type , ...rest } = props;

    return (
        <div>
           <Button {...rest}></Button>
        </div>
    )
}

export default MTButton;