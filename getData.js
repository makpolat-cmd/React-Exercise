import axios from "axios";

const getData = async (Number) => {

    const {data: user} = await axios (`https://jsonplaceholder.typicode.com/users/${Number}`);
    const {data: post} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${Number}`);

    console.log(user);
    console.log(post);
}

export default getData;