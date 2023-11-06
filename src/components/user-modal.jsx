import { Card, Avatar, Typography, Modal, Skeleton, Row, Col, Statistic } from "antd"
import { useState } from "react";
import { get } from "../common/API";
import FollowerModal from "./follower-modal";
import RepoModal from "./repo-model";
const UserModal = ({ isOpen, setOpen, loading, value, modalData, setModal }) => {
    const [followerModal, setfollowerModal] = useState();
    const [repoModal, setrepoModal] = useState();
    const [data, setData] = useState()

    const onOpenFollower = async () => {
        if (value != undefined) {
            const followerURL = value?.followers_url
            const followers = await get(followerURL);
            setData(followers?.data)
            setfollowerModal(true)
        }
    }
    const onOpenRepo =  async () => {
        if (value != undefined) {
            const repoURL = value?.repos_url
            const repos = await get(repoURL);
            setData(repos?.data)
            setrepoModal(true)
        }
    }

    return (
        <>
            {
                Object.keys(modalData).length > 0 &&
                <Modal title={`@${modalData?.login}`} width={700} open={isOpen} onCancel={() => setOpen(false)} centered footer>
                    <Skeleton loading={loading}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar size={120} src={modalData?.avatar_url} />
                            <Typography.Text style={{ fontSize: 14, padding: 10, textAlign: 'center' }}>{modalData?.bio}</Typography.Text>
                        </div>
                        <div>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card bordered={false} hoverable onClick={onOpenFollower} >
                                        <Statistic title="Followers" value={modalData?.followers} />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card bordered={false}>
                                        <Statistic title="Following" value={modalData?.following} />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card bordered={false} hoverable onClick={onOpenRepo}>
                                        <Statistic title="Public Repositories" value={modalData?.public_repos} />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Skeleton>
                </Modal>
            }
            <FollowerModal data={data} title={`@${value?.login}`} open={followerModal} setModal={setfollowerModal} setModalOpen={setOpen} setFollower={setModal} />
            <RepoModal data={data} title={`@${value?.login}`} open={repoModal} setModal={setrepoModal} setModalOpen={setOpen} setFollower={setModal} />
        </>
    )
}

export default UserModal;