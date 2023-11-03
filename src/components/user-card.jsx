import { Card, Avatar, Typography, Modal, Skeleton, Row, Col, Statistic, Button, Dropdown } from "antd"
import { useState } from "react";
import { get } from "../common/API";
const UserCard = ({ value }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [modalData, setModalData] = useState(false)
    const getUserData = async () => {
        if (value != undefined) {
            const detailURL = value?.url
            const details = await get(detailURL);
            console.log(details);
            setModalData(details.data)
        }
    }
    const handleUserClick = async () => {
        setLoading(true)
        setModalOpen(true)
        await getUserData();
        setLoading(false)
    }
    return (
        <div className="user-card">
            <Card hoverable onClick={handleUserClick}>
                <div className="avatar-container">
                    <Avatar style={{ position: "absolute", top: 30 }} size={84} src={value?.avatar_url} />
                </div>
                <div className="detail-container">
                    <Typography.Text style={{ fontSize: 15, color: '#adadad' }}>@{value?.login}</Typography.Text>
                </div>
            </Card>
            <Modal title={`@${value?.login}`} width={600} open={isModalOpen} onCancel={() => setModalOpen(false)} centered footer>
                <Skeleton loading={loading}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar size={120} src={value?.avatar_url} />
                        <Typography.Text style={{ fontSize: 14, padding: 10, textAlign: 'center' }}>{modalData?.bio}</Typography.Text>
                    </div>
                    <div>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Statistic title="Followers" value={modalData?.followers} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Following" value={modalData?.following} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Public Repositories" value={modalData?.public_repos} />
                            </Col>
                        </Row>
                    </div>
                </Skeleton>
            </Modal>
        </div>
    )
}
export default UserCard;