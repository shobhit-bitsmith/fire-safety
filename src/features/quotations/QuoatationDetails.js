import React, { useEffect, useState } from "react";
import { Button, Card, Descriptions } from "antd";
import { Link, useParams } from "react-router-dom";
import APICall from "../../services/apiservices";

const QuoatationDetails = () => {
    const params = useParams();

    const quoatation = {
        name: "Fire Exingusiher",
        hsn: "843029483209",
        gstrate: "12%",
        price: "400000"
    };

    return (
        <Card
            title="Quoatation Details"
            extra={
                <Link to="/quotations">
                    <Button type="primary">Back</Button>
                </Link>
            }
        >
            <Descriptions layout="vertical">
                <Descriptions.Item label="Name">{quoatation.name}</Descriptions.Item>
                <Descriptions.Item label="HSN">
                    {quoatation.hsn}
                </Descriptions.Item>
                <Descriptions.Item label="GST Rate">{quoatation.gstrate}</Descriptions.Item>
                <Descriptions.Item label="Price">{quoatation.price}</Descriptions.Item>

            </Descriptions>

        </Card>
    );
};

export default QuoatationDetails;
