import { Article, StoreAction } from "../../libs/types";

const articles = (state: Article[] = [], action: StoreAction) => action.type === 'SET_ARTICLES' ? action.value : state;

export default {articles}