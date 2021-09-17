import { useForm } from "react-hook-form";

export default function InputForm({
  submitFunction,
  dataFields,
  defaultData = { },
}) {
  const { register, handleSubmit, setValue } = useForm();
  // // Submit your data into Redux store
  const onSubmit = (data) => {
    // props.updateAction(data)
    setData(data);
  };
  return (
    <form onSubmit={handleSubmit(submitFunction)} className="flex flex-col space-y-3">
      {/* <input {...register("username", { required: true })} /> */}
      {dataFields.map((field, index) => {
        if (field.enums) {
          return (
            <div key={index}>
              <label htmlFor={field.name}>{field.name}</label>
              <select
                {...register(field.name, { required: !!field.required })}
                className="w-full"
              >
                {field.enums.map((enumValue, idx) => {
                  return (
                    <option
                      selected={
                        enumValue === defaultData[field.name]
                          ? "selected"
                          : null
                      }
                      key={idx}
                      value={enumValue}
                    >
                      {enumValue}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex flex-col space-y-3">
              <label htmlFor={field.name}>{field.name}</label>
              <input
                defaultValue={defaultData[field.name]}
                {...register(field.name, { required: !!field.required })}
                type={field.type}
              />
            </div>
          );
        }
      })}
      <input type="submit" />
    </form>
  );
}
