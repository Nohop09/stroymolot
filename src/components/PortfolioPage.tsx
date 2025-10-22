import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioPageProps {
    onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'Все проекты' },
        { id: 'construction', label: 'Монтаж' },
        { id: 'renovation', label: 'Ремонт' },
        { id: 'finishing', label: 'Демонтаж' },
    ];

    const projects = [
        {
            id: 1,
            title: 'Жилой дом на ул. Ермака',
            category: 'construction',
            description: 'Монтаж кровли в жилом доме',
            image: '/portfolio_ermaka.jpg',
            year: '2024',
            location: 'Иваново',
        },
        {
            id: 2,
            title: 'Производственное предприятие ДСК',
            category: 'finishing',
            description: 'Демонтаж здания',
            image: '/portfolio_dsk.jpg',
            year: '2023',
            location: 'Иваново',
        },

        {
            id: 3,
            title: 'Коттедж на ул. Крюкова',
            category: 'construction',
            description: 'Монтаж крыши дома типа коттедж',
            image: '/portfolio_cottage.jpg',
            year: '2024',
            location: 'Иваново',
        },
        {
            id: 4,
            title: 'Коттедж в деревне Крюково',
            category: 'renovation',
            description: 'Залитие межэтажного перекрытия в частном доме',
            image: '/portfolio_kryukova.jpg',
            year: '2023',
            location: 'Ивановская обл.',
        },
        {
            id: 5,
            title: 'Завод...',
            category: 'finishing',
            description: 'Демонтаж здания типа "завод"',
            image: '/portfolio_factory.jpg',
            year: '2022',
            location: 'Калуга',
        },
        {
            id: 6,
            title: 'Ивановский государственный энергетический университет',
            category: 'finishing',
            description: 'Демонтаж энерго университета',
            image: '/portfolio_university.jpg',
            year: '2023',
            location: 'Москва',
        },
    ];

    const filteredProjects =
        activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl mb-6">Портфолио</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Более 150 успешно реализованных проектов различной сложности
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-gray-50 sticky top-[73px] z-40 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <Button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                variant={activeFilter === filter.id ? 'default' : 'outline'}
                                className={
                                    activeFilter === filter.id
                                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                }
                            >
                                {filter.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative h-64 overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                        {project.year}
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{project.location}</span>
                                        <span className="capitalize">
                                            {filters.find((f) => f.id === project.category)?.label}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600">Проекты в данной категории не найдены</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl mb-6">Хотите обсудить ваш проект?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Свяжитесь с нами, и мы подготовим индивидуальное предложение
                    </p>
                    <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => {
                            onNavigate('contacts');
                        }}
                    >
                        Связаться с нами
                    </Button>
                </div>
            </section>
        </div>
    );
}
