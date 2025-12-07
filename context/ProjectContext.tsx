import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { projects as initialProjects } from '../data/projects';

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Project) => void;
    updateProject: (project: Project) => void;
    deleteProject: (id: string) => void;
    toggleFeatured: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Single Source of Truth: LocalStorage 'naxit_all_projects'
        const savedProjects = localStorage.getItem('naxit_all_projects');

        if (savedProjects) {
            setProjects(JSON.parse(savedProjects));
        } else {
            // First load: Hydrate with static initialProjects
            // Also check if we had old custom projects to migrate
            const oldCustom = localStorage.getItem('naxit_custom_projects');
            const custom = oldCustom ? JSON.parse(oldCustom) : [];

            // Default featured: First 3
            const features = localStorage.getItem('naxit_featured_ids');
            const featuredIds = features ? JSON.parse(features) : initialProjects.slice(0, 3).map(p => p.id);

            const merged = [...initialProjects, ...custom].map(p => ({
                ...p,
                isFeatured: p.isFeatured || featuredIds.includes(p.id)
            }));

            setProjects(merged);
            localStorage.setItem('naxit_all_projects', JSON.stringify(merged));
        }
    }, []);

    const save = (newProjects: Project[]) => {
        setProjects(newProjects);
        localStorage.setItem('naxit_all_projects', JSON.stringify(newProjects));
    };

    const addProject = (project: Project) => {
        save([...projects, project]);
    };

    const updateProject = (updated: Project) => {
        save(projects.map(p => p.id === updated.id ? updated : p));
    };

    const deleteProject = (id: string) => {
        save(projects.filter(p => p.id !== id));
    };

    const toggleFeatured = (id: string) => {
        const currentFeaturedCount = projects.filter(p => p.isFeatured).length;
        const target = projects.find(p => p.id === id);

        if (!target) return;

        // If we are enabling feature, check limit
        if (!target.isFeatured && currentFeaturedCount >= 6) {
            // Ideally show error/toast, but for now just return
            return;
        }

        save(projects.map(p => p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject, toggleFeatured }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
