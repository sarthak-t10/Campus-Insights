'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradAerospaceEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Aerospace Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Advanced Flight Dynamics & Propulsion Systems</p>
          <p>
            The M.Tech program in Aerospace Engineering covers advanced aerodynamics, aircraft design, 
            propulsion systems, and flight control. This 2-year program combines theoretical knowledge 
            with practical aerospace applications.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Aircraft design and aerodynamics</li>
            <li>Propulsion systems expertise</li>
            <li>Flight dynamics and control</li>
            <li>Industry partnerships with aerospace firms</li>
          </ul>
        </div>
      )
    },
    {
      id: 'specializations',
      title: 'Specializations',
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Choose Your Focus Area</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Aerodynamics</h5>
              <p className="text-slate-300 text-sm">Flight mechanics and aerodynamic design.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Propulsion Systems</h5>
              <p className="text-slate-300 text-sm">Jet engines, turbines, and power plants.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Flight Control</h5>
              <p className="text-slate-300 text-sm">Control systems and flight dynamics.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Space Systems</h5>
              <p className="text-slate-300 text-sm">Satellite design and space applications.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'admission',
      title: 'Admission Requirements',
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Bachelor's degree in Aerospace or Mechanical Engineering</li>
            <li>GATE score (Minimum qualifying marks)</li>
            <li>Statement of Purpose (SOPs)</li>
            <li>Academic references (3 letters)</li>
          </ul>
        </div>
      )
    },
    {
      id: 'career',
      title: 'Career Prospects',
      content: (
        <div className="space-y-4">
          <p>Graduates pursue roles in:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Aircraft Design Engineer</li>
            <li>Propulsion Specialist</li>
            <li>Aerodynamics Engineer</li>
            <li>Flight Control Specialist</li>
            <li>Research Scientist</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Aerospace Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Aerospace Engineering"
    />
  );
};

export { PostgradAerospaceEngineeringPage };
