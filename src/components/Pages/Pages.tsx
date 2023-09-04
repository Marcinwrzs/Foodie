import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import Category from "pages/Category/Category";
import CategoriesList from "pages/CategoriesList/CategoriesList";
import Searched from "pages/Searched/Searched";
import Favourites from "pages/Favourites/Favourites";
import RecipeDetails from "pages/RecipeDetails/RecipeDetails";
import LogIn from "pages/LogIn/LogIn";
import SignUp from "pages/SignUp/SignUp";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import "index.css";
import * as Styled from "./Pages.styled";
import { useThemeContext } from "context/ThemeContext";

export enum Paths {
  Home = "/",
  Category = "/category/",
  Searched = "/searched/",
  Favourites = "/favourites",
  LogIn = "/logIn",
  SignUp = "/signUp",
  Dashboard = "/dashboard",
  RecipeDetails = "/recipe/",
  CategoriesList = "/category",
  ErrorPage = "*",
}

const Pages: React.FC = () => {
  const { isOpen } = useThemeContext();

  return (
    <Styled.PagesContainer isOpen={isOpen}>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Category + ":type"} element={<Category />} />
        <Route path={Paths.Searched + ":type"} element={<Searched />} />
        <Route path={Paths.Favourites} element={<Favourites />} />
        <Route path={Paths.LogIn} element={<LogIn />} />
        <Route path={Paths.SignUp} element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path={Paths.Dashboard} element={<DashboardLayout />} />
        </Route>

        <Route
          path={Paths.RecipeDetails + ":name"}
          element={<RecipeDetails />}
        />
        <Route path={Paths.CategoriesList} element={<CategoriesList />} />
        <Route path={Paths.ErrorPage} element={<ErrorPage />} />
      </Routes>
    </Styled.PagesContainer>
  );
};

export default Pages;
