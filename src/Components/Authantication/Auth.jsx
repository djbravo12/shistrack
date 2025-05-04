import { Routes, Route } from "react-router"
import Home from "../Home/Home"
import App from "../../App"
import Product from "../Product/Product"
import Solutions from "../Solution/Solutions"
import Dashboard from "../Dashboard/Dashboard"
import { useState } from "react"

const AuthComp = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your authentication logic

    console.log(isAuthenticated ? "Authenticated" : "Not Authenticated");

    return (
        <>

            {
                isAuthenticated ?
                    (
                        <Routes >
                            < Route path="/" element={< App />} >
                                <Route path="" element={<Home />} />
                                <Route path="/Solutions" element={<Solutions />} />
                                <Route path="/Product" element={<Product />} />
                                {/* <Route path="/shistrack/About" element={<About />} /> */}
                            </Route >
                        </Routes >)

                    :
                    (<Routes >
                        < Route path="/" element={< Dashboard />} >
                            <Route path="" element={<Home />} />
                            <Route path="/Solutions" element={<Solutions />} />
                            <Route path="/Product" element={<Product />} />
                            {/* <Route path="/shistrack/About" element={<About />} /> */}
                        </Route >
                    </Routes >)}</>
    )
}

export default AuthComp;