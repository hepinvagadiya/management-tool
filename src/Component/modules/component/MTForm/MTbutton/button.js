import React from 'react';
import { Button } from 'antd';

const MTButton = (props) => {
    const { htmlType, type, key, ...rest } = props;

    return (
        <div>
            <Button key={key} htmlType={htmlType} {...rest}></Button>
        </div>
    )
}

export default MTButton;