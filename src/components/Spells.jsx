import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import LightningOverlay from './LightningOverlay';
import { GiSpellBook, GiScrollUnfurled } from 'react-icons/gi';

const Spells = ({ onBack }) => {
  // Organized spells by level with their invocations
  const spellsByLevel = {
    'Class Features': {
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
      ]
    },
    'Cantrips': {
      'Sacred Flame': [
        "Thor's lys brænder de urene!",
        "Himmelsk ild, rens min fjende!",
        "Ved guddommens lys, brænd!",
        "Hellig flamme, straf de uværdige!",
        "Lad retfærdighedens lys skinne!"
      ],
      'Spare the Dying': [
        "Thor nægter at tage dig endnu!",
        "Døden må vente, min ven!",
        "Ved stormens nåde, bliv blandt os!",
        "Din tid er ikke kommet!",
        "Thor beskytter dig fra dødens port!"
      ],
      'Mending': [
        "Lad Thor's kraft genskabe det brudte!",
        "Ved stormens styrke, hel igen!",
        "Repareret af himlens kraft!",
        "Genforent som tordenskyer!",
        "Thor's vilje gør det helt!"
      ],
      'Light': [
        "Lys op som Thor's lyn!",
        "Ved himlens glans, skin!",
        "Lad stormens lys vise vejen!",
        "Thor's øje våger over os!",
        "Mørket viger for gudernes lys!"
      ]
    },
    'Level 1': {
      'Cure Wounds': [
        "Lad stormens styrke hele dine sår!",
        "Ved tordenens kraft, rejs dig!",
        "Thor skænker dig styrke påny!",
        "Lad regnen vaske dine sår væk!",
        "Mærk naturens helende kraft!"
      ],
      'Healing Word': [
        "Thor's styrke flyder gennem mine ord!",
        "Ved stormens nåde, heles du!",
        "Mærk himlens helende kraft!",
        "Rejst af tordenens ekko!",
        "Lad min stemme bære helbredelse!"
      ],
      'Shield of Faith': [
        "Thor's skjold, beskyt min allierede!",
        "Omgiv dig med himlens beskyttelse!",
        "Ved tordenguden, vær beskyttet!",
        "Stormens værn omkring dig!",
        "Thor's magt er dit skjold!"
      ],
      'Thunderwave': [
        "Blæs som en storm i natten!",
        "Flyv væk med vinden!",
        "Mærk presset fra min torden!",
        "Thor kaster dig tilbage!",
        "La' mig vise dig stormens kraft!"
      ],
      'Bless': [
        "Thor's styrke være med jer!",
        "Himlens gunst over jer alle!",
        "Må tordenen styrke jeres arm!",
        "Ved Thor's hammer, vær velsignet!",
        "Stormens kraft flyder gennem jer!"
      ]
    },
    'Level 2': {
      'Lesser Restoration': [
        "Lad tordenen rense dit sind!",
        "Ved Thors kraft, være helbredt!",
        "Stormen vasker dit sind rent!",
        "Rens som regnen efter uvejret!",
        "Lad lynet brænde dit mareridt væk!"
      ],
      'Shatter': [
        "Knust af himlens kraft!",
        "Hør tordenens sang!",
        "Splintres som glas i stormen!",
        "Mærk lydens rasende kraft!",
        "Ved Thors brøl, knuses du!"
      ],
      'Gust of Wind': [
        "Thor's åndedræt blæser jer væk!",
        "Stormens pust renser vejen!",
        "Føl himlens vrede vind!",
        "Som orkanen selv kommanderer jeg!",
        "Blæst bort af guddommelig kraft!"
      ],
      'Silence': [
        "Selv tordenen må hvile!",
        "Ved Thor's vilje, vær stille!",
        "Lad stormen falde til ro!",
        "Stilhed før tordenskredet!",
        "Fred i stormens øje!"
      ]
    },
    'Level 3': {
      'Call Lightning': [
        "Thor, send din vrede!",
        "Dans, himmelske lyn!",
        "Stormens pile, find dit mål!",
        "Himlens vrede er min at kalde!",
        "Ved min hånd, lyner falder!"
      ],
      'Dispel Magic': [
        "Ved stormens kraft, forsvind!",
        "Thor nægter din magi!",
        "Blæst væk af naturens kraft!",
        "Tordenen ophæver din kunst!",
        "Ved min guds vilje, ophør!"
      ],
      'Remove Curse': [
        "Tordenen renser din forbandelse!",
        "Ved Thors hammer, være fri!",
        "Lad stormen vaske din byrde væk!",
        "Lynet brænder dine lænker!",
        "Himlen frigør dig fra mørket!"
      ],
      'Revivify': [
        "Thor nægter din død!",
        "Rejs dig ved stormens kraft!",
        "Tordenen kalder dig tilbage!",
        "Vågn ved lysets glimt!",
        "Ved himlens kraft, lev igen!"
      ],
      'Spirit Guardians': [
        "Thors krigere, beskyt os!",
        "Dans omkring mig, stormens ånder!",
        "Kæmp ved min side, himlens vogtere!",
        "Ved tordenen, omring mig!",
        "Lysets og stormens væsner, frem!"
      ],
      'Sleet Storm': [
        "Thor's frost og storm forenes!",
        "Is og vind, dans for mig!",
        "Kulden bider som Thor's vrede!",
        "Vinterstormens raseri!",
        "Mærk naturens iskolde vrede!"
      ],
      'Water Walk': [
        "Thor gør vejen fast under dine fødder!",
        "Vandene bærer dig som fast grund!",
        "Ved himlens kraft, gå på bølgerne!",
        "Stormens børn frygter ikke dybet!",
        "Som lynet over vandene skal du gå!"
      ],
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
      ]
    },
    'Level 4': {
      'Control Water': [
        "Dans, bølger, efter min vilje!",
        "Thor's kraft styrer vandene!",
        "Himlens regn adlyder mig!",
        "Ved stormens magt, bøj dig vand!",
        "Som torden dirigerer jeg vandene!"
      ],
      'Death Ward': [
        "Thor nægter at give slip på dig!",
        "Døden har ingen magt over Thor's udvalgte!",
        "Himlens lys holder dig blandt de levende!",
        "Ved tordengudens vilje, bliv blandt os!",
        "Stormen holder døden på afstand!"
      ],
      'Ice Storm': [
        "Thor's vinter rammer jer!",
        "Is og torden forenes i mit kald!",
        "Frys ved himlens vrede!",
        "Mærk naturens iskolde dom!",
        "Storm af is, ødelæg mine fjender!"
      ],
      'Divination': [
        "Thor, vis mig din visdom!",
        "Stormens varsler taler til mig!",
        "Ved lynet, oplys min vej!",
        "Himlens tegn åbenbares!",
        "Tordenen fortæller sandheden!"
      ]
    }
  };

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSpell, setSelectedSpell] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (level, spell) => {
    const spellPhrases = spellsByLevel[level][spell];
    if (!spellPhrases || spellPhrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedLevel(level);
    setSelectedSpell(spell);
    
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      const randomPhrase = spellPhrases[Math.floor(Math.random() * spellPhrases.length)];
      setSelectedPhrase(randomPhrase);
      flashCount++;
      
      if (flashCount >= 10) {
        clearInterval(flashInterval);
        setIsAnimating(false);
      }
    }, 100);
  };

  const getSpellColor = (level) => {
    const colors = {
      'Class Features': 'from-yellow-600 to-yellow-900 hover:from-yellow-500 hover:to-yellow-800',
      'Cantrips': 'from-gray-600 to-gray-900 hover:from-gray-500 hover:to-gray-800',
      'Level 1': 'from-indigo-600 to-indigo-900 hover:from-indigo-500 hover:to-indigo-800',
      'Level 2': 'from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-800',
      'Level 3': 'from-purple-600 to-purple-900 hover:from-purple-500 hover:to-purple-800',
      'Level 4': 'from-violet-600 to-violet-900 hover:from-violet-500 hover:to-violet-800'
    };
    return colors[level] || 'from-indigo-600 to-indigo-900 hover:from-indigo-500 hover:to-indigo-800';
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <LightningOverlay isAnimating={isAnimating} />
      <div className="container mx-auto max-w-4xl px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="text-white hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiSpellBook className="text-indigo-400 w-8 h-8" />
            Arcane Incantations
          </h1>
        </div>

        {/* Spells Grid by Level */}
        <div className="space-y-8">
          {Object.entries(spellsByLevel).map(([level, spells]) => (
            <div key={level} className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
                <GiScrollUnfurled className="w-6 h-6" />
                {level}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(spells).map(([spellName, phrases]) => (
                  <button
                    key={spellName}
                    onClick={() => pickRandomPhrase(level, spellName)}
                    disabled={isAnimating}
                    className={`p-4 bg-gradient-to-br ${getSpellColor(level)}
                             rounded-lg transition-all text-white font-medium
                             text-left`}
                  >
                    {spellName}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-indigo-400 mb-2">
              {selectedLevel && `${selectedLevel} - `}{selectedSpell}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spells;