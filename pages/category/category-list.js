import { useEffectOnce } from "react-use";
import Swal from "sweetalert2";
import { Table, Tag, Space } from "antd";
import { useState } from "react";
import Link from "next/link";
import categoryApi from "@api/categoryApi";
import AddNewCategory from "@components/Modal/AddNewCategory";

export default function CategoryList() {
  const [data, setData] = useState([]);
  useEffectOnce(() => {
    categoryApi
      .getAll()
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 2000,
        });
      });
    return () => {
      console.log("Running clean-up of effect on unmount");
    };
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space key={text} size="middle">
          <Link href={`/admin/product-detail?id=` + record._id}>Edit</Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="p-10">
      <div className="bg-white p-10">
        <div className="flex items-end justify-end w-full pb-5">
          <AddNewCategory />
        </div>
        <Table rowKey="id" dataSource={data} columns={columns} />
      </div>
    </div>
  );
}
