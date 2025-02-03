import React from 'react';
import { 
  GiCrossedSwords,
  GiMountainRoad,
  GiTabletopPlayers,
  GiSpellBook,
  GiChainedHeart,
  GiLaurelCrown,
  GiMeditation
} from "react-icons/gi";

const LandingPage = ({ onNavigate }) => {
  const pages = [
    {
      id: 'combat',
      title: 'Combat',
      description: 'Master the art of battle with powerful phrases',
      icon: GiCrossedSwords,
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-800',
      hoverFrom: 'hover:from-red-400',
      hoverTo: 'hover:to-red-700'
    },
    {
      id: 'adventure',
      title: 'Adventure',
      description: 'Words for the journey ahead',
      icon: GiMountainRoad,
      gradientFrom: 'from-green-500',
      gradientTo: 'to-green-800',
      hoverFrom: 'hover:from-green-400',
      hoverTo: 'hover:to-green-700'
    },
    {
      id: 'social',
      title: 'Social',
      description: 'Navigate social interactions with grace',
      icon: GiTabletopPlayers,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-800',
      hoverFrom: 'hover:from-blue-400',
      hoverTo: 'hover:to-blue-700'
    },
    {
      id: 'ritual',
      title: 'Ritual & Magic',
      description: 'Channel the power of the arcane',
      icon: GiSpellBook,
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-800',
      hoverFrom: 'hover:from-purple-400',
      hoverTo: 'hover:to-purple-700'
    },
    {
      id: 'heritage',
      title: 'Heritage & Identity',
      description: 'Express your cultural background',
      icon: GiChainedHeart,
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-amber-800',
      hoverFrom: 'hover:from-amber-400',
      hoverTo: 'hover:to-amber-700'
    },
    {
      id: 'challenge',
      title: 'Challenge & Triumph',
      description: 'Words for moments of victory and defeat',
      icon: GiLaurelCrown,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-emerald-800',
      hoverFrom: 'hover:from-emerald-400',
      hoverTo: 'hover:to-emerald-700'
    },
    {
      id: 'rest',
      title: 'Rest & Reflection',
      description: 'Find peace in quiet moments',
      icon: GiMeditation,
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-cyan-800',
      hoverFrom: 'hover:from-cyan-400',
      hoverTo: 'hover:to-cyan-700'
    },
    {
      id: 'spells',
      title: 'Spells',
      description: 'Master your magical repertoire',
      icon: GiSpellBook,
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-indigo-900',
      hoverFrom: 'hover:from-indigo-400',
      hoverTo: 'hover:to-indigo-800'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Gauthak's Toolbox</h1>
          <p className="text-slate-400 text-lg">Choose your path...</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`p-6 bg-gradient-to-br ${page.gradientFrom} ${page.gradientTo} 
                         rounded-lg shadow-xl ${page.hoverFrom} ${page.hoverTo} 
                         transition-all group`}
            >
              <div className="flex flex-col items-center gap-4">
                <page.icon className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <h2 className="text-xl font-bold text-white mb-2">{page.title}</h2>
                  <p className="text-white/80">{page.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;