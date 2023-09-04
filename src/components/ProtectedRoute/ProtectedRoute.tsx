import { useTokenContext } from "context/tokenContext/useTokenContext";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "api/useAxios/axios";
import { Paths } from "components/Pages/Pages";

const ProtectedRoute = () => {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const checkProfile = useCallback(async () => {
    try {
      await axios.get(
        "https://hr-api-with-favourite-recipes.onrender.com/users/me",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (_error) {
      setIsError(true);
      navigate(Paths.LogIn);
    }
    setIsLoading(false);
  }, [accessToken, navigate]);

  useEffect(() => {
    if (!accessToken) {
      navigate(Paths.LogIn);
      setIsLoading(false);
      return;
    }
    checkProfile();
  }, [accessToken, checkProfile, navigate]);

  if (isLoading || isError || !accessToken) return null;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
