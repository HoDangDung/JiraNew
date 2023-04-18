import React from "react";
import { useForm } from "react-hook-form";

const AddProject = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      categoryId: "",
      alias: "",
    },
  });
  return (
    <div>
      <h1>Add Project</h1>
    </div>
  );
};

export default AddProject;
