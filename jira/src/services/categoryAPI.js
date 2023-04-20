import fetcher from "./fetcher";

const categoryAPI = {
    getProjectCategory: async () => {
        return await fetcher.get("ProjectCategory");
    },
}

export default categoryAPI;