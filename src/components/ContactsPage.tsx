import React, { useRef, useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import emailjs from '@emailjs/browser';

export function ContactsPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [snackbarState, setSnackbarState] = useState<SnackbarOrigin & { open: boolean }>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');
    const form = useRef<HTMLFormElement | null>(null);
    const emailRegex = /^(?!.*\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    const { vertical, horizontal, open } = snackbarState;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        setNameError('');
        setEmailError('');
        setPhoneError('');
        setMessageError('');

        if (formData.name.trim().length < 1) {
            setNameError('Введите ваше имя');
            valid = false;
        }

        if (!emailRegex.test(formData.email)) {
            setEmailError('Введите корректный email');
            valid = false;
        }

        if (!phoneRegex.test(formData.phone)) {
            setPhoneError('Введите корректный номер телефона');
            valid = false;
        }

        if (formData.message.trim().length < 1) {
            setMessageError('Введите ваше сообщение');
            valid = false;
        }

        if (!valid) {
            console.log('❌ Форма содержит ошибки:', {
                nameError,
                emailError,
                phoneError,
                messageError,
            });
            return;
        }

        if (form.current) {
            emailjs.sendForm('service_9h9itz9', 'template_eu5jiss', form.current, '3yLsj6gzclFYVwqrK').then(
                () => {
                    handleClick({ vertical: 'top', horizontal: 'center' });
                    setFormData({ name: '', phone: '', email: '', message: '' });
                },
                (error) => (
                    <Snackbar
                        message={error.text}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical, horizontal }}
                        slotProps={{
                            content: {
                                sx: {
                                    backgroundColor: '#ff7a00',
                                    color: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    px: 3,
                                    py: 0.5,
                                },
                            },
                        }}
                    />
                ),
            );
        }
    };

    const handleClick = (newState: SnackbarOrigin) => {
        setSnackbarState({ ...newState, open: true });
    };

    const handleClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Телефон',
            content: '+7 960 512-61-63',
            link: 'tel:+79605126163',
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'stroy-molot37@mail.ru',
            link: 'mailto:ivan.gusev04@mail.ru',
        },
        {
            icon: MapPin,
            title: 'Адрес',
            content: 'г. Иваново, Дальняя Балинская улица',
            link: null,
        },
        {
            icon: Clock,
            title: 'График работы',
            content: 'Пн-Пт: 9:00 - 18:00\nСб-Вс: выходной',
            link: null,
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl mb-6">Контакты</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Мы всегда рады новым проектам и готовы ответить на все ваши вопросы
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg mb-2 text-gray-900">{info.title}</h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-600 hover:text-orange-500 transition-colors"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl mb-6 text-gray-900">Как нас найти</h2>
                            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-[500px] flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.5739872953547!2d40.98168!3d57.00138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c6ee83bb1b2a5%3A0x3e5f1b9c6e8d4a7c!2z0JTQsNC70YzQvdGP0Y8g0JHQsNC70LjQvdGB0LrQsNGPINGD0LvQuNGG0LAsINCY0LLQsNC90L7QstC-LCDQmNCy0LDQvdC-0LLRgdC60LDRjyDQvtCx0Ls!5e0!3m2!1sru!2sru!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Карта офиса Строй-Молот"
                                ></iframe>
                            </div>
                            <div className="mt-6 bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl mb-3 text-gray-900">Как добраться</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Автобусы: №4, 11, 37 - остановка «Дальняя»</li>
                                    <li>• Троллейбусы: №8, 14 - остановка «Балинская»</li>
                                    <li>• Парковка для посетителей имеется</li>
                                    <li>• Удобный подъезд с главной дороги</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl mb-6 text-gray-900">Напишите нам</h2>
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate ref={form}>
                                <div>
                                    <label className="block text-sm mb-2 text-gray-700">Ваше имя *</label>
                                    <Input
                                        placeholder="Иван Иванов"
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value });
                                            if (nameError) setNameError('');
                                        }}
                                        required
                                    />
                                    {nameError && (
                                        <p className="text-red-500 text-sm mt-2" style={{ paddingTop: '10px' }}>
                                            {nameError}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-2 text-gray-700">Телефон *</label>
                                    <Input
                                        type="tel"
                                        placeholder="+7 (999) 123-45-67"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, phone: e.target.value });
                                            if (phoneError) setPhoneError('');
                                        }}
                                        required
                                    />
                                    {phoneError && (
                                        <p className="text-red-500 text-sm mt-1" style={{ paddingTop: '10px' }}>
                                            {phoneError}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-2 text-gray-700">Email *</label>
                                    <Input
                                        type="email"
                                        placeholder="example@mail.ru"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            if (emailError) setEmailError('');
                                        }}
                                        required
                                    />
                                    {emailError && (
                                        <p className="text-red-500 text-sm mt-2" style={{ paddingTop: '10px' }}>
                                            {emailError}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-2 text-gray-700">Сообщение *</label>
                                    <Textarea
                                        placeholder="Расскажите о вашем проекте..."
                                        value={formData.message}
                                        onChange={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                            if (messageError) setMessageError('');
                                        }}
                                        rows={6}
                                        required
                                    />
                                    {messageError && (
                                        <p className="text-red-500 text-sm" style={{ paddingTop: '10px' }}>
                                            {messageError}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                                >
                                    Отправить сообщение
                                </Button>

                                <p className="text-sm text-gray-500 text-center">
                                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl mb-6">Нужна консультация?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Позвоните нам или оставьте заявку, и наш специалист свяжется с вами в течение 15 минут в
                            рабочее время
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+79605126163">
                                <Button
                                    size="lg"
                                    className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                                >
                                    Позвонить сейчас
                                </Button>
                            </a>
                            <a href="mailto:ivan.gusev04@mail.ru">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent w-full sm:w-auto"
                                >
                                    Написать на email
                                </Button>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={3000}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical, horizontal }}
                                    slotProps={{
                                        content: {
                                            sx: {
                                                backgroundColor: '#ff7a00',
                                                color: 'white',
                                                borderRadius: 2,
                                                boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
                                                fontWeight: 500,
                                                fontSize: '16px',
                                                px: 3,
                                                py: 0.5,
                                            },
                                        },
                                    }}
                                    message={'Ваша заявка успешно отправлена!'}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
