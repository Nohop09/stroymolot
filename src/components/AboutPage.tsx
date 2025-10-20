import { Award, Building, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Надёжность",
      description: "Гарантируем качество на всех этапах строительства",
    },
    {
      icon: Award,
      title: "Профессионализм",
      description: "Команда сертифицированных специалистов",
    },
    {
      icon: Building,
      title: "Опыт",
      description: "Более 150 успешно реализованных проектов",
    },
    {
      icon: Users,
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому заказчику",
    },
  ];

  const team = [
    {
      name: "Владимир Анатольевич Елистратов",
      position: "Генеральный Директор",
      experience: "15 лет опыта",
      image: "../../public/vladimir.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="../../public/on-roof.jpeg"
          alt="Команда Строй-Молот"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">О компании</h1>
          <p className="text-xl text-gray-200">Строим будущее с 2013 года</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                  Наша история
                </h2>
                <p className="text-gray-600 mb-4">
                  Строй-Молот был основан в 2013 году группой опытных инженеров
                  и строителей, объединённых общей целью — создавать
                  качественные и надёжные строительные объекты.
                </p>
                <p className="text-gray-600 mb-4">
                  За более чем 10 лет работы мы стали известной на рынке
                  строительной компанией с собственным парком техники, командой
                  из 10+ высококвалифицированных специалистов и портфолио из
                  более чем 150 успешно реализованных проектов.
                </p>
                <p className="text-gray-600">
                  Мы специализируемся на полном цикле строительных работ: от
                  проектирования и монтажа металлоконструкций до финишной
                  отделки и сдачи объектов «под ключ».
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="../../public/photo-1636790920720-8648e88e346d.jpeg"
                  alt="Строительство"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-center text-gray-900">
              Наша миссия
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Создавать качественные и безопасные строительные объекты, которые
              служат людям десятилетиями, применяя передовые технологии и лучшие
              практики строительной индустрии.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl mb-8 text-center text-gray-900">
            Наши ценности
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-2 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900">
            Наша команда
          </h2>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-orange-500 mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Наши достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl mb-2 text-orange-500">10+</div>
              <p className="text-gray-400">лет на рынке</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-orange-500">150+</div>
              <p className="text-gray-400">завершённых проектов</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-orange-500">10+</div>
              <p className="text-gray-400">специалистов</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-orange-500">100%</div>
              <p className="text-gray-400">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-gray-900">
              Сертификаты и партнёры
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl mb-4 text-gray-900">Сертификаты</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ISO 9001:2015 - Система менеджмента качества</li>
                    <li>• ISO 14001:2015 - Экологический менеджмент</li>
                    <li>• OHSAS 18001 - Охрана труда и безопасность</li>
                    <li>• Допуск СРО на строительные работы</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4 text-gray-900">Партнёры</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Severstal - поставка металлоконструкций</li>
                    <li>• KNAUF - отделочные материалы</li>
                    <li>• Caterpillar - строительная техника</li>
                    <li>• ROCKWOOL - изоляционные материалы</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
