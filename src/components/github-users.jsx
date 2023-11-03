import React from "react";
import UserCard from "./user-card";
import { Skeleton } from "antd";
const GithubUsers = ({ data, loading }) => {
    console.log(data.length);
    return (
        <div className="github-users">
            <Skeleton loading={loading} >
                {
                    data && data.map((item, index) => <UserCard key={index} value={item} />)
                }
            </Skeleton>
        </div>
    )
}

export default GithubUsers;