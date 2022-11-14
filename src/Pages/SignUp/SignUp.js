import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        const { name, email, password } = data;

        setErr('');
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("User Created Successfully");
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(e => console.log(e))
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
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='flex items-center justify-center my-8 flex-col'>
            <div className='shadow-xl p-4 rounded-lg w-11/12 md:w-7/12 lg:w-4/12'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-xl text-center mb-4'>Sign Up</h2>
                    <div className="form-control w-full">
                        {/* Name */}
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is required" })}
                            className="input input-bordered w-full" />
                        {errors.name && <p role="alert" className='text-red-600 text-sm'>{errors.name?.message}</p>}


                        {/* Email */}
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                { required: "Email is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-600 text-sm'>{errors.email?.message}</p>}

                        {/* Password */}
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Pasword is required",
                                    minLength: { value: 6, message: "Password must be atleast 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must contain a uppercase, a special character, a digit" }
                                }
                            )}
                            className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                        {errors.password && <p role="alert" className='text-red-600 text-sm'>{errors.password?.message}</p>}
                        {err && <p className='text-sm text-red-600'>{err}</p>}
                    </div>
                    <input className='btn btn-accent mt-4 w-full' type="submit" value={'Sgnup'} />
                </form>
                <p className="text-center text-sm my-2">Already have an account? <Link to='/login' className='text-secondary font-semibold'>Please Login</Link></p>
                <div className="divider">OR</div>
                <input onClick={handleGoogleLogin} className='btn btn-accent btn-outline mt-4 w-full' type="submit" value={'Continue with Google'} />
            </div>
        </div >
    );
};

export default SignUp;