import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()
  return (
    <div className="text-5xl text-center bg-gray-700 text-white p-5 font-serif">
        <img src={data.avatar_url} alt="Github profile" width={300} />
      Github bio: {data.bio}{" "}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/sukansh7')
    return response.json()
}