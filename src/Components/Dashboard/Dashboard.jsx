import { Outlet } from "react-router";
import Header from "../Header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <div>
            {/* <h1 className="text-9xl">Yes, I have done......</h1> */}
            </div>
            <h1>Welcome to your Dashboard</h1>
            <p>Here’s your personalized content.</p>
        </div >
    );
}

export default Dashboard;