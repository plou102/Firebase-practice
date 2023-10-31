import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { auth } from "./firebase";
import ProtectedRoute from "./components/Protected-Route";

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

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: #fff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

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
      <GlobalStyles />
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
