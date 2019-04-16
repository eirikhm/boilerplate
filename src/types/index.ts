export type RouteContext<T = object> = {
    params: T
    path: string
}
export type ThreadParams = {
    slug: string
}

export type Post = {
    id:number
    title:string
    body:string;
}

export enum Page {
    HOME = 'HOME',
}