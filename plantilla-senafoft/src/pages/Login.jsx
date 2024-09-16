import FormLogin from "../components/FormLogin";

const Login = () => {

    document.title = "Iniciar Sesion";

    return (
        <div className="w-full h-screen bg-auth-bg bg-cover flex justify-center items-center px-8">
            <FormLogin/>
        </div>
    );
}

export default Login;
