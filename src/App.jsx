import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {SignIn, SignUp } from "@/pages";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route key="Sign In" exact path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
