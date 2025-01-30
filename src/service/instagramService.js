import axios from "axios";
const fetchInstagramProfile = async (username) => {
    try{
        const response = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
        const data = response.datagraphql.user;
        return data;
    }catch(err){
        console.log(err)
    }
}

export {fetchInstagramProfile}