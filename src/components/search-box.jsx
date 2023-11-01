import React from "react"
import { Input } from 'antd'
const SearchBox = () => {
    return (
        <>
         <Input.Search placeholder="Search..." enterButton="Search" size="large" />
        </>
    )
}

export default SearchBox;