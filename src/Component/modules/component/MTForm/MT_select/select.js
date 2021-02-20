import React from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';

const MTSelect = (props) => {
    const { Option } = Select;
    const { data, formtype, validator, name, className, errorMessage, placeholder, label, ...rest } = props;
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

MTSelect.propTypes = {
    menu: PropTypes.string,
    content: PropTypes.string,
    data: PropTypes.string,
    formtype: PropTypes.string,
    validator: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};