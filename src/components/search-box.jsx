import React, { useState } from "react"
import { Input, Space, Button } from 'antd'
const SearchBox = ({ setQuery }) => {
    const [value, setValue] = useState("")
    return (
        <>
            <Space.Compact style={{ width: '100%' }}>
                <Input placeholder="Search..." onKeyDown={(e) => e.key === 'Enter' && setQuery(value)} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={() => setQuery(value)} type="primary">Search</Button>
            </Space.Compact>
        </>
    )
}

export default SearchBox;