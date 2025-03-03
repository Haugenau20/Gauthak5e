import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiCrown, 
  GiCrossedSwords, 
  GiImprisoned, 
  GiMountainRoad,
  GiTabletopPlayers,
  GiBeerStein
} from "react-icons/gi";

const SocialInteractions = ({ onBack }) => {
  const socialPhrases = {
    'When Meeting Nobility': [
      "Vejret skifter hurtigt blandt de høje tårne, ikke sandt?",
      "Jeg bukker kun for tordenen, ædle herre/frue.",
      "Stormene husker alle lige, uanset deres titel.",
      "Selv de fineste silkekåber bliver våde i regnen.",
      "Jeg har set nok guldkroner smelte i arenaens hede.",
      "Thor dømmer os på vores gerninger, ikke vores titler.",
      "Deres ord er lige så tomme som deres arena var.",
      "Jeg foretrækker ærlige tordenskrald frem for hule løfter.",
      "Deres position er lige så sikker som vejret er forudsigeligt."
    ],
    'Meeting Fellow Gladiators': [
      "Arenaens støv vaskes aldrig helt af, broder/søster.",
      "Vi kender begge sandets smag, kammerat.",
      "Lænkerne er brudt, men arrene fortæller vores historie.",
      "Frihedens luft smager stadig sødt, gør den ikke?",
      "Vi overlevede deres spil, nu spiller vi vores eget.",
      "Kampens bånd binder os stadig sammen, gamle ven.",
      "Vores sværd tjener nu kun os selv.",
      "Du har også hørt publikums brøl i dine mareridt?",
      "Vi er smedet i den samme arena, broder/søster.",
      "Lad os skåle for dem, der ikke slap fri."
    ],
    'Speaking to the Oppressed': [
      "Stormene kommer, og med dem kommer forandring.",
      "Jeg ser styrken i dine øjne, den samme jeg engang skjulte.",
      "Dine lænker er ikke din skæbne.",
      "Thor hører også de svages råb.",
      "Frihed starter som en hvisken, men ender som et brøl.",
      "Jeg bærer også ar fra lænkerne, min ven.",
      "Der kommer en dag, hvor tordenen overdøver piskens smæld.",
      "Selv den mindste gnist kan starte en brand af oprør.",
      "Vores styrke vokser i mørket, indtil vi ikke længere kan holdes nede.",
      "De kan ikke lænke din sjæl, selv om de lænker din krop."
    ],
    'About Goliath Heritage': [
      "Jeg voksede op tættere på skyerne end de fleste.",
      "Min størrelse? Den matcher bare mit folks stolthed.",
      "Vi Goliather måler højde i forhold til bjergtoppene.",
      "Tordenen lyder anderledes, når man er så tæt på den.",
      "Ja, vi er store - store nok til at bære vores folks arv.",
      "I vores bjerge ville jeg bare være endnu en sten.",
      "Store nok til at røre skyerne, stærke nok til at bære deres vægt.",
      "Min stamme siger, at vi er børn af bjerget selv.",
      "Jo højere man er, des tættere er man på stormene.",
      "Store folk kaster store skygger, men større drømme."
    ],
    'Tavern Talk': [
      "Lad tordenen rulle og øllet flyde!",
      "En storm brygger i mit krus!",
      "Thor selv ville skåle med os i aften!",
      "Vejret er lige så skiftende som værtens humør!",
      "Jeg har set lyn mindre kraftige end denne mjød!",
      "Selv stormene holder pause for god øl!",
      "En god historie er som torden - den runger længe efter!",
      "Her er lige så varmt som i arenaen - skål!",
      "Lad historierne flyde som regnen!",
      "En god værtshussang kan overdøve selv torden!"
    ]
  };

  const categoryIcons = {
    'When Meeting Nobility': GiCrown,
    'Meeting Fellow Gladiators': GiCrossedSwords,
    'Speaking to the Oppressed': GiImprisoned,
    'About Goliath Heritage': GiMountainRoad,
    'Tavern Talk': GiBeerStein
  };

  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const pickRandomPhraseFromCategory = (category) => {
    const categoryPhrases = socialPhrases[category];
    if (!categoryPhrases || categoryPhrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setExpandedCategory(category);
    
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      const randomPhrase = categoryPhrases[Math.floor(Math.random() * categoryPhrases.length)];
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
      <div className="container mx-auto max-w-4xl px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiTabletopPlayers className="text-blue-400 w-6 h-6" />
            Social Interactions
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {Object.entries(socialPhrases).map(([category, _]) => {
            const IconComponent = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => pickRandomPhraseFromCategory(category)}
                disabled={isAnimating}
                className="p-6 bg-gradient-to-br from-blue-500 to-blue-800 
                         hover:from-blue-400 hover:to-blue-700 
                         rounded-lg transition-all group"
              >
                <div className="flex flex-col items-center gap-3">
                  <IconComponent className="w-8 h-8 text-blue-100 
                                         group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium text-white">{category}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-blue-900/50 to-blue-800/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-blue-400 mb-2">{selectedCategory}:</h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}

        {/* Full List of Phrases for Selected Category */}
        {expandedCategory && (
          <div className="mt-8 p-6 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              {categoryIcons[expandedCategory] && React.createElement(categoryIcons[expandedCategory], { className: "w-6 h-6" })}
              {expandedCategory} - All Phrases:
            </h3>
            <div className="space-y-3">
              {socialPhrases[expandedCategory].map((phrase, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded ${phrase === selectedPhrase 
                    ? 'bg-blue-900/50 text-blue-200' 
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

export default SocialInteractions;