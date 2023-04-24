import fetcher from "./fetcher";

const taskTypeAPI = {
    getAll: ()=>{
        return fetcher.get("TaskType/getAll");
    }
}

export default taskTypeAPI;