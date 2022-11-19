import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const imageHost = process.env.REACT_APP_imageHost;
    const { data: specialties = [] } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = data => {
        console.log();
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHost}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch(`http://localhost:5000/doctors`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success(`Doctor ${data.name} added successfully`)
                                navigate('/dashboard/managedoctors')
                            }
                        })
                }
            })
    }

    return (
        <div className='shadow-xl p-4 rounded-lg w-11/12 md:w-7/12 lg:w-4/12'>
            <h2 className='text-3xl mt-2 mb-4'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select select-bordered w-full max-w-xs">
                        {specialties.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                        >{specialty.name}</option>)}
                    </select>
                    {errors.specialty && <p role="alert" className='text-red-600 text-sm'>{errors.specialty?.message}</p>}
                </div>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="file"
                    {...register("img",
                        { required: "Photo is required" })} />
                {errors.img && <p role="alert" className='text-red-600 text-sm'>{errors.img?.message}</p>}

                <input className='btn btn-accent mt-4 w-full' type="submit" value={'Add Doctor'} />
            </form>
        </div>
    );
};

export default AddDoctor;