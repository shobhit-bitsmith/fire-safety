import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Button, Row, Col, Card } from "antd";
import { Link, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import APICall from "../../services/apiservices";
import { useForm } from "antd/es/form/Form";
const { Item } = Form;

const ManageQuoatation = ({ isEdit }) => {
    const [form] = useForm();
    const onFinish = async () => {

    }

    const initialVal = {

    };
    return (
        <>
            <Row>
                <Col span={24}>
                    <Card
                        title={isEdit ? "Edit Quoatation" : "Create Quoatation"}
                        extra={
                            <Link to="/quotations">
                                <Button type="primary">Back</Button>
                            </Link>
                        }
                    >

                        <Form
                            form={form}
                            layout="vertical"
                            wrapperCol={{
                                span: 14,
                            }}
                            onFinish={onFinish}
                            initialValues={initialVal}
                        >
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Card title="Enter the details of Quoatations" bordered={false}>
                                        <Row gutter={10}>
                                            <Col span={12}>
                                                <Item
                                                    label="Name"
                                                    name="name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please enter the quoatation name",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Enter name of the quoatation" />
                                                </Item>

                                                <Item
                                                    label="HSN"
                                                    name="hsn"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please enter the hsn",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Enter HSN" />
                                                </Item>


                                            </Col>

                                            <Col span={12}>
                                                <Item
                                                    label="GST Rate"
                                                    name="gstrate"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please enter the gst rate",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Enter GST Rate" />
                                                </Item>

                                                <Item
                                                    label="Price"
                                                    name="price"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please enter the quoatation price",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Enter price of the quoatation" />
                                                </Item>



                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                            </Row>

                            <Item style={{ marginTop: "20px", marginLeft: "20px" }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"

                                >
                                    {isEdit ? "Save" : "Create"}
                                </Button>
                            </Item>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ManageQuoatation