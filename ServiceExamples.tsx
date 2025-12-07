import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProjects } from './context/ProjectContext';
import { Card } from './components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './components/ui/Logo';

// Map service IDs to readable titles
const serviceTitles: Record<string, string> = {
    'ui-ux': 'UI/UX Design',
    'branding': 'Brand Systems',
    'gui': 'Embedded GUI',
    'graphic': 'Graphic Design'
};

const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'branding', label: 'Branding' },
    { id: 'gui', label: 'Embedded' },
    { id: 'graphic', label: 'Graphic' },
];

export const ServiceExamples: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const { projects } = useProjects();
    const navigate = useNavigate();

    // If serviceId is present, use it as initial active tab, else 'all'
    const [activeTab, setActiveTab] = useState(serviceId || 'all');

    // Update active tab if URL parameter changes (e.g. navigation)
    useEffect(() => {
        setActiveTab(serviceId || 'all');
    }, [serviceId]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        if (id === 'all') {
            navigate('/work');
        } else {
            navigate(`/services/${id}`);
        }
    };

    const displayedProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.serviceId === activeTab);

    const title = activeTab === 'all' ? 'Our Work' : serviceTitles[activeTab] || 'Projects';

    return (
        <div className="min-h-screen bg-naxit-bg text-white">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-naxit-bg/80 backdrop-blur-md border-b border-white/5 py-4">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 flex justify-between items-center">
                    <Link to="/">
                        <Logo className="h-8 w-auto" />
                    </Link>
                    <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </nav>

            <main className="container mx-auto px-8 md:px-12 lg:px-16 pt-32 pb-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.h1
                        key={title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-display text-4xl lg:text-5xl font-bold"
                    >
                        {title}
                    </motion.h1>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleTabClick(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === cat.id
                                        ? 'bg-naxit-primary text-white shadow-lg shadow-naxit-primary/25'
                                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {displayedProjects.length === 0 ? (
                    <div className="text-naxit-muted text-lg">No visible projects found for this category yet. Check back soon!</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProjects.map(project => (
                            <Card key={project.id} className="p-0 overflow-hidden border-0 ring-1 ring-white/10 hover:ring-naxit-violet/50 transition-all duration-300 group">
                                <Link to={`/project/${project.id}`} className="block h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-naxit-bg via-transparent to-transparent opacity-80 z-10" />
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/10 text-white">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-6 relative z-20 -mt-12 bg-naxit-bg">
                                        <h3 className="text-2xl font-bold font-display mb-2 text-white group-hover:text-naxit-cyan transition-colors">{project.title}</h3>
                                        <p className="text-naxit-muted text-sm line-clamp-3">{project.problem}</p>
                                        <div className="mt-4 text-xs font-bold text-naxit-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            View Case Study &rarr;
                                        </div>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};
