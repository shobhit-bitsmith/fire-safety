import React, { useEffect, useState } from "react";
import { Button, Card, Descriptions } from "antd";
import { Link, useParams } from "react-router-dom";
import APICall from "../../services/apiservices";

const EmployeeDetails = () => {
  const params = useParams();


  const [empData, setEmpData] = useState({});
  const [bankName, setBankName] = useState("");
  const [bankAcc, setBankAcc] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");

  const getEmployee = async () => {
    const res = await APICall(`/employee/${params.empId}`, {}, 1);
    setEmpData(res.data);
    const bankLen = res.data.bankAccounts.length;
    console.log(res.data)
    if (bankLen > 0) {
      setBankName(res.data.bankAccounts[0].accountName);
      setBankAcc(res.data.bankAccounts[0].accountNumber);
      setBankIfsc(res.data.bankAccounts[0].ifscCode);
      setBankBranch(res.data.bankAccounts[0].branch);
    }


    console.log(res.data)
  }
  useEffect(() => {
    getEmployee();
  }, [])


  return (
    <Card
      title="Employee Details"
      extra={
        <Link to="/employees">
          <Button type="primary">Back</Button>
        </Link>
      }
    >
      <Descriptions layout="vertical">
        <Descriptions.Item label="Name">{empData?.user?.name}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {empData?.user?.address}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{empData?.user?.email}</Descriptions.Item>
        <Descriptions.Item label="Mobile">{empData?.user?.mobile}</Descriptions.Item>
        <Descriptions.Item label="Employee Code">
          {empData?.employeeCode}
        </Descriptions.Item>
        <Descriptions.Item label="Employee Designation">
          {empData?.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Salary">{empData?.salary}</Descriptions.Item>
        <Descriptions.Item label="Salary per day">
          {empData?.salaryPerDay}
        </Descriptions.Item>
        <Descriptions.Item label="Aadhaar Number">
          {empData?.user?.aadhaarId}
        </Descriptions.Item>
        <Descriptions.Item label="Date of birth">
          {empData?.user?.birthdate}
        </Descriptions.Item>
        <Descriptions.Item label="Date of Joining">
          {empData?.joiningDate}
        </Descriptions.Item>
        <Descriptions.Item label="Employee Qualification">
          {empData?.qualification}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Account Number">
          {bankAcc}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Account Name">
          {bankName}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Name">
          {bankBranch}
        </Descriptions.Item>
        <Descriptions.Item label="Bank IFSC Code">
          {bankIfsc}
        </Descriptions.Item>
      </Descriptions>

    </Card>
  );
};

export default EmployeeDetails;
