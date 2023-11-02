import React from "react";
import UserCard from "./user-card";
import { get } from "../common/API";
const GithubUsers = ({ data }) => {
    let data2;
    const getUserData = async (url) => {
        const response = await get(url)
        if (response.status == 200) {
            return response;
        }
        return {}
    }
    if (Object.keys(data).length) {
        data2 = data.map(async (git) => {
            return getUserData(git.url)
        })
    }
    return (
        <div className="github-users">
            <UserCard />
        </div>
    )
}

export default GithubUsers;