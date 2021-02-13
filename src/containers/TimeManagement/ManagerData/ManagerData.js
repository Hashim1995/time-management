import { React, Component } from "react";

import { Table, Tag, Space } from "antd";

console.log(JSON.parse(localStorage.getItem("user")));

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text) => (
      <Space size="middle">
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    // name: JSON.parse(localStorage.getItem("user")).username,
    name: "hidayat",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

class ManagerData extends Component {
  state = {};
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default ManagerData;
