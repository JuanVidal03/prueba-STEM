import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import Loader from "./Loader";

import { login } from "../services/auth.services";
   
const  FormLogin = () => {

    // campos del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const handleLogin = async() => {
        setLoading(true);
        const credentials = {
            email,
            password
        }

        try {

            const response = await login(credentials);
            console.log(response);
            if(response.status && response.status === 200) {
                setLoading(false);
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }


    return (
        <Card className="w-full max-w-[450px] flex p-7 " color="white" shadow={true}>
            { loading && <Loader/> }

            <h1 className="font-semibold text-black text-3xl">¡Iniciar Sesión!</h1>
            <Typography color="gray" className="mt-1 font-normal">
                Te estabamos esperando.
            </Typography>
            <form
                className="mt-8 mb-2 max-w-screen-lg sm:w-96 w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Ingresa tu correo eléctronico
                </Typography>
                <Input
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="carloslopez@mail.com"
                    className=" !border-t-blue-gray-200 w-full transition-all focus:!border-t-gray-900"
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Contraseña
                </Typography>
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 transition-all focus:!border-t-gray-900"
                />
                </div>

                <Button type="submit" className="mt-6" fullWidth>Ingresar</Button>
                {/* <div className="w-full flex justify-center items-center pt-5">
                    <p className="text-center">¿No tienes una cuenta? <Link className="font-semibold" to="/register">Registrame</Link></p>
                </div> */}
            </form>
        </Card>
    );
}

export default FormLogin;
