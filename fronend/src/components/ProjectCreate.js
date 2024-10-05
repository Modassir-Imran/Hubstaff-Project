import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCreate = () => {
  const [projectName, setProjectName] = useState('');
  const [clientId, setClientId] = useState('');
  const [projects, setProjects] = useState([]);
  const [closedProjects, setClosedProjects] = useState([]);
  const [openProjects, setOpenProjects] = useState([]);
  const [allProjectsClosed, setAllProjectsClosed] = useState(false);
  const [allProjectsOpened, setAllProjectsOpened] = useState(false);

  const createProject = async () => {
    if (!projectName) {
      alert('Project name is required');
      return;
    }

    const existingProject = projects.find(
      (project) => project.projectName.toLowerCase() === projectName.toLowerCase()
    );
    if (existingProject) {
      alert('Project with this name already exists');
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/api/projects/create', { projectName });
      console.log('Project created:', res.data);
      alert('Project created successfully!');
      fetchProjects();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project');
    }
  };

  const assignProject = async () => {
    if (!clientId || !projectName) {
      alert('Both project name and client ID are required');
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/api/projects/assign-project', { clientId, projectName });
      console.log('Project assigned:', res.data);
      alert('Project assigned successfully!');
      fetchProjects();
    } catch (error) {
      console.error('Error assigning project:', error);
      alert('Failed to assign project');
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/projects/all');
      setProjects(res.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const closeAllProjects = () => {
    const allProjectIds = projects.map(project => project._id);
    setClosedProjects(allProjectIds);
    setAllProjectsClosed(true);
    setAllProjectsOpened(false);
  };

  const openAllProjects = () => {
    const allProjectIds = projects.map(project => project._id);
    setOpenProjects(allProjectIds);
    setAllProjectsClosed(false);
    setAllProjectsOpened(true);
  };

  return (
    <div className="p-6 bg-white shadow-lg ">
      <div className="flex gap-4 mb-6 ">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={e => setClientId(e.target.value)}
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={createProject}>
          Create Project
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={assignProject}>
          Assign Project & Start Timer
        </button>

        {!allProjectsClosed && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={closeAllProjects}>
            Close All Projects
          </button>
        )}

        {!allProjectsOpened && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={openAllProjects}>
            Open All Projects
          </button>
        )}
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4">All Projects</h2>
        {projects.length > 0 ? (
          <div className="pl-5">
            {projects.map((project) => (
              !closedProjects.includes(project._id) && (
                <div key={project._id} className="flex items-center justify-between mt-4 ">
                  <strong className='text-lg w-28 h-10 bg-gray-300 p-2 rounded-lg'>
                    {project.projectName}
                  </strong>
                </div>
              )
            ))}
          </div>
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCreate;