import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout";
import { Home } from "./components/home";
import { Create } from "./components/create";
import { Login } from "./components/login";
import { Profile } from "./components/profile";
import { Password } from "./components/password";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/password" element={<Password />}></Route>
      </Route>
    </Routes>
  )
}