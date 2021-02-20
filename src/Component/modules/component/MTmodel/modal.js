import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const MTModal = (props) => {
    const { footer, title, visible, ...rest } = props;
    return (
        <Modal
            visible={visible}
            title={title}
            centered
            footer={[footer]}
            {...rest}
        >
        </Modal>
    );
}
export default MTModal;
MTModal.propTypes = {
    visible: PropTypes.bool,
    footer: PropTypes.array,
    title: PropTypes.string,
};
