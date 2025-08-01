// pages/Projects.jsx
import { 
  SiReact, 
  SiFastapi, 
  SiMongodb, 
  SiJavascript, 
  SiPython, 
  SiJupyter 
} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import AnimatedPage from '../components/AnimatedPage';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AskMyNotes',
      description: 'An offline AI-powered chatbot to talk with your documents using local LLMs.',
      techIcons: [<SiJavascript key="js" />, <SiPython key="py" />],
      category: 'AI/ML',
      repoLink: 'https://github.com/sahilnegin/AskMyNotes',
    },
    {
      id: 2,
      title: 'Chat-App',
      description: 'Real-time chat app with Express backend, React frontend, and MongoDB.',
      techIcons: [<SiJavascript key="js" />, <SiReact key="react" />, <SiMongodb key="mongo" />],
      category: 'Web App',
      repoLink: 'https://github.com/sahilnegin/Chat-App',
    },
    {
      id: 3,
      title: 'Spam-Or-Not-Spam',
      description: 'A spam detection project built with Python.',
      techIcons: [<SiPython key="py" />],
      category: 'AI/ML',
      repoLink: 'https://github.com/sahilnegin/Spam-Or-Not-Spam',
    },
    {
      id: 4,
      title: 'Tweet Sentiment Analyzer',
      description: 'Sentiment analysis on tweets, implemented in Jupyter Notebook.',
      techIcons: [<SiPython key="py" />, <SiJupyter key="jupyter" />],
      category: 'AI/ML',
      repoLink: 'https://github.com/sahilnegin/tweet-sentiment-analyzer',
    },
    {
      id: 5,
      title: 'UI-Dukan Project',
      description: 'Frontend UI project with modern design.',
      techIcons: [<SiReact key="react" />, <SiJavascript key="js" />],
      category: 'Web App',
      repoLink: 'https://github.com/sahilnegin/Ui-dukan-project-harkirat',
    },
    {
      id: 6,
      title: 'Face Detection with Custom Data',
      description: 'Face detection using YOLOv5 and custom dataset in notebooks.',
      techIcons: [<SiPython key="py" />, <SiJupyter key="jupyter" />],
      category: 'AI/ML',
      repoLink: 'https://github.com/sahilnegin/Face-Detection-With-Custom-Data',
    },
  ];

  return (
    <AnimatedPage>
      <div id="projects" className="relative min-h-screen bg-[#121212] text-white px-4 py-16 max-w-6xl mx-auto">
        {/* Glow background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-fuchsia-600 rounded-full blur-2xl opacity-20 animate-pulse z-0" />

        <h2 className="relative z-10 text-4xl font-bold text-white mb-12 text-center underline decoration-cyan-400 underline-offset-8">
          Projects
        </h2>
        
        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
