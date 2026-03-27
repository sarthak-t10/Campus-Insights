'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradChemicalEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Chemical Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Advanced Process Engineering & Sustainability</p>
          <p>
            The M.Tech program in Chemical Engineering focuses on advanced process engineering, 
            green chemistry, and sustainable engineering. This 2-year program emphasizes environmental 
            responsibility and industrial applications.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Process engineering specialization</li>
            <li>Green chemistry and sustainability</li>
            <li>Biochemical processes</li>
            <li>Industry collaborations with leading firms</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">Process Engineering</h5>
              <p className="text-slate-300 text-sm">Industrial processes, design, and optimization.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Green Chemistry</h5>
              <p className="text-slate-300 text-sm">Sustainable and eco-friendly chemical processes.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Biochemical Engineering</h5>
              <p className="text-slate-300 text-sm">Bioprocessing and pharmaceutical applications.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Environmental Engineering</h5>
              <p className="text-slate-300 text-sm">Waste treatment and environmental protection.</p>
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
            <li>Bachelor's degree in Chemical Engineering</li>
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
            <li>Process Engineer</li>
            <li>Environmental Consultant</li>
            <li>Pharmaceutical Engineer</li>
            <li>Research Scientist</li>
            <li>Project Manager</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Chemical Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1518611505868-48510c2171bf?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Chemical Engineering"
    />
  );
};

export { PostgradChemicalEngineeringPage };
