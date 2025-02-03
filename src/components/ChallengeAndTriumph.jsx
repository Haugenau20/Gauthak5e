import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiLaurelCrown,
  GiDiceTwentyFacesTwenty,
  GiSwordsPower,
  GiBreakingChain,
  GiMountainClimbing,
  GiTrophyCup
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const ChallengeAndTriumph = ({ onBack }) => {
  const triumphPhrases = {
    'Skill Checks': {
      'Athletics - Success': [
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ],
      'Athletics - Failure': [
        "Placeholder6",
        "Placeholder7",
        "Placeholder8",
        "Placeholder9",
        "Placeholder10"
      ],
      'Acrobatics - Success': [
        "Placeholder11",
        "Placeholder12",
        "Placeholder13",
        "Placeholder14",
        "Placeholder15"
      ],
      'Acrobatics - Failure': [
        "Placeholder76",
        "Placeholder77",
        "Placeholder78",
        "Placeholder79",
        "Placeholder80"
      ],
      'Investigation - Success': [
        "Placeholder81",
        "Placeholder82",
        "Placeholder83",
        "Placeholder84",
        "Placeholder85"
      ],
      'Investigation - Failure': [
        "Placeholder86",
        "Placeholder87",
        "Placeholder88",
        "Placeholder89",
        "Placeholder90"
      ],
      'General - Success': [
        "Placeholder91",
        "Placeholder92",
        "Placeholder93",
        "Placeholder94",
        "Placeholder95"
      ],
      'General - Failure': [
        "Placeholder96",
        "Placeholder97",
        "Placeholder98",
        "Placeholder99",
        "Placeholder100"
      ]
    },
    'Saving Throws': {
      'Strength - Success': [
        "Placeholder16",
        "Placeholder17",
        "Placeholder18",
        "Placeholder19",
        "Placeholder20"
      ],
      'Strength - Failure': [
        "Placeholder21",
        "Placeholder22",
        "Placeholder23",
        "Placeholder24",
        "Placeholder25"
      ],
      'Dexterity - Success': [
        "Placeholder26",
        "Placeholder27",
        "Placeholder28",
        "Placeholder29",
        "Placeholder30"
      ],
      'Dexterity - Failure': [
        "Placeholder31",
        "Placeholder32",
        "Placeholder33",
        "Placeholder34",
        "Placeholder35"
      ],
      'Constitution - Success': [
        "Placeholder36",
        "Placeholder37",
        "Placeholder38",
        "Placeholder39",
        "Placeholder40"
      ],
      'Constitution - Failure': [
        "Placeholder41",
        "Placeholder42",
        "Placeholder43",
        "Placeholder44",
        "Placeholder45"
      ],
      'Intelligence - Success': [
        "Placeholder46",
        "Placeholder47",
        "Placeholder48",
        "Placeholder49",
        "Placeholder50"
      ],
      'Intelligence - Failure': [
        "Placeholder51",
        "Placeholder52",
        "Placeholder53",
        "Placeholder54",
        "Placeholder55"
      ],
      'Wisdom - Success': [
        "Placeholder56",
        "Placeholder57",
        "Placeholder58",
        "Placeholder59",
        "Placeholder60"
      ],
      'Wisdom - Failure': [
        "Placeholder61",
        "Placeholder62",
        "Placeholder63",
        "Placeholder64",
        "Placeholder65"
      ],
      'Charisma - Success': [
        "Placeholder66",
        "Placeholder67",
        "Placeholder68",
        "Placeholder69",
        "Placeholder70"
      ],
      'Charisma - Failure': [
        "Placeholder71",
        "Placeholder72",
        "Placeholder73",
        "Placeholder74",
        "Placeholder75"
      ]
    },
    'Breaking Free': {
      'From Restraints': [
        "Placeholder31",
        "Placeholder32",
        "Placeholder33",
        "Placeholder34",
        "Placeholder35"
      ],
      'From Control': [
        "Placeholder36",
        "Placeholder37",
        "Placeholder38",
        "Placeholder39",
        "Placeholder40"
      ]
    },
    'Overcoming Odds': {
      'Against Many': [
        "Placeholder41",
        "Placeholder42",
        "Placeholder43",
        "Placeholder44",
        "Placeholder45"
      ],
      'Against the Impossible': [
        "Placeholder46",
        "Placeholder47",
        "Placeholder48",
        "Placeholder49",
        "Placeholder50"
      ]
    },
    'Personal Victories': {
      'Achievement': [
        "Placeholder51",
        "Placeholder52",
        "Placeholder53",
        "Placeholder54",
        "Placeholder55"
      ],
      'Growth': [
        "Placeholder56",
        "Placeholder57",
        "Placeholder58",
        "Placeholder59",
        "Placeholder60"
      ]
    }
  };

  const categoryIcons = {
    'Skill Checks': GiDiceTwentyFacesTwenty,
    'Saving Throws': GiSwordsPower,
    'Breaking Free': GiBreakingChain,
    'Overcoming Odds': GiMountainClimbing,
    'Personal Victories': GiTrophyCup
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (category, subcategory) => {
    const phrases = triumphPhrases[category][subcategory];
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    
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
            className="text-white hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiLaurelCrown className="text-emerald-400" />
            Challenge & Triumph
          </h1>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(triumphPhrases).map(([category, subcategories]) => {
            const IconComponent = categoryIcons[category];
            return (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-800 
                         rounded-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-emerald-200" />
                    <h2 className="text-lg font-medium text-white">{category}</h2>
                  </div>
                  <div className="space-y-2">
                    {Object.keys(subcategories).map(subcategory => (
                      <button
                        key={subcategory}
                        onClick={() => pickRandomPhrase(category, subcategory)}
                        disabled={isAnimating}
                        className="w-full p-2 bg-emerald-700/50 hover:bg-emerald-600/50 
                                 rounded text-white text-left transition-colors"
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-emerald-900/50 to-emerald-800/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-emerald-400 mb-2">
              {selectedCategory} - {selectedSubcategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeAndTriumph;