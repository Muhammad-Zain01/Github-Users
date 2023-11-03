import React, { useState } from "react"
import { Input, Space, Button } from 'antd'
const SearchBox = ({ setQuery }) => {
    const [value, setValue] = useState("")
    return (
        <>
            <Space.Compact style={{ width: '100%' }}>
                <Input placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
                <Button onClick={() => setQuery(value)} type="primary">Submit</Button>
            </Space.Compact>
        </>
    )
}

export default SearchBox;