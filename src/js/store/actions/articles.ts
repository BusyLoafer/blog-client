import { SET_ARTICLES } from "../../libs/constans";
import { Article } from "../../libs/types";

export const setArticles = (value: Article[]) => ({type: SET_ARTICLES,	value});