import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./pages/layout";
import { Home } from "./pages/home";
import { Create } from "./pages/create";
import { Login } from "./pages/login";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  )
}