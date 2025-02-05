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
        "Thor's kraft flyder gennem mine årer!",
        "Stormens præcision er min styrke!",
        "Arenaen lærte mig dette trick!",
        "Som lynet selv, præcist og kraftfuldt!",
        "Højlandenes visdom viser vejen!",
        "Ha! Jeg så faktisk hvor jeg sigtede denne gang!",
        "Thor klappede! Det var derfor det tordnede!",
        "Se mor, ingen hammer... denne gang!",
        "Sådan gør vi det i tordenvejr!",
        "Prøvede jeg at gøre det? Ja! Gjorde jeg det? JA!"
      ],
      failure: [
        "Thor's vejledning svigter mig i dag...",
        "Stormens kraft er ikke med mig denne gang",
        "Selv en goliath kan snuble på sin vej",
        "Mine hænder er tunge som regnfyldte skyer",
        "Arenaens lektioner fejler mig nu",
        "Ups... det var ikke sådan det så ud i mit hoved!",
        "Er det her det rigtige tidspunkt at skylde på tordenvejr?",
        "Thor må have nyset lige da jeg prøvede!",
        "Nå ja... jeg gjorde det med vilje... helt sikkert!",
        "Måske hvis jeg bare lader som ingenting skete..."
      ]
    }
  };

  const savingThrows = {
    'Strength': {
      success: [
        "Thor's styrke flyder gennem mine årer!",
        "Lad mig vise jer en gladiators kraft!",
        "Mine lænker kunne ikke holde mig, det kan du heller ikke!",
        "Storm og stål har hærdet mine muskler!",
        "Selv bjerge må bøje sig for min styrke!",
        "Ha! Du slår som en sur sky!",
        "Er det det bedste du har? Min bedstemor slår hårdere!",
        "Jeg har løftet tungere ting til morgenmad!",
        "Åh nej, nu tabte jeg min hammer... SIKE!",
        "Prøv igen når du har spist dine grøntsager!"
      ],
      failure: [
        "Thor's styrke svigter mig!",
        "Mine muskler... de svarer ikke!",
        "Arenaens styrke er forduftet!",
        "Stormens kraft... hvor er du?",
        "Mine lænker føles tunge igen...",
        "Er nogen kommet til at smøre mine muskler ind i smør?",
        "Åh nej, jeg glemte at spise min havregrød i morges!",
        "Mine arme er blevet til kogte spaghetti!",
        "Hvem har stjålet mine muskler mens jeg sov?",
        "Er det her det rigtige tidspunkt at tage en lur?"
      ]
    },
    'Dexterity': {
      success: [
        "Hurtig som lynet selv!",
        "Dans med stormen, undgå døden!",
        "En gladiator lærer at danse eller dø!",
        "Lynets hastighed er min ven!",
        "Stormens vinger bærer mig!",
        "Ups, jeg snublede... MEN MED STIL!",
        "Dansen går bedre med tordenvejr!",
        "Se mig hoppe som en glad ged!",
        "Hvem satte en banan der? Nå ja, det var mig!",
        "Jeg er let på tå for en klippe!"
      ],
      failure: [
        "Fandens glatte gulv!",
        "Stormen blæste den forkerte vej!",
        "Mine fødder er tungere end mit hjerte!",
        "Bevægelse som en klodset bjørn!",
        "Thor's lyn ramte ved siden af!",
        "Se mig danse! Nej vent, det var et fald...",
        "Jeg kysser jorden... med ansigtet!",
        "Min yndlings-dans: Den Faldende Goliath!",
        "Jorden kom op og hilste på!",
        "Jeg faldt med stil... tror jeg nok!"
      ]
    },
    'Constitution': {
      success: [
        "Hærdet af torden, styrket af storm!",
        "Arenaens ar har gjort mig stærkere!",
        "Mit hjerte slår som tordenbrag!",
        "Stormens udholdenhed er min!",
        "Jeg står fast som bjerget selv!",
        "Av! ... Det kilede bare!",
        "Er det en kølle eller en fjerkost?",
        "Min mave er hårdere end dit våben!",
        "Det føles som et myggestik!",
        "Jeg har haft værre tømmermænd!"
      ],
      failure: [
        "Det... det gjorde faktisk ondt!",
        "Min rustning er lavet af papir i dag!",
        "Av, av, av... det mærkes!",
        "Selv bjerge kan knække!",
        "Stormens styrke har forladt mig!",
        "Min rustning må være krympet i vask!",
        "Er det en drage eller bare min mave der rumler?",
        "Jeg skulle ikke have spist den sidste kylling!",
        "Min mave er blevet til budding!",
        "Er helbredsdrikke udløbet? Det smager sådan!"
      ]
    },
    'Intelligence': {
      success: [
        "Thor's visdom lyser vejen!",
        "Arenaens lektioner glemmes aldrig!",
        "Klog på kampens kunst!",
        "Stormens mønstre taler til mig!",
        "Erfaring er den bedste læremester!",
        "Jeg tænkte så hårdt, mit skæg krusede sig!",
        "To plus to er... øh... TORDEN!",
        "Den sværeste kamp er mod regnestykker!",
        "Jeg er klogere end jeg ser ud... hvilket ikke siger meget!",
        "Hvem behøver hjerne når man har biceps?"
      ],
      failure: [
        "Min hjerne er tåget som en regnsky!",
        "Tankerne forsvinder som vinden!",
        "Det var for mange ord på én gang!",
        "Thor's visdom... hvor blev du af?",
        "Arena-uddannelsen slår ikke til her!",
        "Hjernen er gået på ferie uden at sige farvel!",
        "To plus to er... en hammer?",
        "Mine tanker er løbet tør for torden!",
        "Er det her en test? Jeg hader tests!",
        "Min sidste hjernecelle råber om hjælp!"
      ]
    },
    'Wisdom': {
      success: [
        "Stormens øje ser sandheden!",
        "Thor's visdom gennemstrømmer mig!",
        "Højlandenes visdom er min styrke!",
        "Jeg ser hvad uvejret gemmer!",
        "Frihedens pris har lært mig meget!",
        "Thor sagde... noget klogt... tror jeg!",
        "Jeg konsulterede skyerne... de grinte!",
        "Min visdom kommer i stormkast!",
        "Jeg så det komme... efter det ramte!",
        "Meditation er bare en power-lur!"
      ],
      failure: [
        "Blind som en flagermus i tordenvejr!",
        "Stormens øje er sløret!",
        "Thor's vejledning... jeg hører dig ikke!",
        "Visdommen forsvandt med vinden!",
        "Jeg burde have lyttet til skyerne!",
        "Thor snakker... men jeg har propperne i!",
        "Er det klogskab eller bare hovedpine?",
        "Mine instinkter siger... åh, for sent!",
        "Visdommen kommer altid fem minutter for sent!",
        "Jeg spurgte skyerne, men de grinte bare!"
      ]
    },
    'Charisma': {
      success: [
        "Min stemme bærer tordens kraft!",
        "Hør en fri goliaths ord!",
        "Stormens kraft er i mine ord!",
        "Arena-championens ord er lov!",
        "Thor's torden taler gennem mig!",
        "Mit smil er som lyn - blændende!",
        "Jeg charmerede engang en storm... tror jeg!",
        "Mine jokes slår hårdere end min hammer!",
        "Er det torden eller bare min latter?",
        "Selv Thor synes jeg er for højrøstet!"
      ],
      failure: [
        "Mine ord er som vindstille luft!",
        "Torden blev til en hvisken!",
        "Selv en sten er mere overbevisende!",
        "Thor's stemme har forladt mig!",
        "Mine ord falder til jorden!",
        "Min tunge er blevet til en regnorm!",
        "Selv en sten er mere charmerende!",
        "Er det her det rigtige tidspunkt at blive genert?",
        "Mine jokes druknede i regnen!",
        "Thor's torden overdøvede min punchline!"
      ]
    }
  };

  const otherCategories = {
    'Breaking Free': {
      'From Restraints': [
        "Ingen lænker kan holde stormens kraft!",
        "Frihedens kald er stærkere end stål!",
        "Som lynet bryder jeg gennem mine bånd!",
        "Lænker er bare minder fra fortiden!",
        "Thor's styrke bryder alle bånd!",
        "Ups, var de lænker vigtige for jer?",
        "De kalder mig Gauthak Lænkeknuser... og røvkløver!",
        "Er det her jeres bedste reb? Min bedstemor binder bedre!",
        "Tadaa! Og jeg brugte ikke engang smør denne gang!",
        "Måske skulle I prøve med noget kraftigere end spaghetti!"
      ],
      'From Control': [
        "Min vilje er som en ustoppelig storm!",
        "Ingen herre ejer tordenens søn!",
        "Frihedens storm raser i mit hjerte!",
        "Mit sind er mit eget, min kraft er fri!",
        "Som vinden selv, kan jeg ikke fanges!",
        "Din kontrol er lige så stærk som en våd vaskeklud!",
        "Prøv at styr en tornado næste gang, det er nemmere!",
        "Du kan ikke tæmme en storm... eller en Gauthak!",
        "Mind control? More like mild control!",
        "Ha! Jeg kontrollerer knap nok mig selv!"
      ]
    },
    'Overcoming Odds': {
      'Against Many': [
        "Jo flere fjender, jo større tordenbrag!",
        "En storm frygter ikke regnens dråber!",
        "Arenaen lærte mig at danse med døden!",
        "I står mange, jeg står med Thor!",
        "Lad stormen komme, jeg står endnu!",
        "Er I sikre på I ikke vil hente flere? Det her er for nemt!",
        "Jeg har set værre odds i en kortspil!",
        "Kom nu, selv min mormor kæmper bedre... og hun er en sten!",
        "Er det her en kamp eller en gruppekrammer?",
        "Jeg tæller jer som en halv udfordring... tilsammen!"
      ],
      'Against the Impossible': [
        "Det umulige er bare en udfordring fra Thor!",
        "Selv bjerge flytter sig for stormens vilje!",
        "Hvor der er torden, er der en vej!",
        "Det umulige kender ikke min styrke!",
        "Selv guderne må bøje sig for viljens kraft!",
        "Umuligt? Det er bare et andet ord for 'sjovt'!",
        "Thor sagde det var umuligt... så jeg gjorde det dobbelt!",
        "Jeg spiser umuligt til morgenmad!",
        "Det var sværere at få sokker på i morges!",
        "Ha! Jeg har set værre odds i en madkonkurrence!"
      ]
    },
    'Personal Victories': {
      'Achievement': [
        "Thor's hammer guide min sejr!",
        "Stormens kraft flyder stærkt i dag!",
        "Sejren brøler som torden!",
        "Fra arena-slave til stormens mester!",
        "Min styrke vokser med hver sejr!",
        "Jeg er faktisk selv overrasket over den her!",
        "Succes smager bedre end morgenmad!",
        "Var det det hele? Jeg var lige ved at varme op!"
      ],
      'Growth': [
        "Jeg vokser som stormen selv!",
        "Hver prøvelse gør mig stærkere!",
        "Thor's visdom vokser i mig!",
        "Fra lænker til lynets kraft!",
        "Min sjæl er stærkere end nogensinde!",
        "Se! Jeg lærte noget nyt... tror jeg nok!",
        "Min hjerne har muskler nu!",
        "Fra dum som en sten til dum som en klog sten!",
        "Thor's visdom rammer som et lyn... av!"
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