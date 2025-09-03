import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-heading font-bold text-primary">
                Автошкола №1
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
                <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
                <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-primary">8 999 999 99 99</span>
              <Button variant="secondary" size="sm">
                Записаться на занятие
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold mb-6 leading-tight">
                Автошкола №1 <br />
                <span className="text-secondary">в Перми</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Профессиональное обучение вождению с 1995 года. 
                Получите права категорий A, B, C, D с гарантией качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши адреса
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <img 
                    src="/img/4599ebcd-e145-46a1-aa4c-fec4df080014.jpg" 
                    alt="Интерьер автомобиля" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Обучение на все категории транспортных средств
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "A", title: "Права категории А", description: "Мотоциклы, мопеды, скутеры", price: "15 000 ₽" },
              { category: "B", title: "Права категории B", description: "Легковые автомобили", price: "25 000 ₽" },
              { category: "C", title: "Права категории C", description: "Грузовые автомобили", price: "35 000 ₽" },
              { category: "D", title: "Права категории D", description: "Автобусы", price: "40 000 ₽" }
            ].map((service) => (
              <Card key={service.category} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{service.category}</span>
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-4">{service.price}</div>
                  <Button className="w-full">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Марки автомобилей
            </h2>
            <p className="text-xl text-gray-600">
              Современный автопарк для комфортного обучения
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["Toyota", "Volkswagen", "Hyundai", "KIA", "Skoda", "Nissan"].map((brand) => (
              <div key={brand} className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors">
                  <Icon name="Car" size={32} className="text-gray-600" />
                </div>
                <p className="font-medium text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Почему мы
            </h2>
            <p className="text-xl opacity-90">
              Преимущества обучения в нашей автошколе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Опытные инструкторы", description: "Более 15 лет стажа", icon: "Award" },
              { title: "Современные автомобили", description: "Новые машины 2022-2023 года", icon: "Car" },
              { title: "Гибкий график", description: "Занятия в удобное время", icon: "Clock" },
              { title: "Высокая сдача", description: "98% учеников сдают с первого раза", icon: "Trophy" }
            ].map((advantage) => (
              <Card key={advantage.title} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl">{advantage.title}</CardTitle>
                  <CardDescription className="text-gray-100">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Процесс обучения
            </h2>
            <p className="text-xl text-gray-600">
              Пошаговый план получения водительского удостоверения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Запись", description: "Подача документов и оплата" },
              { step: "2", title: "Теория", description: "Изучение ПДД и теоретических основ" },
              { step: "3", title: "Практика", description: "Вождение с инструктором" },
              { step: "4", title: "Экзамены", description: "Сдача в ГИБДД" },
              { step: "5", title: "Права", description: "Получение удостоверения" }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Сотрудники
            </h2>
            <p className="text-xl text-gray-600">
              Наши опытные инструкторы и преподаватели
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Иван Петров", position: "Главный инструктор", experience: "20 лет опыта" },
              { name: "Анна Сидорова", position: "Инструктор категории B", experience: "15 лет опыта" },
              { name: "Михаил Волков", position: "Инструктор категории C", experience: "18 лет опыта" },
              { name: "Елена Козлова", position: "Преподаватель теории", experience: "12 лет опыта" }
            ].map((instructor) => (
              <Card key={instructor.name} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/img/3e0f2a43-3db1-4597-baa3-d0925954e4a8.jpg" 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading">{instructor.name}</CardTitle>
                  <CardDescription>{instructor.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{instructor.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Записаться на пробное занятие
            </h2>
            <p className="text-xl text-gray-600">
              Получите бесплатную консультацию специалиста
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 999-99-99" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Категория прав</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Выберите категорию</option>
                    <option value="A">Категория A</option>
                    <option value="B">Категория B</option>
                    <option value="C">Категория C</option>
                    <option value="D">Категория D</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Дополнительная информация" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            {/* Addresses */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Адреса классов</CardTitle>
                  <CardDescription>Выберите удобное для вас расположение</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { address: "ул. Ленина, 123", phone: "+7 (342) 123-45-67", time: "Пн-Пт: 9:00-20:00" },
                    { address: "ул. Мира, 456", phone: "+7 (342) 765-43-21", time: "Пн-Сб: 8:00-21:00" },
                    { address: "ул. Советская, 789", phone: "+7 (342) 987-65-43", time: "Ежедневно: 9:00-19:00" }
                  ].map((location, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                        <div>
                          <p className="font-semibold">{location.address}</p>
                          <p className="text-gray-600">{location.phone}</p>
                          <p className="text-sm text-gray-500">{location.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="Map" size={48} className="mx-auto mb-2" />
                      <p>Карта с расположением</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-heading font-bold mb-4">
                Автошкола №1
              </div>
              <p className="text-gray-300 mb-4">
                Профессиональное обучение вождению в Перми с 1995 года
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Категория A</li>
                <li>Категория B</li>
                <li>Категория C</li>
                <li>Категория D</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>+7 (342) 123-45-67</p>
                <p>info@avtoshkola1.ru</p>
                <p>г. Пермь, ул. Ленина, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Автошкола №1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}