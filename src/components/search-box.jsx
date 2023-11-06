import React, { useState } from "react"
import { Input, Space, Button } from 'antd'
const SearchBox = ({ setQuery }) => {
    const [value, setValue] = useState("")
    return (
        <div style={{display: 'flex', 'justifyContent':'center', marginBottom: 40, marginTop: 20}}>
            <Space.Compact style={{ width: '50%' }}>
                <Input size="large" placeholder="Search..." onKeyDown={(e) => e.key === 'Enter' && setQuery(value)} onChange={(e) => setValue(e.target.value)} />
                <Button size="large" onClick={() => setQuery(value)} type="primary">Search</Button>
            </Space.Compact>
        </div>
    )
}

export default SearchBox;