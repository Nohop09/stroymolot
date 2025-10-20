import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PortfolioPage() {
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
            title: 'ЖК «Современный Квартал»',
            category: 'construction',
            description: 'Строительство жилого комплекса премиум-класса на 250 квартир',
            image: 'https://images.unsplash.com/photo-1653895168758-411ef6038015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDQ2Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            year: '2024',
            location: 'Москва',
        },
        {
            id: 2,
            title: 'Офисный центр «Северная Башня»',
            category: 'construction',
            description: 'Монтаж металлоконструкций и остекление фасада',
            image: 'https://images.unsplash.com/photo-1723271198638-8035292089a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjA1MTUzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            year: '2023',
            location: 'Санкт-Петербург',
        },
        {
            id: 3,
            title: 'Реконструкция интерьера офиса',
            category: 'renovation',
            description: 'Полная реконструкция офисного пространства 1500 м²',
            image: 'https://images.unsplash.com/photo-1604159848821-104723525eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA1MjY3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            year: '2024',
            location: 'Москва',
        },
        {
            id: 4,
            title: 'Загородный дом в Подмосковье',
            category: 'construction',
            description: 'Строительство двухэтажного дома из газобетона',
            image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjA1NTEzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            year: '2023',
            location: 'Московская область',
        },
        {
            id: 5,
            title: 'Промышленный комплекс',
            category: 'construction',
            description: 'Строительство производственного здания с административным блоком',
            image: 'https://images.unsplash.com/photo-1684695747624-0dd1b6412bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwNTE3MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
            year: '2022',
            location: 'Калуга',
        },
        {
            id: 6,
            title: 'Ремонт торгового центра',
            category: 'renovation',
            description: 'Капитальный ремонт с заменой инженерных систем',
            image: 'https://images.unsplash.com/photo-1636790920720-8648e88e346d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjA1MjEwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Связаться с нами
                    </Button>
                </div>
            </section>
        </div>
    );
}
