import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiMeditation,
  GiCampfire,
  GiCampingTent,
  GiSleepingBag,
  GiSandsOfTime,
  GiBookmarklet,
  GiTalk,
  GiTeamIdea,
  GiSunrise,
  GiCompass,
  GiTabletopPlayers,
  GiSparkSpirit,
  GiBreakingChain,
  GiPathDistance,
  GiScrollUnfurled,
  GiBookCover,
  GiLevelThree,
  GiShakingHands,
  GiTargetPrize,
  GiTriorb,
  GiNightSleep
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const RestAndReflection = ({ onBack }) => {
  const reflectionPhrases = {
    'Camp Dialogue': {
      'Evening Conversations': [
        "Placeholder1",
        "Placeholder2",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ],
      'Sharing Stories': [
        "Placeholder6",
        "Placeholder7",
        "Placeholder8",
        "Placeholder9",
        "Placeholder10"
      ],
      'Planning Ahead': [
        "Placeholder11",
        "Placeholder12",
        "Placeholder13",
        "Placeholder14",
        "Placeholder15"
      ]
    },
    'Long Rest Moments': {
      'Before Sleep': [
        "Placeholder16",
        "Placeholder17",
        "Placeholder18",
        "Placeholder19",
        "Placeholder20"
      ],
      'Morning Reflections': [
        "Placeholder21",
        "Placeholder22",
        "Placeholder23",
        "Placeholder24",
        "Placeholder25"
      ],
      'Dream Sharing': [
        "Placeholder26",
        "Placeholder27",
        "Placeholder28",
        "Placeholder29",
        "Placeholder30"
      ]
    },
    'Character Development': {
      'Personal Growth': [
        "Placeholder31",
        "Placeholder32",
        "Placeholder33",
        "Placeholder34",
        "Placeholder35"
      ],
      'Overcoming Past': [
        "Placeholder36",
        "Placeholder37",
        "Placeholder38",
        "Placeholder39",
        "Placeholder40"
      ],
      'Future Aspirations': [
        "Placeholder41",
        "Placeholder42",
        "Placeholder43",
        "Placeholder44",
        "Placeholder45"
      ]
    },
    'Story Sharing': {
      'Personal Tales': [
        "Placeholder46",
        "Placeholder47",
        "Placeholder48",
        "Placeholder49",
        "Placeholder50"
      ],
      'Adventure Recap': [
        "Placeholder51",
        "Placeholder52",
        "Placeholder53",
        "Placeholder54",
        "Placeholder55"
      ],
      'Lessons Learned': [
        "Placeholder56",
        "Placeholder57",
        "Placeholder58",
        "Placeholder59",
        "Placeholder60"
      ]
    },
    'Group Bonding': {
      'Team Trust': [
        "Placeholder61",
        "Placeholder62",
        "Placeholder63",
        "Placeholder64",
        "Placeholder65"
      ],
      'Shared Goals': [
        "Placeholder66",
        "Placeholder67",
        "Placeholder68",
        "Placeholder69",
        "Placeholder70"
      ],
      'Unity Moments': [
        "Placeholder71",
        "Placeholder72",
        "Placeholder73",
        "Placeholder74",
        "Placeholder75"
      ]
    }
  };

  const categoryIcons = {
    'Camp Dialogue': GiCampfire,
    'Long Rest Moments': GiNightSleep,
    'Character Development': GiSandsOfTime,
    'Story Sharing': GiBookmarklet,
    'Group Bonding': GiTeamIdea
  };

  const subcategoryIcons = {
    // Camp Dialogue
    'Evening Conversations': GiTalk,
    'Sharing Stories': GiTabletopPlayers,
    'Planning Ahead': GiCompass,
    
    // Long Rest Moments
    'Before Sleep': GiSleepingBag,
    'Morning Reflections': GiSunrise,
    'Dream Sharing': GiCampingTent,
    
    // Character Development
    'Personal Growth': GiSparkSpirit,
    'Overcoming Past': GiBreakingChain,
    'Future Aspirations': GiPathDistance,
    
    // Story Sharing
    'Personal Tales': GiScrollUnfurled,
    'Adventure Recap': GiBookCover,
    'Lessons Learned': GiLevelThree,
    
    // Group Bonding
    'Team Trust': GiShakingHands,
    'Shared Goals': GiTargetPrize,
    'Unity Moments': GiTriorb
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);

  const pickRandomPhrase = (category, subcategory) => {
    const phrases = reflectionPhrases[category][subcategory];
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setExpandedSubcategory(subcategory);
    
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
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiMeditation className="text-cyan-400" />
            Rest & Reflection
          </h1>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(reflectionPhrases).map(([category, subcategories]) => {
            const IconComponent = categoryIcons[category];
            return (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-cyan-600 to-cyan-900 
                         rounded-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-cyan-200" />
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
                          className="w-full p-2 bg-cyan-700/50 hover:bg-cyan-600/50 
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
          <div className={`mt-8 p-6 bg-gradient-to-r from-cyan-900/50 to-teal-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-cyan-400 mb-2">
              {selectedCategory} - {selectedSubcategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}

        {/* Phrases List for Selected Subcategory */}
        {expandedSubcategory && (
          <div className="mt-8 p-6 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              {subcategoryIcons[expandedSubcategory] && 
                React.createElement(subcategoryIcons[expandedSubcategory], { className: "w-6 h-6" })}
              {expandedSubcategory}:
            </h3>
            <div className="space-y-3">
              {reflectionPhrases[selectedCategory][expandedSubcategory].map((phrase, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded ${phrase === selectedPhrase 
                    ? 'bg-cyan-900/50 text-cyan-200' 
                    : 'bg-slate-700 text-white'}`}
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestAndReflection;