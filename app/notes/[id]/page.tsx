// pages/employees/[id].tsx
import React from 'react';
import { prisma } from '@/lib/prisma';

export default async function EmployeeDetailsPage({
  params,
}: {
  params: {
    id: string;
    firstName: string;
    lastName: string;
    job: string;
    email: string;
  };
}) {
  const { id } = params;
  const data = await prisma.employee.findUnique({
    where: {
      id,
    },
  });

  return (
    <main className="max-w-4xl mx-auto mt-20">
        <form className="max-w-md mx-auto">
                <h3 className="font-bold text-lg">View Employee Details</h3>

                <div className="label mt-4">
                    <span className="label-text">First Name</span>
                </div>
                <label className="form-control">
                    <input name="firstName" id="firstName" type="text" placeholder="Type here" defaultValue={data?.firstName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Last Name</span>
                </div>
                <label className="form-control">
                    <input name="lastName" id="lastName" type="text" placeholder="Type here" defaultValue={data?.lastName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Job</span>
                </div>
                <label className="form-control">
                    <input name="job" id="job" type="text" placeholder="Type here" defaultValue={data?.job} className="cursor-not-allowed input input-bordered input-primary w-full" readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Email</span>
                </div>
                <label className="form-control">
                    <input name="email" id="email" type="text" placeholder="Type here" defaultValue={data?.email} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>
                </form>
    </main>
  );
}
