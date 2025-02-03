import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiSwordsPower,
  GiCrossedSwords,
  GiCrossedSlashes,
  GiImpactPoint,
  GiSpellBook,
  GiSwordman,
  GiTrophyCup,
  GiLightningTree
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const Combat = ({ onBack, onViewSpells }) => {
  // Reuse existing phrases from EnteringBattle.txt
  const combatPhrases = {
    'Entering Battle': [
      "Torden kalder, og jeg svarer!",
      "Lad storm og stål synge sammen!",
      "Thor's vrede er min styrke!",
      "Som lynet slår, således gør jeg!",
      "Arena eller slagmark - sejren er min!",
      "Mærk naturens vrede!",
      "Storm i blodet, torden i sjælen!",
      "Jeg er stormen der kommer!",
      "Lad kampens torden rulle!",
      "Fra arenakæmper til Thors hammer!"
    ],
    'During Combat Actions': [
      "Placeholder1",
      "Placeholder2",
      "Placeholder3",
      "Placeholder4",
      "Placeholder5"
    ],
    'Critical Hits/Special Moves': [
      "Placeholder6",
      "Placeholder7",
      "Placeholder8",
      "Placeholder9",
      "Placeholder10"
    ],
    'Dealing Damage': [
      "Smag tordengudens kraft!",
      "Dette er mere end gladiatorkraft!",
      "Lad lynet tale!",
      "Mærk naturens dom!",
      "Thor's hammer knuser dig!",
      "Storm og stål bliver ét!",
      "Dette er ægte tordenkraft!",
      "Føl himlens vrede!",
      "Ingen kæder kan holde denne storm!",
      "Din skæbne er forseglet af lynet!"
    ],
    'Battle Victory': [
      "Placeholder11",
      "Placeholder12",
      "Placeholder13",
      "Placeholder14",
      "Placeholder15"
    ],
    'Javelin of Lightning': [
      "Zeus Juice",
      "Pew Pew",
      "Blitzgrød",
      "Kildepind",
      "Freedom Thunder",
      "Tordenfar",
      "Thors Finger"
    ],
    'Combat Oriented Spells': {
      'Channel Divinity': [
        "Ved Thors mægtige hammer, jeg påkalder din kraft!",
        "Lad tordenen være mit vidne!",
        "Guddommelig storm, hør mit kald!",
        "Jeg kanaliserer lysets og stormens kraft",
        "Thor, lad din vilje strømme gennem mig!"
      ],
      'Wrath of the Storm': [
        "Mærk himlens vrede!",
        "Tordenen er min at befale!",
        "Lad stormen straffe dig!",
        "Ved Thors lynild, brænd!",
        "Himlen selv fordømmer dig!"
      ],
      'Thunderwave': [
        "Blæs som en storm i natten!",
        "Flyv væk med vinden!",
        "Mærk presset fra min torden!",
        "Thor kaster dig tilbage!",
        "La' mig vise dig stormens kraft!"
      ],
      'Shatter': [
        "Knust af himlens kraft!",
        "Hør tordenens sang!",
        "Splintres som glas i stormen!",
        "Mærk lydens rasende kraft!",
        "Ved Thors brøl, knuses du!"
      ],
      'Call Lightning': [
        "Thor, send din vrede!",
        "Dans, himmelske lyn!",
        "Stormens pile, find dit mål!",
        "Himlens vrede er min at kalde!",
        "Ved min hånd, lyner falder!"
      ],
      'Spirit Guardians': [
        "Thors krigere, beskyt os!",
        "Dans omkring mig, stormens ånder!",
        "Kæmp ved min side, himlens vogtere!",
        "Ved tordenen, omring mig!",
        "Lysets og stormens væsner, frem!"
      ]
    }
  };

  const categoryIcons = {
    'Entering Battle': GiSwordsPower,
    'During Combat Actions': GiSwordman,
    'Critical Hits/Special Moves': GiCrossedSlashes,
    'Dealing Damage': GiImpactPoint,
    'Battle Victory': GiTrophyCup,
    'Javelin of Lightning': GiLightningTree,
    'Combat Oriented Spells': GiSpellBook
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSpell, setSelectedSpell] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);


  const pickRandomPhrase = (category, spell = null) => {
    let phrases;
    if (spell) {
      phrases = combatPhrases[category][spell];
    } else {
      phrases = combatPhrases[category];
    }
    
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedSpell(spell);
    
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
            className="text-white hover:text-red-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiCrossedSwords className="text-red-400" />
            Combat Phrases
          </h1>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(combatPhrases).map(([category, content]) => {
            const IconComponent = categoryIcons[category];
            if (category !== 'Combat Oriented Spells') {
                // Special styling for Javelin of Lightning
                if (category === 'Javelin of Lightning') {
                  return (
                    <button
                      key={category}
                      onClick={() => pickRandomPhrase(category)}
                      disabled={isAnimating}
                      className="relative p-6 bg-gradient-to-br from-yellow-400 to-amber-700
                               hover:from-yellow-300 hover:to-amber-600
                               rounded-lg transition-all group overflow-hidden
                               hover:shadow-[0_0_15px_3px_rgba(234,179,8,0.6)]
                               border border-yellow-400/30
                               hover:border-yellow-300"
                    >
                      {/* Animated border effect */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-amber-400 opacity-0 
                                      group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/40 to-transparent opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                      </div>
                      
                      {/* Lightning effects on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-yellow-200 
                                      transform -skew-x-12 animate-pulse" />
                        <div className="absolute top-0 right-1/4 w-px h-full bg-yellow-200 
                                      transform skew-x-12 animate-pulse" />
                      </div>
                      
                      <div className="relative flex flex-col items-center gap-3">
                        <IconComponent className="w-8 h-8 text-yellow-100
                                               group-hover:scale-110 transition-transform
                                               animate-pulse" />
                        <span className="text-lg font-medium text-white text-center 
                                       drop-shadow-[0_0_4px_rgba(234,179,8,0.5)]">
                          {category}
                        </span>
                      </div>
                    </button>
                  );
                }
                
                // Default styling for other categories
                return (
                  <button
                    key={category}
                    onClick={() => pickRandomPhrase(category)}
                    disabled={isAnimating}
                    className="p-6 bg-gradient-to-br from-red-600 to-red-900 
                             hover:from-red-500 hover:to-red-800 
                             rounded-lg transition-all group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent className="w-8 h-8 text-red-200 
                                             group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-medium text-white text-center">{category}</span>
                    </div>
                  </button>
                );
            }
            return null;
          })}
        </div>

        {/* Combat Spells Section */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <GiSpellBook className="w-6 h-6" />
            Combat Oriented Spells
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(combatPhrases['Combat Oriented Spells']).map(([spell, _]) => (
              <button
                key={spell}
                onClick={() => pickRandomPhrase('Combat Oriented Spells', spell)}
                disabled={isAnimating}
                className="p-4 bg-gradient-to-br from-red-700 to-purple-900 
                         hover:from-red-600 hover:to-purple-800 
                         rounded-lg transition-all text-white font-medium"
              >
                {spell}
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => onViewSpells()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-500 hover:to-blue-500 
                       rounded-lg text-white font-medium transition-all
                       flex items-center gap-2 mx-auto"
            >
              <GiSpellBook className="w-5 h-5" />
              View All Spells
            </button>
          </div>
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-red-900/50 to-purple-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-red-400 mb-2">
              {selectedSpell ? `${selectedCategory} - ${selectedSpell}` : selectedCategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Combat;