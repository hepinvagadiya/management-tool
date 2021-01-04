import React from 'react';
import { Button } from 'antd';

const MTButton = (props) => {
    const { htmlType, type, ...rest } = props;

    return (
        <div>
            <Button {...rest} htmlType={htmlType}></Button>
        </div>
    )
}

export default MTButton;