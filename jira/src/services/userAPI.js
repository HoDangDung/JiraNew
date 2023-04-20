import fetcher from "./fetcher";

const userAPI = {
    getUser: () => {
        return fetcher.get("Users/getUser");
    }
}

export default userAPI;