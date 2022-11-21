import { environment } from "src/environments/environment";

export const ENDPOINTS = {
    LOGIN : `${environment.server}/login`,
    REGISTER : `${environment.server}/register`,
    PLAN_SECTION: `${environment.server}/plan-selection`,
    ROOT: `${environment.server}/admin`,
    BINNACLE : `${environment.server}/admin/binnacle`,
    MAINTENANCE : `${environment.server}/admin/maintenance`,
    GALLERY : `${environment.server}/gallery`,
    CUSTOMER_ROOT : `${environment.server}/customer`,
    UPLOADS: `${environment.server}/uploads`,
    IMAGE: environment.image,
    DASHBOARD: {
        USERS: `${environment.server}/dashboard/TUser`,
        STORAGE: `${environment.server}/dashboard/UStorage`,
        IMAGES: `${environment.server}/dashboard/TImage`,
        DATE_REGISTER: `${environment.server}/dashboard/DRegister`,
        DATE_IMAGE: `${environment.server}/dashboard/DImage`,
    }
}