import fetcher from "./fetcher";

const priorityAPI = {
    getAll:()=>{
        return fetcher.get("Priority/getAll");
    }
}

export default priorityAPI;