import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        const { email, password } = data;

        setErr('');
        loginUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.log(e);
                setErr(e.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
            })
            .catch(e => console.log(e))
    }


    return (
        <div className='flex items-center justify-center my-8 flex-col'>
            <div className='shadow-xl p-4 rounded-lg w-11/12 md:w-7/12 lg:w-4/12'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl text-center mb-4'>Login</h2>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                { required: "Email is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be atleast 6 characters long" }
                                }
                            )}
                            className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                        {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                        {err && <p className='text-sm text-red-600'>{err}</p>}
                    </div>

                    <input className='btn btn-accent mt-4 w-full' type="submit" value={'Login'} />
                </form>
                <p className="text-center text-sm my-2">New to Doctors Portal? <Link to='/signup' className='text-secondary font-semibold'>Create new account</Link></p>
                <div className="divider">OR</div>
                <input onClick={handleGoogleLogin} className='btn btn-accent btn-outline mt-4 w-full' type="submit" value={'Continue with Google'} />
            </div>
        </div >
    );
};

export default Login;