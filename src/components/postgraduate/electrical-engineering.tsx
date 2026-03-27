'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradElectricalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Electrical Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Power Systems & Smart Grid Technologies</p>
          <p>
            The M.Tech program in Electrical Engineering covers advanced power systems, renewable energy, 
            and smart grid technologies. This 2-year program emphasizes practical applications in modern energy systems.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Power systems and smart grid focus</li>
            <li>Renewable energy technologies</li>
            <li>High-voltage engineering</li>
            <li>Industrial partnerships</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">Power Systems</h5>
              <p className="text-slate-300 text-sm">Generation, transmission, distribution, and grid management.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Renewable Energy</h5>
              <p className="text-slate-300 text-sm">Solar, wind, and sustainable energy systems.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Power Electronics</h5>
              <p className="text-slate-300 text-sm">Power conversion and industrial applications.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Control Systems</h5>
              <p className="text-slate-300 text-sm">Advanced control and automation in electrical systems.</p>
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
            <li>Bachelor's degree in Electrical Engineering</li>
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
            <li>Power Systems Engineer</li>
            <li>Smart Grid Specialist</li>
            <li>Renewable Energy Engineer</li>
            <li>Research Scientist</li>
            <li>Consultant</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Electrical Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Electrical Engineering"
    />
  );
};

export { PostgradElectricalEngineeringPage };
