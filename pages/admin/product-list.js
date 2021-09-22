import productApi from "@api/productApi";
import { useEffectOnce } from "react-use";
import Swal from "sweetalert2";
import { Table, Tag, Space } from "antd";
import { useState } from "react";
import Link from 'next/link'

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffectOnce(() => {
    productApi
      .getAllProducts()
      .then((res) => {
        setData(res.data);
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
        render: (text, record) => {
          return (
            <div>
              <img src={record.image} className="w-20 h-20" />
            </div>
          );
        },
      },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
        title: "Freshness",
        dataIndex: "freshNess",
        key: "freshNess",
      },
      {
        title: "Farm",
        dataIndex: "farm",
        key: "farm",
      },
      {
        title: "Origin",
        dataIndex: "origin",
        key: "origin",
      },
      {
          title: 'Quantity',
          dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Link href={`/admin/product-detail?id=`+ record._id}>Edit</Link>
            <a>Delete</a>
          </Space>
        ),
      },
  ];
  return (
    <div className="p-10">
      <div className="bg-white p-10">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}
