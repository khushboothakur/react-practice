import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();  // ✅ loader se data le lo
    // const [data, setData] = useState(null);  // ✅ state define karo

    // useEffect(() => {
    //     fetch("https://api.github.com/users/khushboothakur")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);  // ✅ ab setData kaam karega
    //         });
    // }, []);

    return (
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">
            Github followers: {data?.followers}  
            <img src={data?.avatar_url} alt="Avatar" />
        </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/khushboothakur")
    return response.json();

}