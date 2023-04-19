import fetcher from "./fetcher";

const categoryAPI = {
    getProjectCategory: async () => {
        const { data } = await fetcher.get("ProjectCategory");
        return data.content;
    },
}

export default categoryAPI;