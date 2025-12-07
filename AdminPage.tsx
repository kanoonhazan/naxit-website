import React, { useState } from 'react';
import { useProjects } from './context/ProjectContext';
import { Button } from './components/ui/Button';
import { Logo } from './components/ui/Logo';
import { Link } from 'react-router-dom';

export const AdminPage: React.FC = () => {
    const { projects, addProject, updateProject, deleteProject, toggleFeatured } = useProjects();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Debug helper to reset storage if things get messed up
    const handleReset = () => {
        if (confirm("This will wipe all changes and restore original projects. Are you sure?")) {
            localStorage.removeItem('naxit_all_projects');
            localStorage.removeItem('naxit_custom_projects');
            localStorage.removeItem('naxit_featured_ids');
            window.location.reload();
        }
    };
    const [password, setPassword] = useState('');

    // UI State
    const [view, setView] = useState<'list' | 'form'>('list');
    const [editingProject, setEditingProject] = useState<any | null>(null);

    // Form State
    const [formData, setFormData] = useState<any>({
        title: '',
        category: '',
        image: '',
        problem: '',
        solution: '',
        outcome: '',
        serviceId: 'ui-ux'
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleCreateNew = () => {
        setEditingProject(null);
        setFormData({
            title: '',
            category: 'UI/UX Design',
            image: '',
            problem: '',
            solution: '',
            outcome: '',
            serviceId: 'ui-ux',
            description: ''
        });
        setView('form');
    };

    const handleEdit = (project: any) => {
        setEditingProject(project);
        setFormData(project);
        setView('form');
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const projectData = {
            ...formData,
            id: editingProject ? editingProject.id : Date.now().toString(),
        };

        if (editingProject) {
            updateProject(projectData);
        } else {
            addProject(projectData);
        }

        setView('list');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-naxit-bg flex flex-col justify-center items-center text-white p-4">
                <Logo className="h-12 w-auto mb-8" />
                <form onSubmit={handleLogin} className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h1 className="text-2xl font-display font-bold mb-6 text-center">Admin Access</h1>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white mb-4 focus:border-naxit-primary outline-none"
                    />
                    <Button type="submit" className="w-full">Login</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-naxit-bg text-white pb-24">
            {/* Admin Header */}
            <header className="bg-naxit-bg/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-40">
                <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Logo className="h-8 w-auto" />
                        <span className="px-2 py-1 bg-white/10 rounded text-xs uppercase tracking-wider text-gray-400">Admin CMS</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                            {/* Using text specific arrow because lucide might not be imported with a specific name in this scope yet, relying on button or reuse */}
                            ← View Site
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-8 pt-12">

                {/* List View */}
                {view === 'list' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="font-display text-3xl font-bold">Project Management</h1>
                            <Button onClick={handleCreateNew} className="flex items-center gap-2">
                                + Add New Project
                            </Button>
                        </div>

                        {/* Stats / Limit Info */}
                        <div className="mb-6 p-4 bg-naxit-primary/10 border border-naxit-primary/20 rounded-xl flex items-center gap-3">
                            <span className="text-naxit-primary font-medium">
                                Featured Projects: <strong>{projects.filter(p => p.isFeatured).length}</strong> / 6 (Max)
                            </span>
                        </div>

                        <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5 text-gray-400 text-sm uppercase tracking-wider border-b border-white/5">
                                        <th className="p-6 font-medium">Project</th>
                                        <th className="p-6 font-medium">Category</th>
                                        <th className="p-6 font-medium text-center">Featured</th>
                                        <th className="p-6 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {projects.map(project => (
                                        <tr key={project.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="p-4 pl-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 rounded bg-gray-800 overflow-hidden flex-shrink-0">
                                                        <img src={project.image} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-white group-hover:text-naxit-cyan transition-colors">{project.title}</div>
                                                        <div className="text-xs text-gray-500">{project.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-300">
                                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">
                                                    {project.category}
                                                </span>
                                            </td>
                                            <td className="p-6 text-center">
                                                <button
                                                    onClick={() => toggleFeatured(project.id)}
                                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${project.isFeatured ? 'bg-naxit-primary text-white' : 'bg-white/10 text-gray-500 hover:text-white'}`}
                                                >
                                                    {project.isFeatured ? '★ Featured' : '☆ Hidden'}
                                                </button>
                                            </td>
                                            <td className="p-6 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button onClick={() => handleEdit(project)} className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => handleDelete(project.id)} className="px-3 py-1 text-sm bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-red-500/10">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {projects.length === 0 && <div className="p-12 text-center text-gray-500">No projects found. Create one!</div>}
                        </div>
                    </div>
                )}

                {/* Edit/Create Form View */}
                {view === 'form' && (
                    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <button onClick={() => setView('list')} className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            ← Back to List
                        </button>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
                            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                                {editingProject ? 'Edit Project' : 'Create New Project'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Project Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none focus:ring-1 focus:ring-naxit-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Category (Display)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. UI/UX Design"
                                            required
                                            value={formData.category}
                                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Service Filter ID</label>
                                        <select
                                            value={formData.serviceId}
                                            onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none"
                                        >
                                            <option value="ui-ux">UI/UX Design</option>
                                            <option value="branding">Branding</option>
                                            <option value="gui">Embedded GUI</option>
                                            <option value="graphic">Graphic Design</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Image URL</label>
                                        <input
                                            type="url"
                                            placeholder="https://..."
                                            required
                                            value={formData.image}
                                            onChange={e => setFormData({ ...formData, image: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Problem Statement</label>
                                        <textarea
                                            rows={3}
                                            required
                                            value={formData.problem}
                                            onChange={e => setFormData({ ...formData, problem: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none"
                                        />
                                    </div>

                                    {/* Simplified for verification, can add more fields as needed */}
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Description</label>
                                        <textarea
                                            rows={5}
                                            value={formData.fullDescription || ''}
                                            onChange={e => setFormData({ ...formData, fullDescription: e.target.value })}
                                            className="w-full bg-naxit-bg border border-white/10 rounded-lg p-3 text-white focus:border-naxit-primary outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex justify-end gap-4">
                                    <button type="button" onClick={() => setView('list')} className="px-6 py-3 rounded-lg font-bold hover:bg-white/5 transition-colors">
                                        Cancel
                                    </button>
                                    <Button type="submit">
                                        {editingProject ? 'Save Changes' : 'Create Project'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
