import React from 'react';
import { FaPlus, FaDownload } from 'react-icons/fa'; // Make sure to install react-icons

// Dummy data for profile images
const profileImages = {
  Silas: 'https://example.com/silas.jpg',
  Alima: 'https://example.com/alima.jpg',
  Jimmy: 'https://example.com/jimmy.jpg',
  Alice: 'https://example.com/alice.jpg',
  Olaoluwa: 'https://example.com/olaoluwa.jpg',
  Hammed: 'https://example.com/hammed.jpg',
  Lolade: 'https://example.com/lolade.jpg',
  John: 'https://example.com/john.jpg',
  Kingsley: 'https://example.com/kingsley.jpg',
  Adedapo: 'https://example.com/adedapo.jpg',
  Jonah: 'https://example.com/jonah.jpg',
  George: 'https://example.com/george.jpg',
  Oluwadami: 'https://example.com/oluwadami.jpg',
};

const Employee = ({ name, hasChildren, isLast, canAdd, canDownload }) => (
  <div className="flex flex-col items-center relative">
    <img
      src={profileImages[name] || 'https://example.com/default.jpg'}
      alt={name}
      className="w-16 h-16 rounded-full mb-2 object-cover"
    />
    <div className="bg-blue-100 px-4 py-1 rounded text-sm">{name}</div>
    {hasChildren && <div className="h-8 w-px bg-gray-300 my-2"></div>}
    {!isLast && (
      <div className="w-16 h-px bg-gray-300 absolute -right-8 top-8"></div>
    )}
    {canAdd && (
      <div className="absolute -right-6 top-6 bg-blue-500 rounded-full p-1">
        <FaPlus className="text-white text-xs" />
      </div>
    )}
    {canDownload && (
      <div className="mt-2">
        <FaDownload className="text-purple-500" />
      </div>
    )}
  </div>
);

const EmployeeSubgroup = ({ employees }) => (
  <div className="flex justify-center gap-16">
    {employees.map((emp, index) => (
      <Employee
        key={emp}
        name={emp}
        isLast={index === employees.length - 1}
        canDownload={true}
      />
    ))}
  </div>
);

const EmployeeGroup = ({ manager, employees, subgroups, canAdd }) => (
  <div className="flex flex-col items-center">
    <Employee name={manager} hasChildren={true} canAdd={canAdd} />
    <div className="flex gap-16">
      {employees && <EmployeeSubgroup employees={employees} />}
      {subgroups &&
        subgroups.map((group, index) => (
          <EmployeeGroup key={index} {...group} canAdd={true} />
        ))}
    </div>
  </div>
);

const OrgChart = () => (
  <div className="container mx-auto p-8">
    <div className="flex justify-center">
      <EmployeeGroup
        manager="Silas"
        subgroups={[
          {
            manager: 'Alima',
            subgroups: [
              {
                manager: 'Alice',
                employees: ['John', 'Kingsley'],
              },
              {
                manager: 'Olaoluwa',
                employees: ['Adedapo'],
              },
            ],
          },
          {
            manager: 'Jimmy',
            subgroups: [
              {
                manager: 'Hammed',
                employees: ['Jonah'],
              },
              {
                manager: 'Lolade',
                employees: ['George', 'Oluwadami'],
              },
            ],
          },
        ]}
      />
    </div>
  </div>
);

export default OrgChart;
