import fetcher from "./fetcher";

const authAPI = {
    signin: (values)=>{
        return fetcher.post('Users/signin', values);
    }
}

export default authAPI;