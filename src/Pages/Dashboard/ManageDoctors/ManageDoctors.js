import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeletingDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    toast.success(`Dr. ${doctor.name} removed`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl mt-2 mb-4'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) => <tr key={doctor._id}>
                                <th>{idx + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></th>
                                <td>Dr. {doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>{doctor.email}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-sm">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to remove Dr. ${deletingDoctor.name}?`}
                    message={`If you remove this doctor, it can'not be undone again.`}
                    modalSuccess={handleDeletingDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;