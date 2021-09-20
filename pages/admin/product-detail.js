import { useState, useEffect } from "react";
import InputForm from "../../components/Form/InputForm";
import productApi from "@api/productApi";
import axiosClient from "@app/AxiosClient";

const dataFields = [
  {
    name: "name",
    type: "text",
    required: true,
  },
  {
    name: "price",
    type: "number",
    required: true,
  },
  {
    name: "salePrice",
    type: "number",
    required: true,
  },
  {
    name: "snippet",
    type: "text",
    required: true,
  },
  {
    name: "howToCook",
    type: "text",
  },
  {
    name: "description",
    type: "text",
    required: true,
  },
  {
    name: "snippet",
    type: "text",
    required: true,
  },
  {
    name: "howToCook",
    type: "text",
  },
  {
    name: "rating",
    type: "number",
  },
  {
    name: "sku",
    type: "text",
    required: true,
  },
  {
    name: "freshNess",
    type: "text",
    enums: ["fresh", "expired"],
  },
  {
    name: "farm",
    type: "text",
    required: true,
  },
  {
    name: "origin",
    type: "text",
    required: true,
  },
  {
    name: "stock",
    type: "text",
    enums: ["inStock", "outOfStock"],
  },
  {
    name: "quantity",
    type: "number",
  },
  {
    name: "image",
    type: "text",
  },
  {
    name: "category",
    type: "text",
    enums: [],
  },
];
export default function ProductDetail({ id }) {
  const [fields, setFields] = useState(dataFields);
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState({});

  useEffect(() => {
    let arr = [...fields];
    axiosClient.get("/api/category").then((result) => {
      for (let item of arr) {
        if (item.name === "category") {
          item.enums = result.data.map((e) => {
            return { name: e.name, id: e._id };
          });
        }
      }
      setFields(arr);
    });
  }, []);

  useEffect(() => {
    if (id) {
      productApi.getOneProduct(id).then((res) => {
        setDefaultData(res);
      });
    }
  }, [id]);

  function submit(data) {
    productApi
      .postOneProduct(data)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div className="p-10">
      <div className="bg-white p-10">
        <div>
          {id ? (
            <span className="text-xl font-bold">Product details</span>
          ) : (
            <span className="text-xl font-bold">Add new product</span>
          )}
        </div>
        <InputForm
          dataFields={dataFields}
          submitFunction={submit}
          defaultData={defaultData}
        />
      </div>
    </div>
  );
  // return null
}
export async function getServerSideProps(context) {
  // const res = await fetch(
  //   `https://5fae34c963e40a0016d896b2.mockapi.io/products/` + context.query.id
  // );
  // const data = await res.json();
  return {
    props: {
      id: context.query.id != null ? context.query.id : null,
    }, // will be passed to the page component as props
  };
}
