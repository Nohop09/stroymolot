import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const projects = [
    {
      id: 1,
      title: "Производственное предприятие ДСК",
      description: "Демонтаж здания",
      image: "/portfolio_dsk.jpg",
    },
    {
      id: 2,
      title: "Жилой дом на ул. Ермака",
      description: "Монтаж кровли в жилом доме",
      image: "/portfolio_ermaka.jpg",
    },
    {
      id: 3,
      title: "Коттедж на ул. Крюкова",
      description: "Монтаж крыши дома типа коттедж",
      image: "/portfolio_cottage.jpg",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Опыт более 10 лет",
      description: "Успешно реализовано 150 проектов",
    },
    {
      icon: CheckCircle,
      title: "Качество и надёжность",
      description: "Используем только проверенные материалы",
    },
    {
      icon: Wrench,
      title: "Собственное оборудование",
      description: "Современная техника и инструменты",
    },
    {
      icon: Award,
      title: "Гарантия сроков",
      description: "Всегда выполняем работы в срок",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="/house_roof.jpg"
          alt="Строительная площадка"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Строй-Молот — надёжное строительство под ключ
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Профессиональный подход к строительству, ремонту и монтажу.
            Качество, проверенное временем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("about")}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              О компании
            </Button>
            <Button
              onClick={() => onNavigate("portfolio")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section (Short) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              О компании
            </h2>
            <p className="text-gray-600 mb-8">
              Строй-Молот — это команда профессионалов с более чем 10-летним
              опытом в строительной индустрии. Мы специализируемся на полном
              цикле строительных работ: от монтажа металлоконструкций до отделки
              интерьеров. Наша миссия — создавать надёжные объекты, которые
              служат десятилетиями.
            </p>
            <Button
              onClick={() => onNavigate("about")}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate("portfolio")}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => onNavigate("portfolio")}
              className="bg-orange-500 hover:bg-orange-600 text-white"
              size="lg"
            >
              Больше проектов
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Готовы начать свой проект?
              </h2>
              <p className="text-gray-600">
                Свяжитесь с нами и получите бесплатную консультацию
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="bg-orange-500 rounded-lg flex items-center justify-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 mb-2">Телефон</p>
                  <a
                    href="tel:+79605126163"
                    className="text-gray-900 hover:text-orange-600 transition-colors"
                  >
                    +7 960 512-61-63
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="bg-orange-500 rounded-lg flex items-center justify-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 mb-2">Email</p>
                  <a
                    href="mailto:stroymolot37@mail.ru"
                    className="text-gray-900 hover:text-orange-600 transition-colors"
                  >
                    info@stroymolot.ru
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className=" bg-orange-500 rounded-lg flex items-center justify-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 mb-2">Адрес</p>
                  <p className="text-gray-900">Иваново, Дальняя Балинская</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center" style={{ marginTop: "20px" }}>
              <Button
                onClick={() => onNavigate("contacts")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white group"
              >
                Связаться с нами
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-gray-500 mt-4">
                Или заполните форму обратной связи на странице контактов
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
