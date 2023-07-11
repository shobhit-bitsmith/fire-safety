import React from "react";
import { Card, Descriptions, Button } from "antd";
import { Link } from "react-router-dom";

const CustomerDetails = ({ customerData }) => {
  return (
    <Card
      title="Customer Details"
      extra={
        <Link to="/customers">
          <Button type="primary">Back</Button>
        </Link>
      }
    >
      <Descriptions layout="vertical">
        <Descriptions.Item label="Name">{customerData?.name}</Descriptions.Item>
        <Descriptions.Item label="Email">
          {customerData?.email}
        </Descriptions.Item>
        <Descriptions.Item label="Mobile">
          {customerData?.mobile}
        </Descriptions.Item>
        <Descriptions.Item label="Address">
          {customerData?.address}
        </Descriptions.Item>
        <Descriptions.Item label="State">
          {customerData?.state}
        </Descriptions.Item>
        <Descriptions.Item label="Pincode">
          {customerData?.pincode}
        </Descriptions.Item>

        <Descriptions.Item label="GSTIN">
          {customerData?.GSTIN}
        </Descriptions.Item>
        <Descriptions.Item label="Access Status">
          {customerData?.accessStatus}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default CustomerDetails;
