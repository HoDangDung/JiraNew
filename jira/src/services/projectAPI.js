import fetcher from "./fetcher";

const projectAPI = {
    getAllProject: async () => {
        const { data } = await fetcher.get("Project/getAllProject");
        return data.content;
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
    }
}

export default projectAPI;