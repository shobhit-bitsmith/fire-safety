import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { Row, Col, Card, Button, Table, message, Modal, Dropdown } from "antd";
import { Link } from "react-router-dom";
import APICall from "../services/apiservices";
const { confirm } = Modal;
const Quotations = () => {
  const handleDelete = async (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete employee ${record.name}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        // Delete logic goes here
        const res = await APICall(`/employee/${record._id}`, {}, 4);
        window.location.reload();
        message.success("Employee deleted successfully!");
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };
  const columns = [
    {
      title: "Name",
      key: "name",
      fixed: "left",
      render: (_, data) => {
        return data.name;
      },
      responsive: ["md"],
    },
    {
      title: "HSN",
      key: "name",
      fixed: "left",
      render: (_, data) => {
        return data.hsn;
      },
      responsive: ["md"],
    },
    {
      title: "GST Rate",
      key: "name",
      fixed: "left",
      render: (_, data) => {
        return data.gstrate;
      },
      responsive: ["md"],
    },
    {
      title: "Price",
      key: "name",
      fixed: "left",
      render: (_, data) => {
        return data.price;
      },
      responsive: ["md"],
    },


    {
      title: "Actions",
      key: "actions",
      fixed: 'right',
      render: (_, data) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: <Link to={`/quotations/:${data._id}`}>Open</Link>,
              },
              {
                key: 2,
                label: <Link to={`/quotations/manage/:${data._id}`}>Edit</Link>,
              },

              {
                key: 3,
                label: (
                  <span
                    style={{ color: "red" }}
                    onClick={() => handleDelete(data)}
                  >
                    Delete
                  </span>
                ),
              },
            ],
          }}
          placement="bottom"
        >
          <Button type="link">Actions</Button>
        </Dropdown>
      ),
      align: "center",
    },
  ];

  const data = [
    {
      _id: 1,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",


    },
    {
      _id: 2,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",

    },
    {
      _id: 3,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",

    },
    {
      _id: 4,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 5,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 6,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 7,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 8,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 9,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
    {
      _id: 10,
      name: "Fire Extinguisher",
      hsn: "99874832472347",
      gstrate: "12%",
      price: "4000000",
    },
  ];


  return (
    <Row>
      <Col span={24}>
        <Card
          title="Quoatations"
          extra={
            <>
              <Link to="/employees/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Create Quoatation
                </Button>
              </Link>
            </>
          }
        >
          <Table
            style={{ maxWidth: 1200 }}
            columns={columns}
            dataSource={data}
            scroll={{ x: true }}
          // pagination={true}
          />
        </Card>
      </Col>
    </Row>

  );
};

export default Quotations;
