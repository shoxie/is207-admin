import { useState, useEffect } from "react";
import InputForm from "../../components/Form/InputForm";

const dataFields = [
  {
    name: "name",
    type: "text",
    required: true
  },
  {
    name: "price",
    type: "number",
    required: true
  },
  {
    name: "salePrice",
    type: "number",
    required: true
  },
  {
    name: "description",
    type: "text",
    required: true
  },
  {
    name: "rating",
    type: "number",
  },
  {
    name: "sku",
    type: "text",
    required: true
  },
  {
    name: "freshNess",
    type: "text",
    enums: ["fresh", "expired"],
  },
  {
    name: 'farm',
    type: "text",
    required: true
  },
  {
    name: "origin",
    type: "text",
    required: true
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
    type: "text"
  }
];
export default function ProductDetail() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-10">
      <div className="bg-white p-10">
        <InputForm dataFields={dataFields} setData={setData} />
      </div>
    </div>
  );
  // return null
}
