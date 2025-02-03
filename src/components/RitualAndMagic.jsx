import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiSpellBook,
  GiMagicSwirl,
  GiPrayer,
  GiHealing,
  GiHolyGrail,
  GiAngelWings,
  GiMeditation
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay.jsx';

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
    'Divine Protection': {
      'Shield of Faith': [
        "Thor's skjold, beskyt min allierede!",
        "Omgiv dig med himlens beskyttelse!",
        "Ved tordenguden, vær beskyttet!",
        "Stormens værn omkring dig!",
        "Thor's magt er dit skjold!"
      ],
      'Death Ward': [
        "Thor nægter at give slip på dig!",
        "Døden har ingen magt over Thor's udvalgte!",
        "Himlens lys holder dig blandt de levende!",
        "Ved tordengudens vilje, bliv blandt os!",
        "Stormen holder døden på afstand!"
      ],
      'Bless': [
        "Thor's styrke være med jer!",
        "Himlens gunst over jer alle!",
        "Må tordenen styrke jeres arm!",
        "Ved Thor's hammer, vær velsignet!",
        "Stormens kraft flyder gennem jer!"
      ]
    },
    'Storm Control': {
      'Control Water': [
        "Dans, bølger, efter min vilje!",
        "Thor's kraft styrer vandene!",
        "Himlens regn adlyder mig!",
        "Ved stormens magt, bøj dig vand!",
        "Som torden dirigerer jeg vandene!"
      ],
      'Fog Cloud': [
        "Tågen kommer på stormens kald!",
        "Thor's ånde tilslører alt!",
        "Skyggerne af himlen selv!",
        "Skjul os i stormens pust!",
        "Lad tågen være vort skjold!"
      ],
      'Water Walk': [
        "Thor gør vejen fast under dine fødder!",
        "Vandene bærer dig som fast grund!",
        "Ved himlens kraft, gå på bølgerne!",
        "Stormens børn frygter ikke dybet!",
        "Som lynet over vandene skal du gå!"
      ],
      'Silence': [
        "Selv tordenen må hvile!",
        "Ved Thor's vilje, vær stille!",
        "Lad stormen falde til ro!",
        "Stilhed før tordenskredet!",
        "Fred i stormens øje!"
      ]
    },
    'Divine Insight': {
      'Clairvoyance': [
        "Thor's øje ser i det fjerne!",
        "Ved himlens blik, vis mig!",
        "Stormens øje ser alt!",
        "Tordenkigger jeg gennem skyerne!",
        "Lad lynet oplyse det skjulte!"
      ],
      'Speak with Dead': [
        "Ved Thor's hammer, tal!",
        "Fra Valhalla's haller, svar mig!",
        "Jeg kalder dig fra skyggerne!",
        "Tordenen vækker de døde!",
        "Fortæl mig, du som hviler!"
      ],
      'Divination': [
        "Thor, vis mig din visdom!",
        "Stormens varsler taler til mig!",
        "Ved lynet, oplys min vej!",
        "Himlens tegn åbenbares!",
        "Tordenen fortæller sandheden!"
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
    }
  };

  const categoryIcons = {
    'Healing Spells': GiHealing,
    'Restorative Magic': GiMagicSwirl,
    'Divine Protection': GiAngelWings,
    'Storm Control': GiMagicSwirl,
    'Divine Insight': GiHolyGrail,
    'Holy Blessings': GiPrayer
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