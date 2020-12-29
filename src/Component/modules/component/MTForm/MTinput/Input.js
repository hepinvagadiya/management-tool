import React from 'react';
import { Input } from 'antd';
// import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const MTInput = (props) => {
    const { type , ...rest } = props;

    return (
        <div>
            <Input
                autoComplete="off"
                // type={type === "password" ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                type={type}
                {...rest}
            />
        </div>
    )
}

export default MTInput;