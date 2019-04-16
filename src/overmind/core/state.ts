import { Page, Post } from "../../types";

export type State = {
    page: Page
    posts:Post[]
}

const state: State = {
    page: null,
    posts:[],
};

export default state;
