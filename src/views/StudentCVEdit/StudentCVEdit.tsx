import { ChangeEmailForm } from "../../components/form/ChangeEmailForm/ChangeEmailForm";
import { ChangePasswordForm } from "../../components/form/ChangePasswordForm/ChangePasswordForm";
import { StudentProfileSection } from "../../components/common/StudentProfileSection/StudentProfileSection";
import { ProfileEditForm } from "./ProfileEditForm";
import { GoBack } from "../../components/GoBack/GoBack";

export const StudentCVEdit = () => {
    return (
        <div className="profile-edit">
            <GoBack />
            <StudentProfileSection title="Zmiana hasła">
                <ChangePasswordForm />
            </StudentProfileSection>
            <StudentProfileSection title="Zmiana e-maila">
                <ChangeEmailForm />
            </StudentProfileSection>
            <StudentProfileSection title="Edycja profilu">
                <ProfileEditForm />
            </StudentProfileSection>
        </div>
    );
};
