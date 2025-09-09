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
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
                <a href="#documents" className="text-gray-700 hover:text-primary transition-colors">Документы</a>
                <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
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

      {/* About Company Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                С 1995 года мы являемся лидером в области подготовки водителей в Перми. 
                За 29 лет работы через нашу автошколу прошли более 50 000 учеников, 
                большинство из которых сдали экзамены с первого раза.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Мы гордимся нашей репутацией и продолжаем развиваться, внедряя 
                современные методы обучения и обновляя автопарк.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">29</div>
                  <p className="text-gray-600">лет на рынке</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50k+</div>
                  <p className="text-gray-600">выпускников</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                  <p className="text-gray-600">сдача с 1 раза</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">45</div>
                  <p className="text-gray-600">инструкторов</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Icon name="Award" size={16} className="mr-2" />
                  Лицензия ГИБДД
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Страховка учеников
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Icon name="Users" size={16} className="mr-2" />
                  Опытные кадры
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/img/3e0f2a43-3db1-4597-baa3-d0925954e4a8.jpg" 
                    alt="Директор автошколы"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2">Владимир Петрович</h3>
                    <p className="text-gray-600 mb-4">Директор автошколы</p>
                    <p className="text-gray-700 italic">
                      "Наша цель — не просто научить водить, а воспитать ответственных 
                      участников дорожного движения"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Наши документы
            </h2>
            <p className="text-xl text-gray-600">
              Официальные лицензии и сертификаты автошколы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="FileCheck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Лицензия на обучение</h3>
                    <p className="text-sm text-gray-500">№ 12345 от 15.03.2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Лицензия на осуществление образовательной деятельности по подготовке водителей
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Сертификат ГИБДД</h3>
                    <p className="text-sm text-gray-500">№ 67890 от 22.01.2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Сертификат соответствия требованиям Госавтоинспекции
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Building" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Свидетельство о регистрации</h3>
                    <p className="text-sm text-gray-500">ОГРН 1165958053210</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Официальная регистрация юридического лица
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Car" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Паспорта автомобилей</h3>
                    <p className="text-sm text-gray-500">35 единиц автопарка</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  ПТС и свидетельства о регистрации всех учебных автомобилей
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Посмотреть список
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="GraduationCap" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Программы обучения</h3>
                    <p className="text-sm text-gray-500">Утверждено 01.09.2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Официальные программы подготовки водителей категорий A, B, C, D
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="FileText" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">Устав и положения</h3>
                    <p className="text-sm text-gray-500">Обновлено 12.06.2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Устав организации, положения об обучении и внутренние регламенты
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <Card className="inline-block bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Info" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Все наши документы прошли государственную проверку
                </h3>
                <p className="text-gray-600">
                  Мы работаем полностью легально и имеем все необходимые разрешения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Отзывы наших учеников
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас выпускники автошколы
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center space-x-1 mr-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9</span>
              <span className="text-gray-500 ml-2">(из 286 отзывов)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/3e0f2a43-3db1-4597-baa3-d0925954e4a8.jpg" 
                    alt="Анна Смирнова"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Анна Смирнова</h4>
                    <p className="text-sm text-gray-500">Категория B, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  "Отличная автошкола! Инструктор Иван Петрович очень терпеливый и опытный. 
                  Сдала с первого раза без проблем! Рекомендую всем!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/4599ebcd-e145-46a1-aa4c-fec4df080014.jpg" 
                    alt="Михаил Кузнецов"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Михаил Кузнецов</h4>
                    <p className="text-sm text-gray-500">Категория C, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  "Получал категорию C. Очень доволен обучением! Опытные инструкторы, 
                  современные грузовики. Цены адекватные, качество на высоте!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/3e0f2a43-3db1-4597-baa3-d0925954e4a8.jpg" 
                    alt="Елена Попова"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Елена Попова</h4>
                    <p className="text-sm text-gray-500">Категория B, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  "Обучалась в другой автошколе, но не смогла сдать. Перешла сюда - 
                  и сразу почувствовала разницу. Получила права через месяц!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/4599ebcd-e145-46a1-aa4c-fec4df080014.jpg" 
                    alt="Александр Волков"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Александр Волков</h4>
                    <p className="text-sm text-gray-500">Категория A, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <Icon name="Star" size={16} className="text-gray-300" />
                  </div>
                </div>
                <p className="text-gray-700">
                  "Хотел получить мотоправа. Инструктор по мотоциклам - профессионал своего дела. 
                  Научил водить уверенно и безопасно. Мотоциклы в хорошем состоянии."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/3e0f2a43-3db1-4597-baa3-d0925954e4a8.jpg" 
                    alt="Мария Лебедева"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Мария Лебедева</h4>
                    <p className="text-sm text-gray-500">Категория B, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  "Очень боялась садиться за руль, но здесь меня очень поддержали. 
                  Начала с нуля, а через 2 месяца уже уверенно езжу по городу!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/4599ebcd-e145-46a1-aa4c-fec4df080014.jpg" 
                    alt="Дмитрий Новиков"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Дмитрий Новиков</h4>
                    <p className="text-sm text-gray-500">Категория D, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  "Обучался на водителя автобуса. Полный курс, сразу после обучения 
                  устроился на работу. Спасибо за качественную подготовку!"
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Посмотреть все отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Получите консультацию специалиста
            </h2>
            <p className="text-xl opacity-90">
              Ответим на все ваши вопросы и поможем выбрать подходящий курс обучения
            </p>
          </div>
          
          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="consult-name">Ваше имя *</Label>
                    <Input id="consult-name" placeholder="Введите ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consult-phone">Телефон *</Label>
                    <Input id="consult-phone" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="consult-category">Интересующая категория</Label>
                  <select id="consult-category" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Выберите категорию</option>
                    <option value="A">Категория A — Мотоциклы</option>
                    <option value="B">Категория B — Легковые автомобили</option>
                    <option value="C">Категория C — Грузовые автомобили</option>
                    <option value="D">Категория D — Автобусы</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="consult-time">Удобное время для звонка</Label>
                  <select id="consult-time" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Выберите время</option>
                    <option value="morning">Утром (9:00 - 12:00)</option>
                    <option value="afternoon">Днем (12:00 - 17:00)</option>
                    <option value="evening">Вечером (17:00 - 20:00)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="consult-question">Ваш вопрос</Label>
                  <Textarea 
                    id="consult-question" 
                    placeholder="Расскажите, что вас интересует: цены, расписание, документы..." 
                    rows={4}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="flex-1">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Заказать звонок
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Быстрый ответ</h3>
              <p className="opacity-90">Перезвоним в течение 5 минут</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Персональный подход</h3>
              <p className="opacity-90">Подберем программу под ваши цели</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Бонусы</h3>
              <p className="opacity-90">Скидки и подарки для новых учеников</p>
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