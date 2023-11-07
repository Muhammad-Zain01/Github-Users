import React from "react";
import UserCard from "./user-card";
import { Empty, Skeleton, Pagination } from "antd";
import { useGithub } from "../hooks/useGithub";
const GithubUsers = () => {
    const { data, loading, pages, SetValue, current_page } = useGithub()
    return (
        <div className="github-users">
            <Skeleton loading={loading} >
                {
                    data != undefined && data.length
                        ?
                        <>
                            {
                                data.map((item, index) => <UserCard key={index} value={item} />)
                            }
                            <div style={{display:'flex',justifyContent: 'center', width: '100%', marginTop: 40}}>
                                {pages > 0 && <Pagination defaultCurrent={current_page} total={pages} showSizeChanger={false} pageSize={100} onChange={(page) => SetValue('SET_PAGE_NUMBER', page)} />}
                            </div>
                        </>
                        :
                        <div style={{ display: 'flex', margin: '100px 0px', justifyContent: 'center', width: '100%' }}>
                            <Empty />
                        </div>
                }
            </Skeleton>
        </div>
    )
}

export default GithubUsers;