import React from "react";
import { Card, Form, Input, Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const ManageCustomer = ({ isEdit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {};

  return (
    <Row>
      <Col span={24}>
        <Card
          title={isEdit ? "Edit Customer" : "Create Customer"}
          extra={
            <Link to="/customers">
              <Button type="primary">Back</Button>
            </Link>
          }
        >
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            wrapperCol={{
              span: 14,
            }}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Personal Information" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer name" />
                      </Form.Item>

                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer email",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer email" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="mobile"
                        label="Mobile"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer mobile number",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer mobile number" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
                <Card title="Address" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer address",
                          },
                        ]}
                      >
                        <TextArea
                          rows={5}
                          placeholder="Enter customer address"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="state"
                        label="State"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer state",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer state" />
                      </Form.Item>

                      <Form.Item
                        name="pincode"
                        label="Pincode"
                        rules={[
                          {
                            required: true,
                            message:
                              "Please enter the customer address pincode",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer address pincode" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
                <Card title="Other Details" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Form.Item
                        name="GST Number"
                        label="GSTIN"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the customer GSTIN",
                          },
                        ]}
                      >
                        <Input placeholder="Enter customer GST Number" />
                      </Form.Item>
                    </Col>
                    <Col span={12}></Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Form.Item style={{ marginTop: "20px", marginLeft: "20px" }}>
              <Button
                type="primary"
                htmlType="submit"
                // style={{ float: "right" }}
              >
                {isEdit ? "Save" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageCustomer;
