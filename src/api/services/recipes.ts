import { api } from "api/index";

interface PaginatedData<T> {
  results: T[],
  offset: number,
  number: number,
  totalResults: number,
}
interface Recipe {
  id: number;
  image: string;
  title: string;
}

interface Ingredient {
  original: string;
}
interface DetailRecipe {
  title: string;
  summary: string;
  image: string;
  instructions: string;
  extendedIngredients: Ingredient[];
}

export const mapRecipes = ({ id, title, image }: Recipe): Recipe => ({
  id,
  title,
  image
});

export const getPopular = async (): Promise<Recipe[]> => {
  return (await api.get(`/random?/&number=10`)).data.recipes.map(mapRecipes);
};

export const getFavourites = async (id: number): Promise<Recipe> => {
  return (await api.get(`/${id}/information/`)).data;
};

export const getSalad = async (name: string, perPage: number, paginationOffset: number): Promise<PaginatedData<Recipe>> => {
  return (await api.get(`/complexSearch?/&type=${name}/&number=${perPage}&offset=${paginationOffset}`)).data;
}

export const getDessert = async (name: string, perPage: number, paginationOffset: number): Promise<PaginatedData<Recipe>> => {
  return (await api.get(`/complexSearch?/&type=${name}/&number=${perPage}&offset=${paginationOffset}`)).data;
}

export const getCategories = async (name: string, perPage: number, paginationOffset: number): Promise<PaginatedData<Recipe>> => {
  return (await api.get(`/complexSearch?/&cuisine=${name}/&number=${perPage}&offset=${paginationOffset}`)).data;
}

export const getSearched = async (name: string, perPage: number, paginationOffset: number): Promise<PaginatedData<Recipe>> => {
  return (await api.get(`/complexSearch?/&query=${name}/&number=${perPage}&offset=${paginationOffset}`)).data;
};

export const getDetails = async (name: string): Promise<DetailRecipe> => {
  return (await api.get(`${name}/information/`)).data;
};