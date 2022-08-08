import { Notification } from "./Notifications";

interface Props {
    notification: Notification;
    observer?: (node: HTMLLIElement) => void;
}

export const NotificationItem = ({ notification, observer }: Props) => {
    const { createdAt, message } = notification;
    return (
        <li ref={observer || null} className="notifications__item">
            <p className="notifications__text">{message}</p>
            <time className="notifications__date">{createdAt.toLocaleString()}</time>
        </li>
    );
}; 