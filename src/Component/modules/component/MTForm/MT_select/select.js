import React from 'react';
import { Form, Select } from 'antd';

const MTSelect = (props) => {
    const { Option } = Select;
    const { htmlType, data, formtype, onchange, validator, onKeyPress, name, className, errorMessage, placeholder, label, type, key, ...rest } = props;
    return (
        <div className={className} {...rest}>
            <div className="label">{label}</div>
            <Form.Item name={name} rules={[{ validator: validator, type: formtype, required: true, message: errorMessage }]} >
                <Select placeholder={placeholder}>
                    {data.map((menu, index) => (
                        <Option key={index} value={menu}>{menu}</Option>
                    ))}
                </Select>
            </Form.Item>
        </div>
    )
}

export default MTSelect;