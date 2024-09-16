import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";


const LoggedLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen h-full w-full p-4 gap-4 bg-soft-gray">
            <SideBar/>
            <main className="xl:w-[80%] w-full h-full rounded-xl">
                <div>
                    <NavBar/>
                </div>
                { children }
            </main>

        </div>
    );
}

export default LoggedLayout;
