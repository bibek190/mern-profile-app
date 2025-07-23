import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState();

  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log(isLoggedIn);

  // logout
  const LogoutUser = () => {
    return localStorage.removeItem("token");
  };

  //JWT Authentication to get the currently logedin data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("userData", data.userData);
        setUser(data.userData);
      }
    } catch (err) {
      console.log("userAuthentication", err.message);
    }
  };
  // to fetch sservices data from the data base
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (err) {
      console.log("get Services", err.message);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storetokenInLS, LogoutUser, isLoggedIn, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const useAuthInfo = useContext(AuthContext);
  return useAuthInfo;
};
