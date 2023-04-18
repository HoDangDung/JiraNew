import fetcher from "./fetcher";

const taskAPI = {
    getAllTask: () => {
        return fetcher.get("TaskType/getAll");
    }
}

export default taskAPI;