import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreateTask = () => {
  const editorRef = useRef(null);

  return (
    <>
      <div
        className="py-5"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create Task</h3>
            </div>
            <hr />
            <div className="modal-body">
              <form className="form-group">
                <label htmlFor="">Project</label>
                <select className="form-control">
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </form>
              <div className="form-group">
                <label htmlFor="">Task name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Status</label>
                <select className="form-control">
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">Priority</label>
                    <select className="form-control">
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Assignees</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Original Estimate</label>
                    <input
                      type="number"
                      className="form-control"
                      aria-describedby="helpId"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">Task type</label>
                    <select className="form-control">
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div className="form-group py-2">
                    <label htmlFor="">Time tracking</label>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          defaultValue="checkedValue"
                          defaultChecked
                        />
                        Display value
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Oh logged</label>
                        <input
                          type="number"
                          className="form-control"
                          name=""
                          id=""
                          aria-describedby="helpId"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Oh remaining</label>
                        <input
                          type="number"
                          className="form-control"
                          name=""
                          id=""
                          aria-describedby="helpId"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Description</label>
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
            <div className="modal-footer pt-3">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="button" className="btn btn-primary ms-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
