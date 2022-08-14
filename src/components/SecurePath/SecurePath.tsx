import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { NotFound } from "../../views/NotFound/NotFound";
import { OnlyUserResponse, UserRole } from "types";

interface Props {
    view: JSX.Element;
    owner?: boolean;
    roles?: UserRole[];
}

export const SecurePath = ({ owner, roles, view }: Props) => {

    const authorizedRoles = roles || [UserRole.Admin, UserRole.Hr, UserRole.Student];

    const { id, role } = useUser() as OnlyUserResponse;
    const { studentId } = useParams();

    if (authorizedRoles.includes(role)) {
        if (role === UserRole.Student) {
            if (owner) return studentId === id ? view : <NotFound />;
        }
        return view;
    }

    return <NotFound />;
};