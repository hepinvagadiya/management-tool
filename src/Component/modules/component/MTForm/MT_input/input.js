import React from 'react';
import { Form, Input } from 'antd';

const MTInput = (props) => {
    const { htmlType, formtype, onchange, validator, onKeyPress, name, className, errorMessage, placeholder, label, type, key, ...rest } = props;
    const restrict = (event) => {
        const regex = new RegExp("^[a-zA-Z]+$");
        const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
    const contectValid = (event) => {
        if (event.charCode === 46) {
            event.preventDefault();
        }
    }
    return (
        <div className={className} {...rest}>
            <div className="label">{label}</div>
            <Form.Item name={name} rules={[{ validator: validator, type: formtype, required: true, message: errorMessage }]} >
                <Input
                    type={type}
                    autoComplete="off"
                    placeholder={placeholder}
                    onKeyPress={onKeyPress === 'contect' ? e => contectValid(e) : onKeyPress === true ? e => restrict(e) : null}
                    onChange={onchange}
                />
            </Form.Item>
        </div>
    )
}

export default MTInput;