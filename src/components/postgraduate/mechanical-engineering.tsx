'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradMechanicalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Mechanical Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Advanced Design & Automation Technologies</p>
          <p>
            The M.Tech program in Mechanical Engineering focuses on advanced design methodologies, 
            computational engineering, and automation. This 2-year program integrates cutting-edge technologies 
            with industrial applications.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>CAD/CAM and simulation expertise</li>
            <li>Robotics and automation focus</li>
            <li>Industry collaborations</li>
            <li>Advanced materials and manufacturing</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">CAD/CAM & Design</h5>
              <p className="text-slate-300 text-sm">
                Advanced design optimization, computational tools, and simulation techniques.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Robotics & Automation</h5>
              <p className="text-slate-300 text-sm">
                Industrial robotics, automation systems, and control engineering.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Thermal Systems</h5>
              <p className="text-slate-300 text-sm">
                Heat transfer, thermodynamics, and energy systems optimization.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Manufacturing</h5>
              <p className="text-slate-300 text-sm">
                Advanced manufacturing processes and material science applications.
              </p>
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
            <li>Bachelor's degree in Mechanical Engineering or related field</li>
            <li>GATE score (Minimum qualifying marks)</li>
            <li>Statement of Purpose (SOPs)</li>
            <li>Academic references (3 letters)</li>
            <li>Portfolio or relevant work experience</li>
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
            <li>Design Engineer (CAD/CAM)</li>
            <li>Robotics Engineer</li>
            <li>Manufacturing Engineer</li>
            <li>Research & Development Specialist</li>
            <li>Systems Engineer</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Mechanical Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Mechanical Engineering"
    />
  );
};

export { PostgradMechanicalEngineeringPage };
