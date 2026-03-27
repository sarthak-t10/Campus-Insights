'use client';

import { DepartmentPage } from '../departments/department-page';

const PostgradMachinelearningAIPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'M.Tech AI & Machine Learning',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-yellow-400">Deep Learning, NLP & Intelligent Systems</p>
          <p>
            The M.Tech program in AI & Machine Learning focuses on deep learning, natural language processing, 
            computer vision, and intelligent systems. This 2-year program prepares graduates for leadership 
            roles in AI research and industry applications.
          </p>
          <h4 className="text-xl font-bold text-yellow-400 mt-4">Program Highlights</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Duration: 2 years (4 semesters)</li>
            <li>Deep learning and neural networks</li>
            <li>Natural Language Processing specialization</li>
            <li>Computer Vision expertise</li>
            <li>Industry mentorship from AI leaders</li>
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
              <h5 className="font-bold text-yellow-300 mb-2">Deep Learning</h5>
              <p className="text-slate-300 text-sm">Neural networks, CNNs, RNNs, and transformers.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">NLP</h5>
              <p className="text-slate-300 text-sm">Natural language processing and text analytics.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Computer Vision</h5>
              <p className="text-slate-300 text-sm">Image recognition and visual understanding systems.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h5 className="font-bold text-yellow-300 mb-2">Reinforcement Learning</h5>
              <p className="text-slate-300 text-sm">Decision-making and game-playing AI.</p>
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
            <li>Bachelor's degree in CS/IT or related field</li>
            <li>Strong mathematics background</li>
            <li>GATE/CAT score (Minimum qualifying marks)</li>
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
            <li>ML Engineer at FAANG companies</li>
            <li>AI Research Scientist</li>
            <li>Data Scientist</li>
            <li>NLP Specialist</li>
            <li>Computer Vision Expert</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <DepartmentPage
      sections={sections}
      departmentName="M.Tech AI & Machine Learning"
      headName="Program Coordinator"
      headImage="https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=400&q=80"
      headTitle="Program Coordinator – M.Tech AI & Machine Learning"
    />
  );
};

export { PostgradMachinelearningAIPage };
