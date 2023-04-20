import fetcher from "./fetcher";

const projectAPI = {
    getAllProject: async () => {
        return await fetcher.get("Project/getAllProject");
    },

    createProject: (project) => {
        return fetcher.post("Project/createProject", {
            params: { project },
        });
    },
    deleteProject: (projectId) => {
        return fetcher.delete("Project/deleteProject", {
            params: { projectId },
        });
    },
    updateProject: (projectId) => {
        return fetcher.put("Project/updateProject",
            {
                params: {
                    projectId,
                }
            });
    },
    createTask: () => {
        return fetcher.post("Project/assignUserTask");
    },

    createAssign: () => {
        return fetcher.post("Project/assignUserProject");
    }
}

export default projectAPI;