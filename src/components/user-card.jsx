import { Card, Avatar, Typography } from "antd"
import UserModal from "./user-modal";
import { useState } from "react";
import { get } from "../common/API";
const UserCard = ({ value }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [modalData, setModalData] = useState(false)

    const handleModalData = async (value) => {
        setLoading(true)
        if (value != undefined) {
            const detailURL = value?.url
            const details = await get(detailURL);
            setModalData({ ...details.data, login: value?.login, avatar_url: value?.avatar_url })
        }
        setLoading(false)
    }
    const getUserData = async () => {
        await handleModalData(value);
        setModalOpen(true)
    }

    return (
        <div className="user-card">
            <Card hoverable onClick={() => getUserData()}>
                <div className="avatar-container">
                    <Avatar style={{ position: "absolute", top: 30 }} size={84} src={value?.avatar_url} />
                </div>
                <div className="detail-container">
                    <Typography.Text style={{ fontSize: 15, color: '#adadad' }}>@{value?.login}</Typography.Text>
                </div>
            </Card>
            
            <UserModal isOpen={isModalOpen} setOpen={setModalOpen} modalData={modalData} setModal={handleModalData} loading={loading} value={value} />
        </div>
    )
}
export default UserCard;