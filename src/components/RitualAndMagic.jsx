import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiSpellBook,
  GiMagicSwirl,
  GiPrayer,
  GiHealing,
  GiHolyGrail,
  GiAngelWings,
  GiMeditation,
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const RitualAndMagic = ({ onBack, onViewSpells }) => {
  const ritualPhrases = {
    'Healing Spells': {
      'Healing Word': [
        "Thor's styrke flyder gennem mine ord!",
        "Ved stormens nåde, heles du!",
        "Mærk himlens helende kraft!",
        "Rejst af tordenens ekko!",
        "Lad min stemme bære helbredelse!"
      ],
      'Cure Wounds': [
        "Lad stormens styrke hele dine sår!",
        "Ved tordenens kraft, rejs dig!",
        "Thor skænker dig styrke påny!",
        "Lad regnen vaske dine sår væk!",
        "Mærk naturens helende kraft!"
      ],
      'Lesser Restoration': [
        "Lad tordenen rense dit sind!",
        "Ved Thors kraft, være helbredt!",
        "Stormen vasker dit sind rent!",
        "Rens som regnen efter uvejret!",
        "Lad lynet brænde dit mareridt væk!"
      ]
    },
    'Restorative Magic': {
      'Dispel Magic': [
        "Ved stormens kraft, forsvind!",
        "Thor nægter din magi!",
        "Blæst væk af naturens kraft!",
        "Tordenen ophæver din kunst!",
        "Ved min guds vilje, ophør!"
      ],
      'Revivify': [
        "Thor nægter din død!",
        "Rejs dig ved stormens kraft!",
        "Tordenen kalder dig tilbage!",
        "Vågn ved lysets glimt!",
        "Ved himlens kraft, lev igen!"
      ],
      'Remove Curse': [
        "Tordenen renser din forbandelse!",
        "Ved Thors hammer, være fri!",
        "Lad stormen vaske din byrde væk!",
        "Lynet brænder dine lænker!",
        "Himlen frigør dig fra mørket!"
      ]
    },
    'Religious Ceremonies': {
      'Prayer to Thor': [
        "Thor, hør din tjeners bøn.",
        "Ved hammer og lyn, jeg påkalder dig.",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ],
      'Blessing of the Storm': [
        "Lad himlen velsigne denne stund.",
        "Thor's kraft gennemstrømmer os.",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ]
    },
    'Divine Channeling': {
      'Channel Divinity': [
        "Ved Thors mægtige hammer, jeg påkalder din kraft!",
        "Lad tordenen være mit vidne!",
        "Guddommelig storm, hør mit kald!",
        "Jeg kanaliserer lysets og stormens kraft",
        "Thor, lad din vilje strømme gennem mig!"
      ],
      'Divine Connection': [
        "Jeg åbner mit sind for himlens kraft.",
        "Thor, lad din visdom flyde gennem mig.",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ]
    },
    'Holy Blessings': {
      'Protection Blessing': [
        "Thor's skjold omgiver dig nu.",
        "Stå fast som bjerget i stormen.",
        "Må himlens kraft beskytte dig.",
        "Ved tordenen, være beskyttet!",
        "Modtag Thor's beskyttende kraft!"
      ],
      'Guidance Blessing': [
        "Lad Thor's visdom guide din vej.",
        "Stormens øje viser dig stien.",
        "Himlen lyser din sti.",
        "Thor's indsigt være med dig.",
        "Følg tordenens kald."
      ]
    },
    'Blessing Others': {
      'Bless': [
        "Thor's styrke være med dig.",
        "Må stormens kraft beskytte dig.",
        "Himlen våger over din vej.",
        "Placeholder4",
        "Placeholder5"
      ],
      'Protection': [
        "Thor's skjold omgiver dig.",
        "Stå fast som bjerget i stormen.",
        "Placeholder3",
        "Placeholder4",
        "Placeholder5"
      ]
    }
  };

  const categoryIcons = {
    'Healing Spells': GiHealing,
    'Restorative Magic': GiMagicSwirl,
    'Religious Ceremonies': GiPrayer,
    'Divine Channeling': GiHolyGrail,
    'Holy Blessings': GiAngelWings
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (category, subcategory) => {
    const phrases = ritualPhrases[category][subcategory];
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
            className="text-white hover:text-purple-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiMeditation className="text-purple-400" />
            Ritual & Magic
          </h1>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(ritualPhrases).map(([category, subcategories]) => {
            const IconComponent = categoryIcons[category];
            return (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-purple-600 to-purple-900 
                         rounded-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-purple-200" />
                    <h2 className="text-lg font-medium text-white">{category}</h2>
                  </div>
                  <div className="space-y-2">
                    {Object.keys(subcategories).map(subcategory => (
                      <button
                        key={subcategory}
                        onClick={() => pickRandomPhrase(category, subcategory)}
                        disabled={isAnimating}
                        className="w-full p-2 bg-purple-700/50 hover:bg-purple-600/50 
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

        {/* View All Spells Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => onViewSpells()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 
                     hover:from-purple-500 hover:to-indigo-500 
                     rounded-lg text-white font-medium transition-all
                     flex items-center gap-2 mx-auto"
          >
            <GiSpellBook className="w-5 h-5" />
            View All Spells
          </button>
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-purple-400 mb-2">
              {selectedCategory} - {selectedSubcategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RitualAndMagic;