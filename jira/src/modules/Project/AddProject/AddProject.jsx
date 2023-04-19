import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

const AddProject = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      categoryId: "",
      alias: "",
    },
  });
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="py-4">
      <h1>Create Project</h1>
      <div className="form-group">
        <label htmlFor>Name</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div className="form-group">
        <label htmlFor>Description</label>
        <div className="form-control">
          <Editor
            apiKey="2q64dgg6fecbk2vxho74u30vs8krm3j0jemmovo1gsdq90og"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
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
        <select className="form-control" name>
          <option>Dự án web</option>
          <option>Dự án web</option>
          <option>Dự án web</option>
        </select>
      </div>
      <div className="form-group pt-3">
        <button className="btn btn-outline-primary">Create project</button>
      </div>
    </div>
  );
};

export default AddProject;
