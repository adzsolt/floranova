import React, { Suspense , useContext, useState, useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react-pro'
import {GlobalContext} from "../views/context/GlobalContext";

// routes config
import routes from '../routes'

const AppContent = () => {
  const { setRoles } = useContext(GlobalContext);
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");


  const getList = () => {
    setIsLoading(true);
    setError("");
    axios
      .get("/get-roles", { signal: controller.signal })
      .then((response) => {
        // console.log('get-roles ', response.data);
        setRoles(response.data.roles);
      })
      .catch((error) => {
        // console.log('ERROR:: ', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
