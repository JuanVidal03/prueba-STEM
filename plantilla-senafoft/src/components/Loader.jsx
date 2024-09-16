import { Spinner } from "@material-tailwind/react";

const Loader = () => {
    return (
        <div className="w-screen z-[99999] fixed top-0 left-0 h-screen bg-gradient backdrop-blur-lg flex justify-center items-center">
            <Spinner className="h-24 w-24" />
        </div>
    );
}

export default Loader;
