import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<string>('instagram');
  const [formData, setFormData] = useState({
    username: '',
    count: '',
    message: ''
  });

  const services = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      iconColor: 'text-white',
      description: 'Подписчики, лайки, просмотры'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: 'Music',
      color: 'bg-black',
      iconColor: 'text-white',
      description: 'Подписчики, лайки, просмотры'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: 'Play',
      color: 'bg-red-600',
      iconColor: 'text-white',
      description: 'Подписчики, лайки, просмотры'
    },
    {
      id: 'vk',
      name: 'ВКонтакте',
      icon: 'Users',
      color: 'bg-blue-600',
      iconColor: 'text-white',
      description: 'Подписчики, лайки, репосты'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заказ оформлен! Сервис: ${activeService}, Количество: ${formData.count}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-red/10 via-white to-brand-blue/10 font-open-sans">
      {/* Шапка */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-red to-brand-blue rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent">
                SocialBoost
              </h1>
            </div>
            <Badge variant="secondary" className="bg-brand-red/10 text-brand-red border-brand-red/20 animate-pulse-glow">
              БЕСПЛАТНО
            </Badge>
          </div>
        </div>
      </header>

      {/* Главный контент */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Герой */}
        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
            Накрутка для
            <span className="block bg-gradient-to-r from-brand-red via-brand-orange to-brand-blue bg-clip-text text-transparent">
              всех соцсетей
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и безопасная накрутка подписчиков, лайков и просмотров. 
            Полностью бесплатно для всех пользователей!
          </p>
        </section>

        {/* Выбор сервиса */}
        <section className="space-y-8">
          <h3 className="text-3xl font-montserrat font-bold text-center text-gray-900">
            Выберите соцсеть
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  activeService === service.id 
                    ? 'ring-2 ring-brand-red shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <Icon name={service.icon as any} className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat">{service.name}</CardTitle>
                    <CardDescription className="text-sm mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма заказа */}
        <section className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat text-gray-900">
                Оформить заказ
              </CardTitle>
              <CardDescription>
                Заполните форму для получения бесплатной накрутки
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="followers" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="followers" className="font-montserrat">Подписчики</TabsTrigger>
                  <TabsTrigger value="likes" className="font-montserrat">Лайки</TabsTrigger>
                  <TabsTrigger value="views" className="font-montserrat">Просмотры</TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Ссылка на профиль/пост
                    </label>
                    <Input
                      type="url"
                      placeholder="https://instagram.com/username"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Количество
                    </label>
                    <Input
                      type="number"
                      placeholder="1000"
                      min="1"
                      max="10000"
                      value={formData.count}
                      onChange={(e) => setFormData({...formData, count: e.target.value})}
                      className="h-12"
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Максимум 10,000 в день бесплатно
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-brand-red to-brand-blue hover:from-brand-red/90 hover:to-brand-blue/90 text-white font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="Zap" className="w-5 h-5 mr-2" />
                    Начать накрутку
                  </Button>
                </form>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Контакты и поддержка */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Техподдержка */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl font-montserrat">
                  <Icon name="Headphones" className="w-6 h-6 text-brand-red" />
                  <span>Техподдержка</span>
                </CardTitle>
                <CardDescription>
                  Круглосуточная поддержка пользователей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Опишите вашу проблему..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-montserrat">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            {/* Контакты */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl font-montserrat">
                  <Icon name="MessageCircle" className="w-6 h-6 text-brand-blue" />
                  <span>Контакты</span>
                </CardTitle>
                <CardDescription>
                  Свяжитесь с нами любым удобным способом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="Mail" className="w-5 h-5 text-brand-red" />
                    <span className="text-sm">support@socialboost.ru</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="MessageSquare" className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">@socialboost_support</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="Phone" className="w-5 h-5 text-green-500" />
                    <span className="text-sm">+7 (999) 123-45-67</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-blue rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold">SocialBoost</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 SocialBoost. Бесплатная накрутка для всех соцсетей.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;