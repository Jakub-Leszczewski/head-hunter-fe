import { ChangeEmailForm } from "../../common/ChangeEmailForm/ChangeEmailForm";
import { ChangePasswordForm } from "../../common/ChangePasswordForm/ChangePasswordForm";
import { StudentProfileSection } from "../../common/StudentProfileSection/StudentProfileSection";
import { ProfileEditForm } from "./ProfileEditForm";

export const StudentCVEdit = () => {
    return (
        <div className="profile-edit">
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