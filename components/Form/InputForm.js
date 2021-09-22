import { useForm } from "react-hook-form";

export default function InputForm({
  submitFunction,
  dataFields,
  defaultData = {},
}) {
  const { register, handleSubmit, setValue } = useForm();
  // // Submit your data into Redux store
  const onSubmit = (data) => {
    // props.updateAction(data)
    for (let field of dataFields) {
      if (field.type === "number") {
        data[field.name] = parseInt(data[field.name]);
      }
    }
    submitFunction(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
      {/* <input {...register("username", { required: true })} /> */}
      {dataFields.map((field, index) => {
        if (field.enums) {
          return (
            <div key={index}>
              <label htmlFor={field.name}>{field.name}</label>
              <select
                {...register(field.name, { required: !!field.required })}
                className="w-full"
                multiple={!!field.multiple}
              >
                <option value disable selected>Not selected</option>
                {field.enums.map((enumValue, idx) => {
                  return (
                    <option
                      selected={
                        enumValue === defaultData[field.name]
                          ? "selected"
                          : null
                      }
                      key={idx}
                      value={
                        typeof enumValue === "string"
                          ? enumValue
                          : enumValue.id
                          ? enumValue.id
                          : enumValue.name
                      }
                    >
                      {typeof enumValue === "string"
                        ? enumValue
                        : enumValue.name}
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
