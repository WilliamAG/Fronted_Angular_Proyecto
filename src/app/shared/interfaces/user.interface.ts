export interface User {
    ok:    boolean;
    msg:   string;
    usr:   USR;
    token: string;
}

export interface USR {
    userId ?:        number;
    firstName?:     string;
    secondName?:    string;
    firstSurname?:  string;
    secondSurname?: string;
    userName?:      string;
    usedStorage?:   number;
    userTypeId?:    number;
    storagePlanId?: number;
    joinDate : Date;
    email ?: string;
    password ?: string;
}

export interface UserToken {
    idusuario: number,
    nombre: string,
    iat: number,
    exp: number
}

export interface UserType {
    userTypeId: number;
    name: string;
}
