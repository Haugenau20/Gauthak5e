import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiMountainRoad,
  GiCompass,
  GiMountainClimbing,
  GiLightningStorm,
  GiPathDistance,
  GiChest,
  GiSun,
  GiSunCloud,
  GiRaining,
  GiEclipse,
  GiSnowing,
  GiHolyHandGrenade,
  GiUndergroundCave,
  GiVillage,
  GiAncientRuins,
  GiCaveEntrance,
  GiThunderStruck
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const Adventure = ({ onBack }) => {
  const adventurePhrases = {
    'Traveling': [
      "Vinden viser vejen fremad!",
      "Stormens børn vandrer altid!",
      "Hvor tordenen går, følger jeg!",
      "Fri som stormen selv!",
      "Ingen lænker holder mig længere!",
      "Ad tordnens veje går vi!",
      "Lad rejsen være som vinden - ustoppelig!",
      "Thor's ånd leder os frem!",
      "Stormens kraft driver os fremad!",
      "Fri til at vandre, fri til at kæmpe!"
    ],
    'Exploration': [
      "Placeholder1",
      "Placeholder2",
      "Placeholder3",
      "Placeholder4",
      "Placeholder5"
    ],
    'Entering New Locations': {
      'Sacred Sites': [
        "Selv mørket frygter tordenen!",
        "Lad lynet oplyse vores vej!",
        "Thor's lys vil guide os!",
        "Placeholder34",
        "Placeholder35"
      ],
      'Dark Places': [
        "Mørket kan ikke gemme sig for storm!",
        "Selv huler ryster når torden kommer!",
        "Placeholder36",
        "Placeholder37",
        "Placeholder38"
      ],
      'Settlements': [
        "Placeholder39",
        "Placeholder40",
        "Placeholder41",
        "Placeholder42",
        "Placeholder43"
      ],
      'Ancient Ruins': [
        "Placeholder44",
        "Placeholder45",
        "Placeholder46",
        "Placeholder47",
        "Placeholder48"
      ],
      'Natural Caverns': [
        "Placeholder49",
        "Placeholder50",
        "Placeholder51",
        "Placeholder52",
        "Placeholder53"
      ]
    },
    'Discovering Treasures': [
      "Placeholder6",
      "Placeholder7",
      "Placeholder8",
      "Placeholder9",
      "Placeholder10"
    ],
    'Overcoming Obstacles': [
      "Placeholder11",
      "Placeholder12",
      "Placeholder13",
      "Placeholder14",
      "Placeholder15"
    ],
    'Natural Phenomena': {
      'Thunderstorm': [
        "Placeholder16",
        "Placeholder17",
        "Placeholder18"
      ],
      'Sunny Day': [
        "Placeholder19",
        "Placeholder20",
        "Placeholder21"
      ],
      'Rain': [
        "Placeholder22",
        "Placeholder23",
        "Placeholder24"
      ],
      'Snow': [
        "Placeholder25",
        "Placeholder26",
        "Placeholder27"
      ],
      'Eclipse': [
        "Placeholder28",
        "Placeholder29",
        "Placeholder30"
      ],
      'Cloudy Day': [
        "Placeholder31",
        "Placeholder32",
        "Placeholder33"
      ]
    }
  };

  const locationIcons = {
    'Sacred Sites': GiHolyHandGrenade,
    'Dark Places': GiUndergroundCave,
    'Settlements': GiVillage,
    'Ancient Ruins': GiAncientRuins,
    'Natural Caverns': GiCaveEntrance
  };

  const categoryIcons = {
    'Traveling': GiPathDistance,
    'Exploration': GiCompass,
    'Entering New Locations': GiHolyHandGrenade,
    'Discovering Treasures': GiChest,
    'Overcoming Obstacles': GiMountainClimbing,
    'Natural Phenomena': GiLightningStorm
  };

  const weatherIcons = {
    'Thunderstorm': GiThunderStruck,
    'Sunny Day': GiSun,
    'Rain': GiRaining,
    'Snow': GiSnowing,
    'Eclipse': GiEclipse,
    'Cloudy Day': GiSunCloud
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (category, weather = null) => {
    let phrases;
    if (weather) {
      phrases = adventurePhrases[category][weather];
    } else {
      phrases = adventurePhrases[category];
    }
    
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedWeather(weather);
    
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setSelectedPhrase(randomPhrase);
      flashCount++;
      
      if (flashCount >= 10) {
        clearInterval(flashInterval);
        setIsAnimating(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <LightningOverlay isAnimating={isAnimating} />
      <div className="container mx-auto max-w-4xl px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="text-white hover:text-green-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiMountainRoad className="text-green-400" />
            Adventure Phrases
          </h1>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(adventurePhrases).map(([category, content]) => {
            const IconComponent = categoryIcons[category];
            if (category !== 'Natural Phenomena' && category !== 'Entering New Locations') {
              return (
                <button
                  key={category}
                  onClick={() => pickRandomPhrase(category)}
                  disabled={isAnimating}
                  className="p-6 bg-gradient-to-br from-green-600 to-green-900 
                           hover:from-green-500 hover:to-green-800 
                           rounded-lg transition-all group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <IconComponent className="w-8 h-8 text-green-200 
                                           group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white text-center">{category}</span>
                  </div>
                </button>
              );
            }
            return null;
          })}
        </div>

        {/* Locations Section */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <GiHolyHandGrenade className="w-6 h-6" />
            Entering New Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(adventurePhrases['Entering New Locations']).map(([location, _]) => {
              const LocationIcon = locationIcons[location];
              return (
                <button
                  key={location}
                  onClick={() => pickRandomPhrase('Entering New Locations', location)}
                  disabled={isAnimating}
                  className="p-4 bg-gradient-to-br from-green-700 to-emerald-900 
                           hover:from-green-600 hover:to-emerald-800 
                           rounded-lg transition-all text-white font-medium
                           flex items-center gap-2 justify-center"
                >
                  <LocationIcon className="w-5 h-5" />
                  {location}
                </button>
              );
            })}
          </div>
        </div>

        {/* Natural Phenomena Section */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <GiLightningStorm className="w-6 h-6" />
            Natural Phenomena
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(adventurePhrases['Natural Phenomena']).map(([weather, _]) => {
              const WeatherIcon = weatherIcons[weather];
              return (
                <button
                  key={weather}
                  onClick={() => pickRandomPhrase('Natural Phenomena', weather)}
                  disabled={isAnimating}
                  className="p-4 bg-gradient-to-br from-green-700 to-blue-900 
                           hover:from-green-600 hover:to-blue-800 
                           rounded-lg transition-all text-white font-medium
                           flex items-center gap-2 justify-center"
                >
                  <WeatherIcon className="w-5 h-5" />
                  {weather}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-green-900/50 to-blue-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-green-400 mb-2">
              {selectedWeather ? `${selectedCategory} - ${selectedWeather}` : selectedCategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adventure;