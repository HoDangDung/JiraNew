import fetcher from "./fetcher";

const statusAPI = {
    getAll: () => {
        return fetcher.get("Status/getAll");
    }
}

export default statusAPI;