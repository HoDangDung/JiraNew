import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const UpdateProject = ({ isOpen, onClose }) => {
  const editorRef = useRef(null);

  if (!isOpen) {
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
          <div className="modal-content">
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
                  <h5 htmlFor>Project Id</h5>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder
                  />
                </div>
                <div className="form-group col-sm-4">
                  <h5 htmlFor>Project Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder
                  />
                </div>
                <div className="form-group col-sm-4">
                  <h5 htmlFor>Project Category</h5>
                  <select className="form-control" name>
                    <option>Dự án web</option>
                    <option>Dự án web</option>
                    <option>Dự án web</option>
                  </select>
                </div>
                <div className="form-group py-2">
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
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default UpdateProject;
