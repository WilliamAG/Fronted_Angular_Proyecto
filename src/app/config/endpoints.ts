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

}