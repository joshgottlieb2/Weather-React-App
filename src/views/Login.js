import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
    const { login, logout, user } = useContext(AuthContext);

    return (
        <>
            <div className="app">
                <div className="container mt-30 text-center">
                    <section>
                        <h2 className="login">Welcome to your Weather App!</h2>
                        <p className="login">
                            Click below to sign in with Google
                            <br />
                            <span className="line">
                                <button onClick={login} id="submit-btn" className="btn btn-dark rounded-pill d-inline-flex mt-4 btn-lg" type="submit">Login</button>
                            </span>
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}

