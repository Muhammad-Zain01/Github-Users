import { notification } from "antd";
import { useGithub } from "./useGithub";
import { Errors } from "../common/error";
const useNotifcation = () => {
    const { error } = useGithub()
    const [api, contextHolder] = notification.useNotification();
    if (error != null) {
        api.error({
            message: error.message,
            description: Errors[error.message],
            placement: 'bottomRight',
        });
    }
    return [contextHolder]
}
export default useNotifcation;