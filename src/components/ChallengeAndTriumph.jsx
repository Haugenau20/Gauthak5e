import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiLaurelCrown,
  GiDiceTwentyFacesTwenty,
  GiSwordsPower,
  GiBreakingChain,
  GiMountainClimbing,
  GiTrophyCup,
  GiCheckedShield,
  GiShieldDisabled,
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const ChallengeAndTriumph = ({ onBack }) => {
  const skillChecks = {
    'Athletics': {
      success: [
        "Thor's styrke flyder gennem mine årer!",
        "Ved stormens kraft, ingen vægt er for tung!",
        "Som tordenen selv, knuser jeg alle hindringer!",
        "Lad musklerne tale stormes sprog!",
        "I areanen lærte jeg sejrens pris!",
        "Ha! Lettere end at løfte en regnsky!",
        "Selv Thor ville være misundelig på disse muskler!",
        "Bare en almindelig morgenøvelse for en storm-præst!",
        "Det her? Det er bare en opvarmning!",
        "Selv mine biceps har biceps!"
      ],
      failure: [
        "Selv Thor's styrke svigter til tider!",
        "Mine lænkers minder tynger stadig!",
        "Stormens kraft undviger mig i dag!",
        "Arenaens ar føles tungere nu!",
        "Musklerne er trætte som vindstille skyer!",
        "Åh nej, mine arme er blevet til spaghetti!",
        "Thor må have lånt al min styrke i dag!",
        "Nogen må have smurt fedtstof på mine hænder!",
        "Min hammer vejer vist dobbelt i dag!",
        "Er det ikke på tide med en pause?"
      ]
    },
    'Acrobatics': {
      success: [
        "Let som lynet gennem luften!",
        "Storm-ånden guider mine bevægelser!",
        "Ingen lænker kan holde mig tilbage!",
        "Jeg danser med vinden selv!",
        "Frihedens dans er min styrke!",
        "Se! En flyvende goliath - det troede I ikke var muligt!",
        "Hvem sagde goliather ikke kan danse?",
        "Ups, det var faktisk ikke meningen!",
        "Som en gazelle... bare meget, meget større!",
        "Thor gav mig vinger... eller måske var det bare held!"
      ],
      failure: [
        "Vinden bærer mig ikke i dag!",
        "Stormens nåde svigter mig!",
        "Tyngdekraften er en brutal fjende!",
        "Nogle dage er jorden en hård læremester!",
        "Min krop husker stadig slaveriets tyngde!",
        "Se! Jeg opfandt en ny dans... av!",
        "Er der nogen der så hvor min værdighed blev af?",
        "Jorden kommer tættere på end forventet!",
        "Jeg ville bare kramme gulvet!",
        "Thor, du kunne godt have advaret mig!",
      ]
    },
    'Investigation': {
      success: [
        "Ved tordengudens visdom ser jeg sandheden!",
        "Stormens øje afslører alle hemmeligheder!",
        "Ingen gåde modstår min søgen!",
        "Som lynet oplyser natten, finder jeg svaret!",
        "Vejrets tegn viser mig vejen!",
        "Se! Jeg fandt noget",
        "Thor hvisker svarene i mit øre",
        "Detektiv Gauthak er på sagen!",
      ],
      failure: [
        "Stormens øje er blindet!",
        "Sandheden gemmer sig i skyggerne!",
        "Tordenen overdøver mine tanker!",
        "Nogle gåder forbliver uløste!",
        "Vejrets tegn er slørede i dag!",
        "Er dette et spor? Nej, bare min egen fodspor... igen!",
        "Hvis bare spor lyste op som lyn!",
        "Jeg er ikke forvirret, jeg er... jo, jeg er forvirret!",
        "Thor, dine tegn er lige så klare som mudder!",
        "Måske skulle jeg have taget mine briller på... hvis jeg havde nogen!"
      ]
    },
    'Religion': {
      success: [
        "Thor's visdom strømmer gennem mig!",
        "Ved tordenkræfternes magt!",
        "Gudernes veje er klare som lyn!",
        "Stormenes herre viser vejen!",
        "I tordenen hører jeg den guddommelige sandhed!",
        "Thor sagde ja!",
        "Jeg konsulterer de høje magter... og min mavefornemmelse!",
        "Thor's humor er som tordenvejr - nogle gange rammer det plet!"
      ],
      failure: [
        "Thor's visdom undviger min forståelse!",
        "Gudernes veje er tilslørede!",
        "Stormens budskab er uklart!",
        "Min tro vakler som vinden!",
        "Tordenen taler, men jeg forstår ikke!",
        "Thor må være på ferie!",
        "Var det et tegn? Nej, bare hovedpine!",
        "Undskyld, dårlig forbindelse til det guddommelige!",
        "Thor, kunne du tale lidt højere?",
        "Jeg burde virkelig have læst den hellige bog til ende!"
      ]
    },
    'Performance': {
      success: [
        "Hør min stemme rulle som torden!",
        "Mit brøl er stormens sang!",
        "Lyt til frihedens ekko!",
        "Arenaens ånd lever i mine ord!",
        "Som storm og torden, sådan er min tale!",
        "Jeg kendte engang en joke om Thor... men jeg har glemt pointen!",
        "Se mig jonglere med mine tordenkiler!",
        "Denne sang dedikerer jeg til min yndlings-stormsky!",
        "Applaus! Eller var det bare torden?"
      ],
      failure: [
        "Min stemme er som en hvisken i stormen!",
        "Ordene dør på mine læber!",
        "Ikke alle kampe vindes med ord!",
        "Arenanes kraft svigter mig!",
        "Stormens sang bliver til stilhed!",
        "Var det torden I hørte? Nej, bare min maven!",
        "Det lød bedre i mit hoved!",
        "Er der nogen der har set min stemme?",
        "Det var bare opvarmningen... tror jeg!",
        "Thor, du lovede at bakke mig op med dramatisk torden!"
      ]
    },
    'General': {
      success: [
        "Ved stormens vrede!",
        "Thor's vilje ske!",
        "Triumf over tyranni!",
        "Frihedens torden ruller!",
        "Stormens kraft er min!"
      ],
      failure: [
        "Placeholder96",
        "Placeholder97",
        "Placeholder98",
        "Placeholder99",
        "Placeholder100"
      ]
    }
  };

  const savingThrows = {
    'Strength': {
      success: [
        "Placeholder16", 
        "Placeholder17", 
        "Placeholder18", 
        "Placeholder19", 
        "Placeholder20"
      ],
      failure: [
        "Placeholder21", 
        "Placeholder22", 
        "Placeholder23", 
        "Placeholder24", 
        "Placeholder25"
      ]
    },
    'Dexterity': {
      success: [
        "Placeholder26", 
        "Placeholder27",
        "Placeholder28", 
        "Placeholder29", 
        "Placeholder30"
      ],
      failure: [
        "Placeholder31", 
        "Placeholder32", 
        "Placeholder33", 
        "Placeholder34", 
        "Placeholder35"
      ]
    },
    'Constitution': {
      success: [
        "Placeholder36", 
        "Placeholder37", 
        "Placeholder38", 
        "Placeholder39", 
        "Placeholder40"
      ],
      failure: [
        "Placeholder41", 
        "Placeholder42", 
        "Placeholder43", 
        "Placeholder44", 
        "Placeholder45"
      ]
    },
    'Intelligence': {
      success: [
        "Placeholder46", 
        "Placeholder47", 
        "Placeholder48", 
        "Placeholder49", 
        "Placeholder50"
      ],
      failure: [
        "Placeholder51", 
        "Placeholder52", 
        "Placeholder53", 
        "Placeholder54", 
        "Placeholder55"
      ]
    },
    'Wisdom': {
      success: [
        "Placeholder56", 
        "Placeholder57", 
        "Placeholder58", 
        "Placeholder59", 
        "Placeholder60"
      ],
      failure: [
        "Placeholder61", 
        "Placeholder62", 
        "Placeholder63", 
        "Placeholder64", 
        "Placeholder65"
      ]
    },
    'Charisma': {
      success: [
        "Placeholder66", 
        "Placeholder67", 
        "Placeholder68", 
        "Placeholder69", 
        "Placeholder70"
      ],
      failure: [
        "Placeholder71", 
        "Placeholder72", 
        "Placeholder73", 
        "Placeholder74", 
        "Placeholder75"
      ]
    }
  };

  const otherCategories = {
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

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedOutcome, setSelectedOutcome] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (category, subcategory, outcome = null) => {
    let phrases;
    if (outcome) {
      phrases = category === 'Skill Checks' 
        ? skillChecks[subcategory][outcome]
        : savingThrows[subcategory][outcome];
    } else {
      phrases = otherCategories[category][subcategory];
    }
    
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSelectedOutcome(outcome);
    
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

  const ChecksDisplay = ({ title, checks, icon: Icon }) => (
    <div className="col-span-2 p-6 bg-gradient-to-br from-emerald-500 to-emerald-800 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-emerald-200" />
        <h2 className="text-lg font-medium text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(checks).map(([checkName, outcomes]) => (
          <div key={checkName} className="bg-emerald-700/30 p-4 rounded-lg">
            <h3 className="text-emerald-200 font-medium mb-2">{checkName}</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => pickRandomPhrase(title, checkName, 'success')}
                disabled={isAnimating}
                className="flex items-center justify-center gap-2 p-2 bg-emerald-600/50 hover:bg-emerald-500/50 
                         rounded text-white text-sm transition-colors"
              >
                <GiCheckedShield className="w-4 h-4" />
                Success
              </button>
              <button
                onClick={() => pickRandomPhrase(title, checkName, 'failure')}
                disabled={isAnimating}
                className="flex items-center justify-center gap-2 p-2 bg-emerald-900/50 hover:bg-emerald-800/50 
                         rounded text-white text-sm transition-colors"
              >
                <GiShieldDisabled className="w-4 h-4" />
                Failure
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <LightningOverlay isAnimating={isAnimating} />
      <div className="container mx-auto max-w-6xl px-4 py-6">
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Skill Checks */}
          <ChecksDisplay title="Skill Checks" checks={skillChecks} icon={GiDiceTwentyFacesTwenty} />
          
          {/* Saving Throws */}
          <ChecksDisplay title="Saving Throws" checks={savingThrows} icon={GiSwordsPower} />

          {/* Other Categories */}
          {Object.entries(otherCategories).map(([category, subcategories]) => {
            const IconComponent = {
              'Breaking Free': GiBreakingChain,
              'Overcoming Odds': GiMountainClimbing,
              'Personal Victories': GiTrophyCup
            }[category];

            return (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-800 rounded-lg"
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
              {selectedCategory}
              {selectedSubcategory && ` - ${selectedSubcategory}`}
              {selectedOutcome && ` (${selectedOutcome})`}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeAndTriumph;