import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import categoryAPI from "../../../services/categoryAPI";
import projectAPI from "../../../services/projectAPI";

const UpdateProject = ({ onClose, value, member }) => {
  const [category, setCategory] = useState([]);
  const editorRef = useRef(null);
  const { id, creator } = member;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 0,
      projectName: "",
      creator: 0,
      description: "",
      categoryId: "",
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

  const onSubmit = async (data) => {
    try {
      const content = editorRef.current.getContent();
      console.log({
        ...data,
        id: id,
        creator: creator.id,
        description: content,
      });
      await projectAPI.updateProject({
        ...data,
        id: id,
        creator: creator.id,
        description: content,
      });
      alert("Update Project successfully");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const handleChange = (evt)=>{
    const {value, name} = evt.target;
    
  }

  console.log(creator);
  console.log(member);
  if (!value) {
    return null;
  }
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="form-group col-sm-4">
                  <h5>Project Id</h5>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    value={member.id}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <h5>Project Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    value={member.projectName}
                    {...register("projectName")}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <h5>Project Category</h5>
                  <select className="form-control" {...register("categoryId")}>
                    <option>{member.categoryName}</option>
                    {category.map((item) => (
                      <option key={item.id}>{item.projectCategoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group py-2">
                  <label>Description</label>
                  <div className="form-control">
                    <Editor
                      apiKey="2q64dgg6fecbk2vxho74u30vs8krm3j0jemmovo1gsdq90og"
                      onInit={(evt, editor) => (editorRef.current = editor)}
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
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default UpdateProject;
