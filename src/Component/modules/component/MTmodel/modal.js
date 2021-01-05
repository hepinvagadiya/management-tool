import React from 'react';
import { Modal } from 'antd';

const MTModal = (props) => {
    const { footer,key, title, visible, loading, ...rest } = props;
    return (
        <>
            <Modal
                visible={visible}
                title={title}
                centered
                footer={[footer]}
                {...rest}
            >
            </Modal>
        </>
    );
}
export default MTModal;
