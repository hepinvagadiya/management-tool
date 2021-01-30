import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import Icons from '../../component/Icons/icons';

export const Filter = () => {
    const [form] = Form.useForm();
    const [FilterItem, setFilterItem] = useState();

    const AddFilterItem = (value) => {
        form.resetFields();
        setFilterItem([value])
    }
    return (
        <span>
            { console.log(FilterItem, 'nasdjff')}
            <Form form={form} layout="inline" onFinish={AddFilterItem}>
                <span style={{ display: 'flex' }}>
                    <span>
                        <div className="inputs">
                            <div className="label">Filter Field</div>
                            <Form.Item name="fieldname" rules={[{ required: true, message: 'Please input Filter Field!' }]} >
                                <Input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Select Field"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Filter Value</div>
                            <Form.Item name="fieldvalue" rules={[{ required: true, message: 'Please input Filter Value!' }]} >
                                <Input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Enter Value"
                                />
                            </Form.Item>
                        </div>
                    </span>
                    <Form.Item>
                        <Button className="addField" htmlType="submit"><Icons type="Add" /></Button>
                    </Form.Item>
                </span>
            </Form>
            {FilterItem === undefined ? null : FilterItem.map((menu, index) => (
                <div className="subject">{menu.fieldname} = {menu.fieldvalue} <span className="close"><Icons type="closeFilter" /></span></div>
            ))}

            <Button className="search">Search</Button>
        </span>
    );
}
export default Filter;