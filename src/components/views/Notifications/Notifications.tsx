import { StudentProfileSection } from "../../common/StudentProfileSection/StudentProfileSection";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useSearch } from "../../../hooks/useSearch";
import { NotificationItem } from "./NotificationItem";
import { NOTIFICATIONS_LIMIT } from "../../../utils/dataLimits";

export interface Notification {
    id: string;
    message: string;
    createdAt: Date;
    user: string;
}

export const Notifications = () => {

    const { amount, data, hasMore, page, loading, setPage } = useSearch<Notification>('notifications', NOTIFICATIONS_LIMIT);

    const { lastDataElementRef } = useInfiniteScroll(amount, hasMore, loading, page, NOTIFICATIONS_LIMIT, setPage);

    const notificationsList = () => {
        return data.map((n, i) => <NotificationItem key={n.id} notification={n} observer={(i + 1) % NOTIFICATIONS_LIMIT === 0 ? lastDataElementRef : undefined} />);
    };

    return (
        <div className="notifications">
            <StudentProfileSection title="Powiadomienia">
                <ul className="notifications__list">
                    {notificationsList()}
                    {amount === 0 && <span>Brak powiadomień</span>}
                    {loading && <span>Trwa ładowanie...</span>}
                </ul>
            </StudentProfileSection>
        </div>
    );
};