import "./App.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusisnessForm from "./Pages/Form/Form";
import QRDownload from "./Pages/QRDownload/QrDownload";
import Blogs from "./Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>Error</>,
  },
  {
    path: "/download",
    element: <QRDownload />,
    children: [{ path: "/download:id", element: <QRDownload /> }],
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/form",
    element: <BusisnessForm />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
{
  /* <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/form" element={<BusisnessForm />}></Route>
          <Route path="/download" element={<QRDownload />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </Router>{" "} */
}
export default App;
//   <Route path="/form" element={ <BusinessForm />}>
