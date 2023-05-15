import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import faker from "@faker-js/faker";
import Autocomplete from "@mui/material/Autocomplete";
import projectAPI from "../../../services/projectAPI";
import taskAPI from "../../../services/taskAPI";
import statusAPI from "../../../services/statusAPI";
import priorityAPI from "../../../services/priorityAPI";
import userAPI from "../../../services/userAPI";

// "taskName": "string",
// "description": "string",
// "statusId": "string",
// "originalEstimate": 0,
// "timeTrackingSpent": 0,
// "timeTrackingRemaining": 0,
// "projectId": 0,
// "typeId": 0,
// "priorityId": 0

const CreateTask = () => {
  const [projects, setProject] = useState([]);
  const [status, setStatus] = useState([]);
  const [priorities, setPriority] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);
  const [users, setUser] = useState([]);
  const editorRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const project = await projectAPI.getAllProject();
        setProject(project);
        const status = await statusAPI.getAll();
        setStatus(status);
        const priority = await priorityAPI.getAll();
        setPriority(priority);
        const taskType = await taskAPI.getAllTask();
        setTaskTypes(taskType);
        const user = await userAPI.getUser();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { register, handleSubmit } = useForm({
    data: {
      taskId: 0,
      userId: 0,
    },
    defaultValues: {
      listUserAssign: [],
      taskName: "",
      description: "",
      statusId: "",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 0,
      typeId: 0,
      priorityId: 0,
    },
  });

  const onSubmit = async (data) => {
    try {
      const content = editorRef.current.getContent();
      console.log({ ...data, description: content });
      // await projectAPI.createTask(data);
      alert("Create task successfully");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const assigns = Array.from(
    users.map((user) => ({
      name: user.name,
      userId: user.userId,
    }))
  );

  // const InviteModal = () => {
  //   const [selectUsers, setSelectUsers] = useState([]);

  // };
  const handleSelectUsers = (_, value, reason) => {
    console.log(value, reason);
  };

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
          <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h3 className="modal-title">Create Task</h3>
            </div>
            <hr />
            <div className="modal-body">
              <div className="form-group">
                <label>Project</label>
                <select className="form-control" {...register("projectId")}>
                  {projects.map((item) => (
                    <option key={item.id}>{item.projectName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Task name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="helpId"
                  {...register("taskName")}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select className="form-control" {...register("statusId")}>
                  {status.map((item) => (
                    <option key={item.statusId}>{item.statusName}</option>
                  ))}
                </select>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Priority</label>
                    <select
                      className="form-control"
                      {...register("priorityId")}
                    >
                      {priorities.map((item) => (
                        <option key={item.priorityId}>{item.priority}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Assignees</label>
                    <Autocomplete
                      multiple
                      options={users}
                      getOptionLabel={(option) => (option.name)}
                      renderInput={(params) => (
                        <TextField
                          key={params.userId}
                          {...params}
                          label="Name"
                        />
                      )}
                      {...register("userId")}
                    />
                  </div>
                  <div className="form-group">
                    <label>Original Estimate</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("originalEstimate")}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Task type</label>
                    <select className="form-control" {...register("typeId")}>
                      {taskTypes.map((item) => (
                        <option key={item.id}>{item.taskType}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group py-2">
                    <label>Time tracking</label>
                    <div className="form-check">
                      <label className="form-check-label"></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="fw-bold">Oh logged</label>
                        <br /> Time spent
                        <input
                          type="number"
                          className="form-control"
                          aria-describedby="helpId"
                          {...register("timeTrackingSpent")}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="fw-bold">Oh remaining</label>
                        <br /> Time remaining
                        <input
                          type="number"
                          className="form-control"
                          aria-describedby="helpId"
                          {...register("timeTrackingRemaining")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
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
            <div className="modal-footer pt-3">
              <button className="btn btn-secondary">Cancel</button>
              <button className="btn btn-primary ms-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
