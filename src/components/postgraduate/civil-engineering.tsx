'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradCivilEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Civil Engineering',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Advanced Structural Design & Infrastructure Innovation</p>
          <p>
            The M.Tech program in Civil Engineering offers specialized knowledge in structural engineering, 
            advanced infrastructure design, and sustainable development. This 2-year program combines theoretical 
            foundations with practical applications.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Industry partnerships and mentorship</li>
            <li>Research-focused curriculum</li>
            <li>Thesis/capstone projects</li>
            <li>Advanced design tools and simulations</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">Structural Engineering</h5>
              <p className="text-slate-300 text-sm">
                Advanced analysis and design of structures, earthquake-resistant design, and innovative materials.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Infrastructure & Sustainability</h5>
              <p className="text-slate-300 text-sm">
                Sustainable infrastructure development, green building practices, and environmental engineering.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Geotechnical Engineering</h5>
              <p className="text-slate-300 text-sm">
                Foundation design, soil mechanics, and ground improvement techniques.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Water Resources</h5>
              <p className="text-slate-300 text-sm">
                Hydrology, water supply systems, and environmental water management.
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
            <li>Bachelor's degree in Civil Engineering or related field</li>
            <li>GATE score (Minimum qualifying marks)</li>
            <li>Statement of Purpose (SOPs)</li>
            <li>Academic references (3 letters)</li>
            <li>Valid IELTS/TOEFL for international applicants</li>
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
            <li>Structural Design Engineer</li>
            <li>Project Manager</li>
            <li>Consultant (Design/Management)</li>
            <li>Research Scholar (PhD)</li>
            <li>Sustainability Specialist</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Civil Engineering"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Civil Engineering"
    />
  );
};

export { PostgradCivilEngineeringPage };
