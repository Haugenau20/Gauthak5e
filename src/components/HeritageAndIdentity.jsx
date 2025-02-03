import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiMountainCave,
  GiChainedHeart,
  GiArena,
  GiLightningStorm,
  GiAncientSword,
  GiMountainRoad,
  GiChest,
  GiShieldcomb,
  GiThunderSkull,
  GiThorHammer,
  GiBroadsword,
  GiPerson
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const HeritageAndIdentity = ({ onBack }) => {
  const heritagePhrases = {
    'Mountain Tribe Background': {
      'Childhood Memories': [
        "Placeholder1 - about learning to climb mountains",
        "Placeholder2 - about tribal elders teaching",
        "Placeholder3 - about first storm experience",
        "Placeholder4 - about family traditions",
        "Placeholder5 - about mountain survival lessons"
      ],
      'Tribal Customs': [
        "Placeholder6 - about naming ceremonies",
        "Placeholder7 - about competition traditions",
        "Placeholder8 - about seasonal celebrations",
        "Placeholder9 - about respect for nature",
        "Placeholder10 - about tribal markings"
      ]
    },
    'Path to Enslavement': {
      'Captured by Raiders': [
        "Placeholder11 - about the day of capture",
        "Placeholder12 - about fighting back",
        "Placeholder13 - about being taken from mountains",
        "Placeholder14 - about long journey in chains",
        "Placeholder15 - about arrival at slave markets"
      ],
      'Early Arena Days': [
        "Placeholder16 - about first arena training",
        "Placeholder17 - about learning to survive",
        "Placeholder18 - about making first arena friend",
        "Placeholder19 - about first victory",
        "Placeholder20 - about earning reputation"
      ]
    },
    'Finding Thunder Faith': {
      'First Contact': [
        "Placeholder21 - about hearing Thor's voice",
        "Placeholder22 - about storm during gladiator fight",
        "Placeholder23 - about lightning sign",
        "Placeholder24 - about secret prayer",
        "Placeholder25 - about divine inspiration"
      ],
      'Growing Connection': [
        "Placeholder26 - about learning storm prayer",
        "Placeholder27 - about thunder meditation",
        "Placeholder28 - about weather omens",
        "Placeholder29 - about storm dreams",
        "Placeholder30 - about thunder revelation"
      ]
    },
    'Breaking Free': {
      'Escape Story': [
        "Placeholder31 - about planning escape",
        "Placeholder32 - about gathering allies",
        "Placeholder33 - about waiting for storm",
        "Placeholder34 - about breaking chains",
        "Placeholder35 - about first taste of freedom"
      ],
      'New Identity': [
        "Placeholder36 - about choosing new path",
        "Placeholder37 - about storm herald awakening",
        "Placeholder38 - about finding purpose",
        "Placeholder39 - about thunder calling",
        "Placeholder40 - about destiny realization"
      ]
    }
  };

  const categoryIcons = {
    'Mountain Tribe Background': GiMountainCave,
    'Path to Enslavement': GiChainedHeart,
    'Finding Thunder Faith': GiLightningStorm,
    'Breaking Free': GiBroadsword
  };

  const subcategoryIcons = {
    'Childhood Memories': GiPerson,
    'Tribal Customs': GiShieldcomb,
    'Captured by Raiders': GiAncientSword,
    'Early Arena Days': GiArena,
    'First Contact': GiThunderSkull,
    'Growing Connection': GiMountainRoad,
    'Escape Story': GiChest,
    'New Identity': GiThorHammer
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const pickRandomPhrase = (category, subcategory) => {
    const phrases = heritagePhrases[category][subcategory];
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setExpandedCategory(category);
    
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
            className="text-white hover:text-amber-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiChainedHeart className="text-amber-400" />
            Heritage & Identity
          </h1>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {Object.entries(heritagePhrases).map(([category, subcategories]) => {
            const IconComponent = categoryIcons[category];
            return (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-amber-600 to-amber-900 
                         rounded-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-amber-200" />
                    <h2 className="text-lg font-medium text-white">{category}</h2>
                  </div>
                  <div className="space-y-2">
                    {Object.keys(subcategories).map(subcategory => {
                      const SubIconComponent = subcategoryIcons[subcategory];
                      return (
                        <button
                          key={subcategory}
                          onClick={() => pickRandomPhrase(category, subcategory)}
                          disabled={isAnimating}
                          className="w-full p-2 bg-amber-700/50 hover:bg-amber-600/50 
                                   rounded text-white text-left transition-colors
                                   flex items-center gap-2"
                        >
                          {SubIconComponent && <SubIconComponent className="w-4 h-4" />}
                          {subcategory}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-amber-900/50 to-orange-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-amber-400 mb-2">
              {selectedCategory} - {selectedSubcategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}

        {/* Full List of Phrases for Selected Category */}
        {expandedCategory && (
          <div className="mt-8 p-6 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
              {categoryIcons[expandedCategory] && 
                React.createElement(categoryIcons[expandedCategory], { className: "w-6 h-6" })}
              {expandedCategory} - All Phrases:
            </h3>
            {Object.entries(heritagePhrases[expandedCategory]).map(([subcategory, phrases]) => (
              <div key={subcategory} className="mb-6 last:mb-0">
                <h4 className="text-lg font-semibold text-amber-300 mb-3 flex items-center gap-2">
                  {subcategoryIcons[subcategory] && 
                    React.createElement(subcategoryIcons[subcategory], { className: "w-5 h-5" })}
                  {subcategory}
                </h4>
                <div className="space-y-3">
                  {phrases.map((phrase, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded ${phrase === selectedPhrase 
                        ? 'bg-amber-900/50 text-amber-200' 
                        : 'bg-slate-700 text-white'}`}
                    >
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeritageAndIdentity;