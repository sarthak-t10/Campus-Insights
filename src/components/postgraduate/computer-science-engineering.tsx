'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradComputerScienceEngineeringPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech Computer Science',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Data Science & Cloud Computing</p>
          <p>
            The M.Tech program in Computer Science focuses on data science, cloud computing, 
            cybersecurity, and AI systems. This 2-year program prepares graduates for leadership 
            roles in modern software development.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Data science and big data focus</li>
            <li>Cloud computing expertise</li>
            <li>Cybersecurity specialization</li>
            <li>Industry partnerships with tech leaders</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">Data Science</h5>
              <p className="text-slate-300 text-sm">Analytics, machine learning, and big data processing.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Cloud Computing</h5>
              <p className="text-slate-300 text-sm">AWS, Azure, and distributed systems.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Cybersecurity</h5>
              <p className="text-slate-300 text-sm">Information security and network protection.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">AI Systems</h5>
              <p className="text-slate-300 text-sm">Artificial intelligence and deep learning applications.</p>
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
            <li>Bachelor's degree in Computer Science or related field</li>
            <li>GATE/CAT score (Minimum qualifying marks)</li>
            <li>Statement of Purpose (SOPs)</li>
            <li>Academic references (3 letters)</li>
            <li>Portfolio or relevant projects</li>
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
            <li>Data Scientist</li>
            <li>Cloud Architect</li>
            <li>Cybersecurity Specialist</li>
            <li>AI/ML Engineer</li>
            <li>Research Scientist</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech Computer Science"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech Computer Science"
    />
  );
};

export { PostgradComputerScienceEngineeringPage };
