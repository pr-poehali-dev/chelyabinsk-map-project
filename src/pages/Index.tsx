import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    description: 'Треккинг по национальному парку Таганай с восхождением на Двуглавую сопку и Круглицу',
    attractions: [1]
  },
  {
    id: 2,
    name: 'Озёра Южного Урала',
    duration: '2 дня',
    difficulty: 'Легкая',
    distance: '30 км',
    description: 'Автомобильный маршрут по чистейшим озёрам: Тургояк, Увильды, Иткуль',
    attractions: [2, 4]
  },
  {
    id: 3,
    name: 'По следам древних цивилизаций',
    duration: '1 день',
    difficulty: 'Легкая',
    distance: '15 км',
    description: 'Поездка в Аркаим с посещением музея древних поселений',
    attractions: [3]
  }
];

const Index = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Mountain" className="text-primary" size={28} />
              <h1 className="text-2xl font-semibold text-foreground">Челябинская область</h1>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#map" className="text-muted-foreground hover:text-primary transition-colors">Карта</a>
              <a href="#attractions" className="text-muted-foreground hover:text-primary transition-colors">Места</a>
              <a href="#routes" className="text-muted-foreground hover:text-primary transition-colors">Маршруты</a>
            </nav>
          </div>
        </div>
      </header>

      <section 
        id="hero" 
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://cdn.poehali.dev/projects/35f457b0-98cc-4258-a454-88fa5f149b91/files/b1b12e3c-e73f-4647-ac37-3bdca9825a50.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full mb-8 shadow-lg">
            <Icon name="Trees" className="text-primary" size={20} />
            <span className="text-sm font-medium text-foreground">Исследуй красоту Урала</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
            Дикая природа Урала
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
            Горные хребты, кристальные озёра и древние тайны в самом сердце России
          </p>
          <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl transition-all">
            <Icon name="Compass" size={22} />
            Открыть карту
          </Button>
        </div>
      </section>

      <section id="map" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-foreground">Интерактивная карта</h2>
              <p className="text-muted-foreground text-lg">Все достопримечательности на одной карте</p>
            </div>
            
            <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl overflow-hidden shadow-2xl border border-border" style={{ height: '650px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 1000 650" className="w-full h-full">
                  <defs>
                    <pattern id="topoGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="1.5" fill="rgba(0,0,0,0.08)" />
                    </pattern>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <rect width="1000" height="650" fill="url(#topoGrid)" />
                  
                  <path d="M 150 180 Q 250 140 350 160 L 500 130 L 650 150 L 780 200 L 850 320 L 820 480 L 700 590 L 500 620 L 300 580 L 180 450 L 150 280 Z" 
                        fill="rgba(72, 187, 120, 0.08)" 
                        stroke="rgba(72, 187, 120, 0.25)" 
                        strokeWidth="2"
                        strokeDasharray="5,5"/>
                  
                  {attractions.map((attraction, index) => {
                    const x = 280 + (attraction.coordinates.lng - 58) * 85;
                    const y = 580 - (attraction.coordinates.lat - 52) * 105;
                    
                    return (
                      <g 
                        key={attraction.id} 
                        className="cursor-pointer"
                        onClick={() => setSelectedAttraction(attraction.id)}
                        filter="url(#shadow)"
                      >
                        <circle 
                          cx={x} 
                          cy={y} 
                          r={selectedAttraction === attraction.id ? 32 : 26}
                          fill={selectedAttraction === attraction.id ? 'hsl(150, 45%, 45%)' : 'hsl(200, 60%, 50%)'}
                          className="transition-all"
                        />
                        <circle 
                          cx={x} 
                          cy={y} 
                          r={selectedAttraction === attraction.id ? 32 : 26}
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        />
                        <text 
                          x={x} 
                          y={y + 7} 
                          textAnchor="middle" 
                          fill="white" 
                          fontSize="20" 
                          fontWeight="600"
                          fontFamily="Montserrat"
                        >
                          {index + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              
              {selectedAttraction && (
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border p-8 shadow-2xl">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                          {attractions.findIndex(a => a.id === selectedAttraction) + 1}
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">{attractions.find(a => a.id === selectedAttraction)?.name}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{attractions.find(a => a.id === selectedAttraction)?.description}</p>
                      <div className="flex gap-3">
                        <Badge variant="secondary" className="text-sm">{attractions.find(a => a.id === selectedAttraction)?.type}</Badge>
                        <Badge variant="outline" className="text-sm">{attractions.find(a => a.id === selectedAttraction)?.difficulty}</Badge>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedAttraction(null)}
                      className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="attractions" className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Достопримечательности</h2>
            <p className="text-muted-foreground text-lg">Самые красивые места Южного Урала</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm">{attraction.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-3 text-xl">
                    <span>{attraction.name}</span>
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={22} />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="TrendingUp" size={18} />
                    <span>Сложность: <span className="font-semibold">{attraction.difficulty}</span></span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Туристические маршруты</h2>
            <p className="text-muted-foreground text-lg">Готовые путешествия с подробным описанием</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {routes.map((route) => (
              <Card key={route.id} className="hover:shadow-xl transition-all duration-300 border-border overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-3">{route.name}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{route.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={route.difficulty === 'Легкая' ? 'secondary' : 'destructive'}
                      className="flex-shrink-0 text-sm px-4 py-1"
                    >
                      {route.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Длительность</p>
                        <p className="font-semibold text-lg">{route.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name="Route" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Дистанция</p>
                        <p className="font-semibold text-lg">{route.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="MapPin" className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Точек</p>
                        <p className="font-semibold text-lg">{route.attractions.length}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Mountain" size={28} />
                  <h3 className="text-xl font-bold">Урал</h3>
                </div>
                <p className="text-background/80 leading-relaxed">
                  Природные богатства и древняя история Челябинской области
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
                <ul className="space-y-3 text-background/80">
                  <li><a href="#map" className="hover:text-background transition-colors">Карта</a></li>
                  <li><a href="#attractions" className="hover:text-background transition-colors">Достопримечательности</a></li>
                  <li><a href="#routes" className="hover:text-background transition-colors">Маршруты</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
                <ul className="space-y-3 text-background/80">
                  <li className="flex items-center gap-2">
                    <Icon name="Phone" size={18} />
                    <span>+7 (351) 123-45-67</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Mail" size={18} />
                    <span>info@ural-tourism.ru</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background/20 pt-8 text-center text-background/60">
              <p>&copy; 2025 Туристический гид по Челябинской области</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
