import { Card, Avatar, Typography } from "antd"
const UserCard = () => {
    return (
        <div className="user-card">
            <Card>
                <div className="avatar-container">
                    <Avatar  style={{position: "absolute", top: 30}} size={84} src="https://avatars.githubusercontent.com/u/114659734?v=4" />
                </div>
                <div className="detail-container">
                    <Typography.Text style={{ fontSize: 18 }}>Muhammad Zain</Typography.Text>
                    <Typography.Text style={{ fontSize: 15, color: '#adadad' }}>@zmemon</Typography.Text>
                </div>
            </Card>
        </div>
    )
}
export default UserCard;