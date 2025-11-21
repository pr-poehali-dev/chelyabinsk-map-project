import { useState } from 'react';
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
    description: 'Поездка в Аркаим с посещением музея древних поселений и пешей прогулкой по городищу',
    attractions: [3]
  }
];

const Index = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium tracking-tight">Челябинская область</h1>
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="#map" className="hover:opacity-60 transition-opacity">Карта</a>
              <a href="#attractions" className="hover:opacity-60 transition-opacity">Места</a>
              <a href="#routes" className="hover:opacity-60 transition-opacity">Маршруты</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="map" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-16 text-center tracking-tight">Карта достопримечательностей</h2>
            
            <div className="relative bg-gray-50 overflow-hidden border border-black" style={{ height: '700px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 1000 700" className="w-full h-full">
                  <defs>
                    <pattern id="minimalGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="1000" height="700" fill="url(#minimalGrid)" />
                  
                  <path d="M 150 180 L 300 150 L 450 120 L 600 140 L 750 160 L 820 240 L 850 380 L 800 520 L 650 600 L 450 630 L 280 590 L 180 480 L 150 320 Z" 
                        fill="none" stroke="black" strokeWidth="1.5" opacity="0.2"/>
                  
                  {attractions.map((attraction, index) => {
                    const x = 250 + (attraction.coordinates.lng - 58) * 90;
                    const y = 600 - (attraction.coordinates.lat - 52) * 110;
                    
                    return (
                      <g 
                        key={attraction.id} 
                        className="cursor-pointer"
                        onClick={() => setSelectedAttraction(attraction.id)}
                      >
                        <circle 
                          cx={x} 
                          cy={y} 
                          r={selectedAttraction === attraction.id ? 28 : 24}
                          fill="black"
                          className="transition-all"
                        />
                        <text 
                          x={x} 
                          y={y + 6} 
                          textAnchor="middle" 
                          fill="white" 
                          fontSize="18" 
                          fontWeight="400"
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
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-light">{attractions.findIndex(a => a.id === selectedAttraction) + 1}</span>
                        <h3 className="text-2xl font-light">{attractions.find(a => a.id === selectedAttraction)?.name}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{attractions.find(a => a.id === selectedAttraction)?.description}</p>
                      <div className="flex gap-3">
                        <span className="text-xs tracking-wider uppercase">{attractions.find(a => a.id === selectedAttraction)?.type}</span>
                        <span className="text-xs tracking-wider uppercase opacity-60">{attractions.find(a => a.id === selectedAttraction)?.difficulty}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedAttraction(null)}
                      className="text-2xl hover:opacity-60 transition-opacity"
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

      <section id="attractions" className="py-24 border-t">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center tracking-tight">Достопримечательности</h2>
          
          <div className="grid md:grid-cols-3 gap-px bg-black max-w-6xl mx-auto border border-black">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="mb-6">
                  <div className="text-4xl font-light mb-4">{attractions.findIndex(a => a.id === attraction.id) + 1}</div>
                  <h3 className="text-xl font-light mb-2 leading-tight">{attraction.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{attraction.description}</p>
                </div>
                <div className="flex gap-3 text-xs tracking-wider uppercase opacity-60">
                  <span>{attraction.type}</span>
                  <span>·</span>
                  <span>{attraction.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-24 border-t">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-16 text-center tracking-tight">Маршруты</h2>
          
          <div className="max-w-4xl mx-auto space-y-px bg-black border border-black">
            {routes.map((route, index) => (
              <div key={route.id} className="bg-white p-10 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-8">
                  <div className="text-5xl font-light opacity-20 flex-shrink-0">{index + 1}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-3 tracking-tight">{route.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{route.description}</p>
                    <div className="flex gap-8 text-sm">
                      <div>
                        <div className="text-xs tracking-wider uppercase opacity-60 mb-1">Длительность</div>
                        <div>{route.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs tracking-wider uppercase opacity-60 mb-1">Дистанция</div>
                        <div>{route.distance}</div>
                      </div>
                      <div>
                        <div className="text-xs tracking-wider uppercase opacity-60 mb-1">Сложность</div>
                        <div>{route.difficulty}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-16 mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 opacity-60">Контакты</h3>
                <div className="space-y-2 text-sm">
                  <p>+7 (351) 123-45-67</p>
                  <p>info@chelyabinsk-tourism.ru</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 opacity-60">Навигация</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#map" className="hover:opacity-60 transition-opacity">Карта</a></li>
                  <li><a href="#attractions" className="hover:opacity-60 transition-opacity">Достопримечательности</a></li>
                  <li><a href="#routes" className="hover:opacity-60 transition-opacity">Маршруты</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4 opacity-60">Информация</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Туристический гид по Челябинской области
                </p>
              </div>
            </div>
            
            <div className="border-t pt-8 text-center text-sm opacity-60">
              <p>&copy; 2025 Челябинская область</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
