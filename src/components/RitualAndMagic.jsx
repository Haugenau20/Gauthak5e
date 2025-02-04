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
import LightningOverlay from './LightningOverlay';

const RitualAndMagic = ({ onBack, onViewSpells }) => {
  const ritualPhrases = {
    'Healing Spells': {
      'Healing Word': [
        "Ved Thors hviskende helbredelse!",
        "Stormens ord læger dine sår!",
        "Hør tordnens helende ekko!",
        "Himlens stemme giver styrke!",
        "Lynet bærer min helende kraft!",
        "Hov hov, ingen sovepause endnu!",
        "Thor siger 'Rejs dig, dovne skabning!'",
        "En hurtig healing på farten!",
        "Mine ord healer bedre end min sang!",
        "Op med dig, det er bare et lille sår!"
      ],
      'Cure Wounds': [
        "Ved stormens helbredende kraft!",
        "Thor, send din lægende styrke!",
        "Himlens energi flyder gennem dig!",
        "Lad lynet forsegle dine sår!",
        "Mærk tordenens helende hånd!",
        "Holder du op med at bløde nu?",
        "Dette kommer måske til at kilder lidt!",
        "Thor's plaster er på vej!",
        "Se, næsten lige så god som ny... næsten!",
        "Ja ja, det er kolde hænder, jeg ved det!"
      ],
      'Lesser Restoration': [
        "Ved Thors rensende kraft!",
        "Lad stormens renhed hele dig!",
        "Himlens klarhed vender tilbage!",
        "Tordenkraftens renselse!",
        "Ved lysets helbredende styrke!",
        "Føj, hvad har du dog spist?",
        "Thor siger du trænger til et bad!",
        "Dette fjerner alle undskyldninger!",
        "Puf! Nu er du mindre elendig!"
      ]
    },
    'Restorative Magic': {
      'Dispel Magic': [
        "Ved Thors ophævende kraft!",
        "Stormens vrede mod falsk magi!",
        "Tordnens kraft bryder alle bånd!",
        "Lad lynet opløse denne magi!",
        "Himlen kræver magiens ophør!",
        "Ups, var det en vigtig besværgelse?",
        "Magisk effect goes brrrr... og væk!",
        "Thor kan ikke lide din magi!",
        "Puf - tadaa, ingen magi!",
        "Bare rolig, jeg ødelagde kun det magiske!"
      ],
      'Revivify': [
        "Ved Thors livgivende kraft!",
        "Vend tilbage fra Valhal!",
        "Tordenen kalder dig tilbage!",
        "Himlens lys leder dig hjem!",
        "Stormens styrke vækker dig!",
        "Thor siger det ikke er din tid endnu!",
        "Du skylder mig en øl for dette!",
        "Godmorgen sovetryne!",
        "Nå, hvordan var turen til den anden side?",
        "Død? På min vagt? Nej tak!"
      ],
      'Remove Curse': [
        "Ved Thors rensende torden!",
        "Forbandelsens lænker knuses!",
        "Himlens vrede mod dette mørke!",
        "Stormens kraft bryder alle bånd!",
        "Lynet brænder forbandelsen bort!",
        "Forbandelse? More like for-væk-else!",
        "Thor hader også mandage!",
        "Puf - nu er du mindre forbandet!",
        "Det var en kedelig forbandelse alligevel!",
        "Bare rolig, nu er du kun almindelig uheldig!"
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
        "Som torden dirigerer jeg vandene!",
        "Se mig, jeg er havets dirigent!",
        "Ved havstormens magt!",
        "Vandene adlyder min vilje!"
      ],
      'Fog Cloud': [
        "Tågens slør tilkalder jeg!",
        "Ved stormens skjulende kraft!",
        "Thor, send din skjulende tåge!",
        "Skyggernes dans begynder!",
        "Himlens slør sænker sig!",
        "Ups, jeg kan ikke se en hånd for mig!",
        "Tåget udsigt med chance for goliath!",
        "Thor's morgenvækning!",
      ],
      'Water Walk': [
        "Thor gør vejen fast under dine fødder!",
        "Vandene bærer dig som fast grund!",
        "Ved himlens kraft, gå på bølgerne!",
        "Stormens børn frygter ikke dybet!",
        "Som lynet over vandene skal du gå!",
        "Se mig, jeg er en and!",
        "Ingen svømmefødder nødvendige!",
        "Thor's egen gangbro!",
        "Ups, glem ikke at betale bropenge!",
        "Bare rolig, jeg har redningsvest på!"
      ],
      'Silence': [
        "Ved stormens stilhed!",
        "Thor kræver ro!",
        "Lad tavsheden råde!",
        "Stilhedens slør sænker sig!",
        "Al lyd må forstumme!",
        "Shhhhhh!",
        "Nu holder alle bare deres kæft!",
        "Thor siger det er sovetid!",
        "Endelig fred for jeres brok!",
        "Nå, nu kan jeg ikke høre mig selv tale!"
      ]
    },
    'Divine Insight': {
      'Clairvoyance': [
        "Ved Thors alseende øje!",
        "Stormens øje ser alt!",
        "Himlens blik rækker vidt!",
        "Lynet oplyser det skjulte!",
        "Tordnens syn gennemtrænger alt!",
        "Lad mig lige tjekke min krystalkugle!",
        "Thor's egen kikkert!",
        "Nysgerrig? Jeg? Aldrig!",
        "Se mor, ingen hænder!"
      ],
      'Speak with Dead': [
        "Ved forfædrenes minde!",
        "Thor åbner dødens port!",
        "Hør de dødes hvisken!",
        "Valhal låner os din stemme!",
        "Gennem sløret taler vi!",
        "Thor's telefonlinje til Helheim!",
        "Nå, hvordan går det dernede?",
        "Ring ring, er der nogen hjemme?",
        "Dette er en meget ensidig samtale!"
      ],
      'Divination': [
        "Ved Thors alvidende visdom!",
        "Stormens syner viser vejen!",
        "Himlens tegn åbenbares!",
        "Tordnens varsler taler!",
        "Lynet oplyser fremtidens sti!",
        "Lad mig spørge min ven i skyerne!",
        "Thor's vejrudsigt kommer her!",
        "Breaking news fra fremtiden!",
        "Spå i tordenskyer? Selvfølgelig virker det!"
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