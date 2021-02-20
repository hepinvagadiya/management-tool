import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MTButton = (props) => {
    const { htmlType, key, ...rest } = props;
    return (<div><Button key={key} htmlType={htmlType} {...rest}></Button></div>)
}

export default MTButton;

MTButton.propTypes = {
    key: PropTypes.string,
    htmlType: PropTypes.string,
};