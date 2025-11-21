import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Attraction {
  id: number;
  name: string;
  description: string;
  type: string;
  coordinates: { lat: number; lng: number };
  image: string;
  difficulty?: string;
}

interface Route {
  id: number;
  name: string;
  duration: string;
  difficulty: string;
  distance: string;
  description: string;
  attractions: number[];
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Национальный парк Таганай',
    description: 'Живописные горные хребты, каменные реки и уникальная природа Урала',
    type: 'Природа',
    coordinates: { lat: 55.25, lng: 59.80 },
    image: 'https://cdn.poehali.dev/projects/35f457b0-98cc-4258-a454-88fa5f149b91/files/b1b12e3c-e73f-4647-ac37-3bdca9825a50.jpg',
    difficulty: 'Средняя'
  },
  {
    id: 2,
    name: 'Озеро Тургояк',
    description: 'Одно из чистейших озёр России с кристально прозрачной водой',
    type: 'Природа',
    coordinates: { lat: 55.15, lng: 60.06 },
    image: 'https://cdn.poehali.dev/projects/35f457b0-98cc-4258-a454-88fa5f149b91/files/a9b82fd9-99e1-4d16-96e7-7283083fdec6.jpg',
    difficulty: 'Легкая'
  },
  {
    id: 3,
    name: 'Аркаим',
    description: 'Древнее городище бронзового века — «Уральский Стоунхендж»',
    type: 'История',
    coordinates: { lat: 52.65, lng: 59.56 },
    image: 'https://cdn.poehali.dev/projects/35f457b0-98cc-4258-a454-88fa5f149b91/files/1a463842-39da-4abd-b516-1298179d8ca8.jpg',
    difficulty: 'Легкая'
  },
  {
    id: 4,
    name: 'Ильменский заповедник',
    description: 'Уникальное месторождение минералов — более 270 видов',
    type: 'Природа',
    coordinates: { lat: 55.05, lng: 60.25 },
    image: '/placeholder.svg',
    difficulty: 'Легкая'
  },
  {
    id: 5,
    name: 'Игнатьевская пещера',
    description: 'Пещера с наскальными рисунками эпохи палеолита',
    type: 'История',
    coordinates: { lat: 54.95, lng: 58.45 },
    image: '/placeholder.svg',
    difficulty: 'Средняя'
  },
  {
    id: 6,
    name: 'Зюраткуль',
    description: 'Высокогорное озеро в окружении хребтов на высоте 724 м',
    type: 'Природа',
    coordinates: { lat: 54.93, lng: 59.18 },
    image: '/placeholder.svg',
    difficulty: 'Средняя'
  }
];

const routes: Route[] = [
  {
    id: 1,
    name: 'Горные вершины Урала',
    duration: '3 дня',
    difficulty: 'Сложная',
    distance: '45 км',
    description: 'Треккинг по национальному парку Таганай с восхождением на Двуглавую сопку и Круглицу. Ночевки в приютах.',
    attractions: [1]
  },
  {
    id: 2,
    name: 'Озёра Южного Урала',
    duration: '2 дня',
    difficulty: 'Легкая',
    distance: '30 км',
    description: 'Автомобильный маршрут по чистейшим озёрам: Тургояк, Увильды, Иткуль. Купание, рыбалка, отдых на природе.',
    attractions: [2, 4]
  },
  {
    id: 3,
    name: 'По следам древних цивилизаций',
    duration: '1 день',
    difficulty: 'Легкая',
    distance: '15 км',
    description: 'Поездка в Аркаим с посещением музея древних поселений и пешей прогулкой по городищу. Степные пейзажи.',
    attractions: [3]
  },
  {
    id: 4,
    name: 'Пещеры и водопады',
    duration: '2 дня',
    difficulty: 'Средняя',
    distance: '35 км',
    description: 'Исследование Игнатьевской пещеры с наскальными рисунками и посещение водопадов на реке Сим.',
    attractions: [5]
  },
  {
    id: 5,
    name: 'Высокогорный трекинг',
    duration: '4 дня',
    difficulty: 'Сложная',
    distance: '60 км',
    description: 'Восхождение на хребет Зюраткуль (1175 м) с обходом одноимённого озера. Панорамные виды на Уральские горы.',
    attractions: [6]
  }
];

const Index = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="MapPin" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Челябинская область</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#map" className="text-foreground hover:text-primary transition-colors font-medium">Карта</a>
              <a href="#attractions" className="text-foreground hover:text-primary transition-colors font-medium">Достопримечательности</a>
              <a href="#routes" className="text-foreground hover:text-primary transition-colors font-medium">Маршруты</a>
              <a href="#howto" className="text-foreground hover:text-primary transition-colors font-medium">Как добраться</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAwIDYwIE0gMCAwIEwgNjAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Compass" className="text-primary" size={20} />
            <span className="text-sm font-medium text-muted-foreground">Туристический гид</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Открой для себя Урал
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Уникальные природные ландшафты, древние городища и живописные маршруты Челябинской области
          </p>
          <Button size="lg" className="gap-2">
            <Icon name="Map" size={20} />
            Посмотреть карту
          </Button>
        </div>
      </section>

      <section id="map" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Интерактивная карта</h2>
            <p className="text-muted-foreground text-lg">Все достопримечательности на одной карте</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-100 via-blue-100 to-amber-100 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20" style={{ height: '600px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                <defs>
                  <pattern id="mapGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="rgba(0,0,0,0.1)" />
                  </pattern>
                </defs>
                <rect width="800" height="600" fill="url(#mapGrid)" />
                
                <path d="M 150 150 Q 200 100 300 150 L 400 100 L 500 180 L 600 150 L 650 200 L 680 280 L 650 400 L 580 480 L 450 520 L 300 500 L 200 450 L 150 350 Z" 
                      fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2"/>
                
                {attractions.map((attraction, index) => {
                  const x = 200 + (attraction.coordinates.lng - 58) * 80;
                  const y = 500 - (attraction.coordinates.lat - 52) * 100;
                  
                  return (
                    <g 
                      key={attraction.id} 
                      className="cursor-pointer transition-transform hover:scale-110"
                      onClick={() => setSelectedAttraction(attraction.id)}
                    >
                      <circle 
                        cx={x} 
                        cy={y} 
                        r="20" 
                        fill={selectedAttraction === attraction.id ? '#22c55e' : '#3b82f6'} 
                        stroke="white" 
                        strokeWidth="3"
                        className="drop-shadow-lg"
                      />
                      <text 
                        x={x} 
                        y={y + 5} 
                        textAnchor="middle" 
                        fill="white" 
                        fontSize="20" 
                        fontWeight="bold"
                      >
                        {index + 1}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              {selectedAttraction ? (
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{attractions.find(a => a.id === selectedAttraction)?.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{attractions.find(a => a.id === selectedAttraction)?.description}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{attractions.find(a => a.id === selectedAttraction)?.type}</Badge>
                      <Badge variant="outline">{attractions.find(a => a.id === selectedAttraction)?.difficulty}</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => setSelectedAttraction(null)}>
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center">Нажмите на точку на карте, чтобы узнать подробности</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="attractions" className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Достопримечательности</h2>
            <p className="text-muted-foreground text-lg">Лучшие места для посещения</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">{attraction.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span>{attraction.name}</span>
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={20} />
                  </CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="TrendingUp" size={16} />
                    <span>Сложность: {attraction.difficulty}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Готовые маршруты</h2>
            <p className="text-muted-foreground text-lg">Спланированные путешествия с описанием</p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="easy">Легкие</TabsTrigger>
              <TabsTrigger value="hard">Сложные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {routes.map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{route.name}</CardTitle>
                        <CardDescription className="text-base">{route.description}</CardDescription>
                      </div>
                      <Badge 
                        variant={route.difficulty === 'Легкая' ? 'secondary' : route.difficulty === 'Средняя' ? 'default' : 'destructive'}
                        className="flex-shrink-0"
                      >
                        {route.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Длительность</p>
                          <p className="font-semibold">{route.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Route" className="text-secondary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Дистанция</p>
                          <p className="font-semibold">{route.distance}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-accent" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Точек маршрута</p>
                          <p className="font-semibold">{route.attractions.length}</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Icon name="Navigation" size={16} />
                      Подробнее о маршруте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="easy" className="space-y-4">
              {routes.filter(r => r.difficulty === 'Легкая').map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{route.name}</CardTitle>
                        <CardDescription className="text-base">{route.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0">{route.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Длительность</p>
                          <p className="font-semibold">{route.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Route" className="text-secondary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Дистанция</p>
                          <p className="font-semibold">{route.distance}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-accent" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Точек маршрута</p>
                          <p className="font-semibold">{route.attractions.length}</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Icon name="Navigation" size={16} />
                      Подробнее о маршруте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="hard" className="space-y-4">
              {routes.filter(r => r.difficulty === 'Сложная').map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{route.name}</CardTitle>
                        <CardDescription className="text-base">{route.description}</CardDescription>
                      </div>
                      <Badge variant="destructive" className="flex-shrink-0">{route.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Длительность</p>
                          <p className="font-semibold">{route.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Route" className="text-secondary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Дистанция</p>
                          <p className="font-semibold">{route.distance}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-accent" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Точек маршрута</p>
                          <p className="font-semibold">{route.attractions.length}</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Icon name="Navigation" size={16} />
                      Подробнее о маршруте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="howto" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как добраться</h2>
            <p className="text-muted-foreground text-lg">Практическая информация для путешественников</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Plane" className="text-primary" size={32} />
                </div>
                <CardTitle>Самолётом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Международный аэропорт Челябинск принимает рейсы из крупных городов России
                </p>
                <p className="text-sm font-semibold">~2 часа из Москвы</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Train" className="text-secondary" size={32} />
                </div>
                <CardTitle>Поездом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Через Челябинск проходит Транссибирская магистраль с удобным сообщением
                </p>
                <p className="text-sm font-semibold">~30 часов из Москвы</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" className="text-accent" size={32} />
                </div>
                <CardTitle>Автомобилем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Федеральная трасса М5 «Урал» соединяет Челябинск с европейской частью России
                </p>
                <p className="text-sm font-semibold">~1800 км от Москвы</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" className="text-primary" size={24} />
                Полезные советы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><strong>Лучшее время:</strong> май-сентябрь для походов, декабрь-март для зимних видов спорта</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><strong>Снаряжение:</strong> удобная обувь, тёплая одежда, средства от насекомых</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><strong>Разрешения:</strong> для посещения некоторых заповедников нужны пропуска</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><strong>Связь:</strong> в горах и отдалённых районах может отсутствовать мобильная связь</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MapPin" size={24} />
                <h3 className="text-xl font-bold">Челябинская область</h3>
              </div>
              <p className="text-background/80">
                Откройте для себя уникальные природные и исторические достопримечательности Южного Урала
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#map" className="hover:text-background transition-colors">Карта</a></li>
                <li><a href="#attractions" className="hover:text-background transition-colors">Достопримечательности</a></li>
                <li><a href="#routes" className="hover:text-background transition-colors">Маршруты</a></li>
                <li><a href="#howto" className="hover:text-background transition-colors">Как добраться</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (351) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@chelyabinsk-tourism.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Челябинск</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2025 Туристический гид по Челябинской области. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
