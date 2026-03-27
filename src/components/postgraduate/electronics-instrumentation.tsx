'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradElectronicsEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Electronics Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">VLSI Design & Embedded Systems</p>
          <p>
            The M.Tech program in Electronics Engineering focuses on VLSI design, embedded systems, 
            and IoT technologies. This 2-year program combines theoretical knowledge with hands-on practical experience.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>VLSI and chip design expertise</li>
            <li>Embedded systems and IoT</li>
            <li>State-of-the-art laboratories</li>
            <li>Industry collaborations</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">VLSI Design</h5>
              <p className="text-slate-300 text-sm">Chip design, layout, and verification.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Embedded Systems</h5>
              <p className="text-slate-300 text-sm">Microcontroller design and real-time systems.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">IoT & Sensors</h5>
              <p className="text-slate-300 text-sm">Internet of Things and sensor networks.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Signal Processing</h5>
              <p className="text-slate-300 text-sm">Advanced signal and image processing.</p>
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
            <li>Bachelor's degree in Electronics or related field</li>
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
            <li>VLSI Design Engineer</li>
            <li>Embedded Systems Engineer</li>
            <li>Hardware Designer</li>
            <li>IoT Developer</li>
            <li>Research Scientist</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Electronics Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1497633762265-25c147e2e6d5?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Electronics Engineering"
    />
  );
};

export { PostgradElectronicsEngineeringPage };
