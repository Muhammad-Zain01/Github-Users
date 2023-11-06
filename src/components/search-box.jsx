import React, { useState } from "react"
import { Input, Space, Button } from 'antd'
import { useGithub } from "../hooks/useGithub"
const SearchBox = () => {
    const [value, setValue] = useState("")
    const { SetValue } = useGithub()
    const setQuery = () => SetValue("SET_QUERY", value)
    return (
        <div style={{ display: 'flex', 'justifyContent': 'center', marginBottom: 40, marginTop: 20 }}>
            <Space.Compact style={{ width: '50%' }}>
                <Input size="large" placeholder="Search..." onKeyDown={(e) => {e.key === 'Enter' && setQuery()}} onChange={(e) => setValue(e.target.value)} />
                <Button size="large" onClick={setQuery} type="primary">Search</Button>
            </Space.Compact>
        </div>
    )
}

export default SearchBox;