import Layout from "./components/Layout/Layout";
import Board from "./components/board/Board";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Single} from "./components/board/single/Single";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Board/>
  },
  {
      path: "/tasks/:cardId",
      element: <Single/>
  }
  ])

function App() {
  return (
    <Layout>
      <Header/>
      <main className="main">
        <RouterProvider router={router}/>
      </main>
      <Footer/>
    </Layout>
  );
}

export default App;
