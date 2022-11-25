export interface Album {
    albumId?: number;
    name?: string;
    createDate: Date;
    ownerUserId?: number;
}

export interface dataAlbum {
    ok: boolean;
    msg: string;
}