import { Routes , Route} from "react-router-dom";

import { Home } from "./pages/Home";
import { Curiosity } from "./components/Curiosity";

import { DefaultLayout } from "./Layouts/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/ClimateCuriosity" element={<Curiosity/>}/>
            </Route>
        </Routes>
    )
}