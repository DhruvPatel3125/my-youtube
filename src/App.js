import React from 'react'
import './index.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from './components/Body'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import NotFound from './components/NotFound.jsx';
import SearchResults from './components/SearchResult.jsx';
import Demo from './components/Demo.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "*", // Catch-all route for 404
        element: <NotFound />,
      },
      {
        path: "/demo", // Catch-all route for 404
        element: <Demo />,
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App
