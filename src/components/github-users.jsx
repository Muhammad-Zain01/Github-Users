import React from "react";
import UserCard from "./user-card";
import { Empty, Skeleton } from "antd";
const GithubUsers = ({ data, loading }) => {
    return (
        <div className="github-users">
            <Skeleton loading={loading} >
                {
                    data.length
                        ?
                        data.map((item, index) => <UserCard key={index} value={item} />)
                        :
                        <div style={{display: 'flex',margin: '100px 0px', justifyContent: 'center', width: '100%'}}>
                            <Empty />
                        </div>
                }
            </Skeleton>
        </div>
    )
}

export default GithubUsers;