import { Modal, Avatar, List } from "antd"
const FollowerModal = ({ title, open, setModal, data, setFollower }) => {
    const handleFollowerClick = (item) => {
        setModal(false);
        setFollower(item)
    }

    return (
        <>
            <Modal
                title={`Followers of ${title}`}
                width={700}
                styles={{
                    body: {
                        height: 500,
                        overflow: 'auto'
                    }
                }}
                open={open}
                onCancel={() => setModal(false)}
                centered
                footer
            >
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item?.avatar_url} />
                                }
                                title={<a onClick={() => handleFollowerClick(item)}>{item?.login}</a>}
                            />
                        </List.Item>
                    )}
                />
            </Modal >
        </>
    )
}
export default FollowerModal;