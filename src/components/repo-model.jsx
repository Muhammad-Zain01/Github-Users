import { Modal, Avatar, List, Typography } from "antd"
const RepoModal = ({ title, open, setModal, data, setFollower }) => {
    return (
        <>
            <Modal
                title={`Repositories of ${title}`}
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
                    renderItem={(item, index) => (
                        <List.Item>
                            <div>
                                {index + 1}. <Typography.Text style={{ fontSize: 16 }}>{item?.name}</Typography.Text>
                                <br />

                                {item.language &&
                                    <span style={{ fontSize: 12,borderRadius: '0.2rem', marginLeft: 15, color: '#7a7a7a', background: '#ababab7a', padding: '2px 8px' }}>
                                        {item.language}
                                    </span>
                                }
                            </div>
                        </List.Item>
                    )}
                />
            </Modal >
        </>
    )
}
export default RepoModal;