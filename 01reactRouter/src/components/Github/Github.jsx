import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [githubData, setgithubData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/TrooperDg")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setgithubData(data);
  //       console.log(data);
  //       console.log(data.avatar_url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const githubData = useLoaderData();

  return (
    <div className="text-center m-4 bg-slate-600 text-amber-50 text-4xl py-5">
      Github Followers: {githubData.followers}
      {/* <img width={"80px"} src={githubData.avatar_url} alt="" /> */}
    </div>
  );
}

export default Github;

export async function githubDataLoader() {
  const res = await fetch("https://api.github.com/users/TrooperDg");
  // const data = await res.json();
  // console.log(data);

  return res.json();
}
