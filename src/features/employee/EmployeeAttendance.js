import React from "react";
import { Button, Card, Table, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { Modal } from 'antd';
const { confirm, message } = Modal;
const EmployeeAttendance = ({ empData }) => {


    const handleDelete = (record) => {
        confirm({
            title: "Confirm Delete",
            content: `Are you sure you want to delete attendance record of employee ${record.name}?`,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk: () => {
                message.success("Employee deleted successfully!");
            },
            onCancel: () => {
                message.info("Delete canceled");
            },
        });
    };

    //  when we use db to fetch columns then we can dynamically build date columns for the attendance 
    //     handleAddColumn = () => {
    //         const { columns } = allColumns
    //         const newColumn = {
    //             title: allColumns.date,
    //             dataIndex: allColumns._id,
    //         };

    //         setAllColumns({
    //             columns: [...columns, newColumn]
    //         });
    //     }

    const columns = [
        {
            title: "Employee Name",
            key: "name",
            fixed: "left",
            render: (_, data) => {
                return data.name;
            },
            responsive: ["md"],
        },

        {
            title: "27/06/2023",
            key: "date",
            render: (_, data) => {
                return data.date[3] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },

        {
            title: "28/06/2023",
            key: "date",
            render: (_, data) => {
                return data.date[4] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },
        {
            title: "29/06/2023",
            key: "date",
            render: (_, data) => {
                return data.date[5] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },
        {
            title: "30/06/2023",
            key: "date",
            render: (_, data) => {
                return data.date[6] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },
        {
            title: "01/07/2023",
            key: "date",
            render: (_, data) => {
                return data.date[7] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },
        {
            title: "02/07/2023",
            key: "date",
            render: (_, data) => {
                return data.date[8] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },
        {
            title: "03/07/2023",
            key: "date",
            render: (_, data) => {
                return data.date[9] === 'A' ?
                    <span
                        style={{ color: "red" }}>
                        A
                    </span> :
                    <span
                        style={{ color: "#50C878" }}>
                        P
                    </span>;
            },
            responsive: ["lg"],
        },

        {
            title: "Total",
            key: "name",
            fixed: 'right',
            render: (_, data) => {
                let presentCount = 0
                let size = data.date.length
                for (let i = 0; i < size; i++) {
                    if (data.date[i] === 'P')
                        presentCount++
                }
                let totalPercentage = (presentCount / size) * 100
                totalPercentage += '%'
                return (totalPercentage.substr(0, 2));
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
                                label: <Link to={`/employees/attendance/${data._id}`}>Reset</Link>,
                            },

                            {
                                key: 2,
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
            name: "Temp 1",
            date: ['P', 'P', 'A', 'P', 'A', 'A', 'P'],

        },
        {
            _id: 2,
            name: "Temp 2",
            date: ['P', 'P', 'P', 'A', 'P', 'A', 'P'],

        },
        {
            _id: 3,
            name: "Temp 3",
            date: ['A', 'A', 'P', 'P', 'P', 'A', 'P',],

        },
        {
            _id: 4,
            name: "Temp 4",
            date: ['P', 'P', 'A', 'P', 'P', 'P', 'P'],

        },


    ];
    return (
        <Card
            title="Attendance"
            extra={
                <Link to="/employees">
                    <Button type="primary">Back</Button>
                </Link>
            }

        >

            <div style={{ overflowX: "hidden" }}>

                <Table
                    style={{ maxWidth: 1200 }}
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: true }}
                // pagination={true}
                />
            </div>

        </Card>
    );
};

export default EmployeeAttendance;
