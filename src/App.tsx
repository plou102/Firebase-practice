import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { auth } from "./firebase";
import ProtectedRoute from "./components/Protected-Route";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyles } from "./theme/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  async function Init() {
    await auth.authStateReady();
    setIsLoading(false);
  }

  useEffect(() => {
    Init();
  }, []);

  return (
    <Wrapper>
      <ThemeProvider>
        <GlobalStyles />
        {isLoading ? <Loading /> : <RouterProvider router={router} />}
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
