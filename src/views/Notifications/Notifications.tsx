import { NotificationItem } from "./NotificationItem";
import { useSearch } from '../../hooks/useSearch'
import { NOTIFICATIONS_LIMIT } from '../../utils/dataLimits'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { StudentProfileSection } from '../../components/common/StudentProfileSection/StudentProfileSection'

export interface Notification {
    id: string;
    message: string;
    createdAt: Date;
    user: string;
}

export const Notifications = () => {

    const { amount, data, hasMore, page, loading, setPage } = useSearch<Notification>('notifications');

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
