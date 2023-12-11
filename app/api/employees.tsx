// api/employees.ts

// Placeholder data - replace with your actual data or data fetching logic

const employees = [
    {
      id: 'clpvktei50001z6vnjxw0j1fg',
      firstName: 'John',
      lastName: 'Doe',
      job: 'Software Engineer',
      email: 'john.doe@example.com',
    },
    // Add more employees as needed
  ];
  
  export const getAllEmployeeIds = () => {
    return employees.map((employee) => ({
      params: { id: employee.id },
    }));
  };
  
  export const getEmployeeById = (id: string) => {
    const employee = employees.find((e) => e.id === id);
    return employee || null;
  };
  