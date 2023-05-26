import React from "react";

import {RegisterPage} from "./components/RegisterPage";
import {LoginPage} from "./components/LoginPage";
import { HomePage } from "./components/HomePage";

const App: React.FC = () => {
    return (
        <div>
            {/*<RegisterPage/>
            <LoginPage/>*/}
            <HomePage/>
        </div>
    );
}

export default App;