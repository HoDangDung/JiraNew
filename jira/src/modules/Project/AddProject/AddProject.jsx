import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import categoryAPI from "../../../services/categoryAPI";
import projectAPI from "../../../services/projectAPI";

const AddProject = () => {
  const [category, setCategory] = useState([]);
  const [contents, setContent] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      categoryId: "",
      alias: "",
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await categoryAPI.getProjectCategory();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const editorRef = useRef(null);
  if (editorRef.current) {
    const content = editorRef.current.getContent();
    setContent(content);
    console.log(contents);
  }

  const onSubmit = async (data) => {
    try {
      if (data) {
        await projectAPI.createProject(data);
        alert("Add Project successfully");
      }
    } catch (error) {
      alert("Add Project Fail");
      console.log(error);
    }
  };

  return (
    <div className="py-5">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            {...register("projectName")}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <div className="form-control">
            <Editor
              apiKey="2q64dgg6fecbk2vxho74u30vs8krm3j0jemmovo1gsdq90og"
              onInit={(evt, editor) => {
                editorRef.current = editor;
              }}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label></label>
          <select className="form-control" {...register("categoryId")}>
            {category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.projectCategoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group pt-3">
          <button className="btn btn-outline-primary">Create project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
