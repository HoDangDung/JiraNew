import fetcher from "./fetcher";

const projectAPI = {
    getAllProject: async () => {
        return await fetcher.get("Project/getAllProject");
    },

    createProject: (project) => {
        return fetcher.post("Project/createProjectAuthorize", project);
    },
    updateProject: (projectId) => {
        return fetcher.put("Project/updateProject",
            {
                params: {
                    projectId,
                }
            });
    },
    
    createTask: (task) => {
        return fetcher.post("Project/assignUserTask", task);
    },

    createAssign: (assign) => {
        return fetcher.post("Project/assignUserProject",assign);
    }
}

export default projectAPI;