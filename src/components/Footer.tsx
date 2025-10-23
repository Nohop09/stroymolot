import { HardHat, Instagram, MessageCircle, Phone } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const navItems = [
    { id: "home", label: "Главная" },
    { id: "portfolio", label: "Портфолио" },
    { id: "about", label: "О нас" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start gap-16 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded flex items-center justify-center border-2 border-orange-500">
                <HardHat className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-white">Строй-Молот</span>
            </div>
            <p className="text-gray-400 text-sm">
              Качество, опыт и профессионализм с 2013 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white mb-4">Навигация</h3>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Связь</h3>
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => (window.location.href = "tel:+79806959553")}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Telegram"
              >
                <Phone className="w-5 h-5" />
              </button>
              <a
                href="mailto:stroymolot37@mail.ru"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              +7 960 512-61-63
              <br />
              stroymolot37@mail.ru
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2025 Строй-Молот. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
