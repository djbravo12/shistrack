import Header from "../Header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <img src="https://unsplash.com/photos/a-woman-standing-in-a-hallway-wearing-a-white-shirt-and-black-skirt-5OVrJXJ-CGU" alt="Dashboard Background" className="w-full h-64 object-cover" />
            <h1>Welcome to your Dashboard</h1>
            <p>Here’s your personalized content.</p>
        </div >
    );
}

export default Dashboard;