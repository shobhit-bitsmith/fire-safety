import React from "react";
import { LuPlus } from "react-icons/lu";
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Tag,
  message,
  Modal,
  Dropdown,
} from "antd";
import { Link } from "react-router-dom";
const { confirm } = Modal;
const data = [
  {
    _id: 1,
    name: "John Doe",
    address: "123 Main Street",
    state: "California",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    GSTIN: "ABCD1234",
    accessStatus: "Active",
  },
  {
    _id: 2,
    name: "Jane Smith",
    address: "456 Elm Street",
    state: "New York",
    mobile: "987-654-3210",
    email: "jane.smith@example.com",
    GSTIN: "EFGH5678",
    accessStatus: "Inactive",
  },
  {
    _id: 3,
    name: "Michael Johnson",
    address: "789 Oak Avenue",
    state: "Texas",
    mobile: "456-789-1230",
    email: "michael.johnson@example.com",
    GSTIN: "IJKL9012",
    accessStatus: "Active",
  },
  {
    _id: 4,
    name: "Emily Davis",
    address: "987 Pine Street",
    state: "Florida",
    mobile: "789-123-4560",
    email: "emily.davis@example.com",
    GSTIN: "MNOP3456",
    accessStatus: "Active",
  },
  {
    _id: 5,
    name: "Daniel Wilson",
    address: "345 Cedar Avenue",
    state: "Arizona",
    mobile: "234-567-8901",
    email: "daniel.wilson@example.com",
    GSTIN: "QRST7890",
    accessStatus: "Inactive",
  },
  {
    _id: 6,
    name: "Sophia Anderson",
    address: "567 Maple Street",
    state: "Washington",
    mobile: "890-123-4567",
    email: "sophia.anderson@example.com",
    GSTIN: "UVWX1234",
    accessStatus: "Active",
  },
  {
    _id: 7,
    name: "Matthew Thompson",
    address: "234 Elmwood Avenue",
    state: "Colorado",
    mobile: "567-890-1234",
    email: "matthew.thompson@example.com",
    GSTIN: "YZAB5678",
    accessStatus: "Inactive",
  },
  {
    _id: 8,
    name: "Olivia Martinez",
    address: "890 Oakwood Drive",
    state: "Georgia",
    mobile: "901-234-5678",
    email: "olivia.martinez@example.com",
    GSTIN: "CDEF9012",
    accessStatus: "Active",
  },
  {
    _id: 9,
    name: "James Brown",
    address: "456 Walnut Avenue",
    state: "Illinois",
    mobile: "678-901-2345",
    email: "james.brown@example.com",
    GSTIN: "GHIJ2345",
    accessStatus: "Active",
  },
  {
    _id: 10,
    name: "Ava Taylor",
    address: "123 Cherry Street",
    state: "Michigan",
    mobile: "345-678-9012",
    email: "ava.taylor@example.com",
    GSTIN: "KLMN6789",
    accessStatus: "Inactive",
  },
];

const Customers = () => {
  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete customer ${record.name}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        // Delete logic goes here
        message.success("Customer deleted successfully!");
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "GSTIN",
      dataIndex: "GSTIN",
      key: "GSTIN",
    },
    {
      title: "Access Status",
      dataIndex: "accessStatus",
      key: "accessStatus",
      render: (accessStatus) => (
        <Tag color={accessStatus === "Active" ? "green" : "red"}>
          {accessStatus}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: <Link to={`/customers/manage/${11}`}>Edit</Link>,
              },
              {
                key: 2,
                label: <Link to={`/customers/${11}`}>Open</Link>,
              },
              {
                key: 3,
                label: (
                  <span
                    style={{ color: "red" }}
                    onClick={() => handleDelete(record)}
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
  return (
    <Row>
      <Col span={24}>
        <Card
          title="Customer Management"
          extra={
            <>
              <Link to="/customers/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add Customer
                </Button>
              </Link>
            </>
          }
        >
          <Table columns={columns} dataSource={data} size="middle" />
        </Card>
      </Col>
    </Row>
  );
};

export default Customers;
