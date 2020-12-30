import React from 'react';
import { Input } from 'antd';

const MTInput = (props) => {
    const { type , ...rest } = props;

    return (
        <div>
            <Input
                autoComplete="off"
                type={type}
                {...rest}
            />
        </div>
    )
}

export default MTInput;