import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  GiMountainRoad,
  GiCompass,
  GiMountainClimbing,
  GiLightningStorm,
  GiPathDistance,
  GiChest,
  GiSun,
  GiSunCloud,
  GiRaining,
  GiEclipse,
  GiSnowing,
  GiHolyHandGrenade,
  GiDoorway,
  GiUndergroundCave,
  GiVillage,
  GiAncientRuins,
  GiCaveEntrance,
  GiThunderStruck
} from "react-icons/gi";
import LightningOverlay from './LightningOverlay';

const Adventure = ({ onBack }) => {
  const adventurePhrases = {
    'Traveling': [
      "Vinden viser vejen fremad!",
      "Stormens børn vandrer altid!",
      "Hvor tordenen går, følger jeg!",
      "Fri som stormen selv!",
      "Ingen lænker holder mig længere!",
      "Ad tordnens veje går vi!",
      "Lad rejsen være som vinden - ustoppelig!",
      "Thor's ånd leder os frem!",
      "Stormens kraft driver os fremad!",
      "Fri til at vandre, fri til at kæmpe!"
    ],
    'Exploration': [
      "Thor viser vejen gennem stormen!",
      "Lad os følge tordenbragene til vores skæbne!",
      "Enhver sti er en mulighed, når Thor lyser vejen!",
      "Hvor vinden blæser, der følger vi!",
      "Der er historier i horisonten, som venter på at blive fortalt!",
      "Er det et kort? Nej vent, det var bare en gammel madpakke...",
      "(snubler over en sten) Øh, jeg undersøgte bare jordens kvalitet!",
      "Se! Et spor! ... Nå nej, det var bare mine egne fodspor...",
      "Skal vi ikke bare spørge Thor om retningen? Han kan jo se det hele oppe fra!"
    ],
    'Entering New Locations': {
      'Sacred Sites': [
        "Gudernes hvisken ekkoer gennem disse haller",
        "Thor's nærvær er stærkt her",
        "Hellige vægge, modtag en storm-vandrers hilsen",
        "Dette er et sted hvor himmel møder jord",
        "Lad os træde varsomt i gudernes fodspor"
      ],
      'Dark Places': [
        "Selv mørket frygter tordengudens lys!",
        "Lad Thor's lyn oplyse vores vej!",
        "Mørket kan ikke skjule sig for stormens børn!",
        "Her lugter af gamle hemmeligheder...",
        "Selv skygger må bøje sig for lynet!",
        "Øhh... kunne nogen lige tænde en fakkel? For Thor's skyld?",
        "(nervøst) Var det en rotte eller en dødning? Please sig det var en rotte...",
        "Hey, hvem puffede til mig?! Nå, det var bare min egen kappe... heh...",
        "(med rystende stemme) Thor? Du kunne godt sende et lille lyn til belysning, ikke?",
        "ARGH! ... øh, jeg mener... det var bare en edderkop. En meget LILLE edderkop..."
      ],
      'Settlements': [
        "Ah, civilisationens trygge havn!",
        "Lad os se hvad disse mure gemmer!",
        "En by fuld af historier og muligheder!",
        "Her er mennesker at beskytte!",
        "Thor's velsignelse over dette sted!",
        "En kro! Endelig!"
      ],
      'Ancient Ruins': [
        "Disse sten hvisker gamle sandheder",
        "Her hviler fortidens storhed",
        "Selv tiden bøjer sig for disse mure",
        "Lad os se hvad historien har efterladt",
        "Gamle sten fortæller de bedste historier",
        "(læser på en væg) Her står... øh... noget meget vigtigt som jeg ikke kan læse.",
        "Disse ruiner er mindst tusind år gamle! Eller måske fra i forgårs...",
        "(ser på en statue uden hoved) Den ligner lidt min gamle arena-mester... især nu uden hoved.",
        "Se denne ældgamle relikvie! ... Ups, det var vist noget nogen tabte i går.",
        "Ah, fortidens visdom! (støv falder ned) ... og fortidens støv..."
      ],
      'Natural Caverns': [
        "Jordens årer leder os dybere!",
        "Her gemmer naturen sine hemmeligheder!",
        "Selv bjergene må dele deres visdom!",
        "Dybt i jorden findes de største sandheder!",
        "Lad os se hvad bjergene beskytter!",
        "(går ind i en stalaktit) Hvem satte den der!?",
        "Er det et ekko eller er der nogen der efteraber mig?",
        "(hører dryppende vand) Thor? Er det dig der driller?",
        "Se! En hule-bjørn! ... Nå nej, bare en meget stor sten.",
        "(bumper hovedet mod loftet) Hvorfor bygger de disse huler så lave?"
      ]
    },
    'Discovering Treasures': [
      "Ah! Thor's gaver skinner klarest!",
      "En skat værdigt af kampens pris!",
      "Dette minder mig om arenaens sejrspriser - bare bedre!",
      "Selv tordenguden smiler ned på denne skat!",
      "Dette vil fortælle en historie værd at huske!",
      "Åh! Guld! ... Nej vent, det var bare en messing-skål...",
      "(pudser ivrigt på en 'skat') Se hvordan d... nå, det var bare støv.",
      "En magisk ring! ... eller måske bare en gammel dørhåndtag?",
      "Dette er det mest værdifulde jeg har set! Efter min Thor-amulet selvfølgelig.",
      "(samler en sten op) Denne sten ligner præcis den første sten jeg samlede op... fordi det ER den første sten..."
    ],
    'Overcoming Obstacles': [
      "Som lynet bryder gennem mørket!",
      "Ingen mur er højere end en Goliaths vilje!",
      "Dette er intet mod arenaens udfordringer!",
      "Thor's styrke flyder gennem mine årer!",
      "Lad tordenen markere vores sejr!",
      "Thor, giv mig styrke! ... og måske også lidt mere hjerne denne gang.",
      "Det er ikke en forhindring, det er bare en... meget stor udfordring der står i vejen."
    ],
    'Natural Phenomena': {
      'Thunderstorm': [
        "Ah! Thor danser over himlen!",
        "Hør! Min guds latter ruller gennem skyerne!",
        "Velkommen, gamle ven!",
        "Nu føler jeg mig hjemme!",
        "Lad tordenen rense luften!",
        "(danser rundt i regnen) Thor! Du rammer stadig skævt med lynene, min ven!",
        "(bliver ramt af et vindstød) Se! Thor vil også lege tagfat!",
        "FLERE LYN! ... øh, undskyld, jeg blev lidt for ivrig der.",
        "(hopper begejstret i mudderet) Det er ligesom hjemme i bjergene! Bare mere... mudret!"
      ],
      'Sunny Day': [
        "Selv Thor må hvile sine hammerslag",
        "En dag til at samle styrke",
        "Solens ro før aftenens storm",
        "Lad os nyde denne fred mens den varer",
        "En dag uden torden er som en sang uden tromme",
        "sukker dybt Endnu en dag uden Thor's tordende latter...",
        "(stirrer længselsfuldt mod den tomme blå himmel) Ikke én eneste lille sky at kalde på...",
        "(sparker irriteret til en sten) Hvad er en stormens præst uden sine storme?",
        "(mumler mismodigt) Sol, sol og atter sol... Det er næsten lige så kedeligt som slavemarkedet...",
        "(råber mod himlen) Thor, min ven, har du glemt mig på denne skyfri dag?!"
      ],
      'Rain': [
        "Thor's tårer velsigner jorden",
        "Regnen synger naturens sang",
        "Vand fra oven renser sjælen",
        "Selv de mindste dråber bærer kraft",
        "Hør regnens hvisken!",
        "Thor, jeg sagde regn, ikke SKYBRUD!",
        "(gennemblødt) Jeg sagde jeg savnede regn, men ikke SÅ meget!",
        "(prøver at holde sig tør) Det er bare vand... meget vådt vand...",
        "Se hvor smukt! (glider i mudderet) ... mindre smukt nu."
      ],
      'Snow': [
        "Frost-jætternes dans!",
        "Vinterstormens hvide kappe!",
        "Thor's kolde åndedrag!",
        "Se hvordan stormen males hvid!",
        "Sneen gør verden ny igen!"
      ],
      'Eclipse': [
        "Selv himmellegemerne må danse!",
        "Thor holder vejret med resten af os!",
        "Et sjældent syn selv for en stormens søn!",
        "Mørket og lyset forenes!",
        "Se himlens dans!",
        "Thor, er det dig der piller ved solen igen?",
        "(stirrer direkte op) Av! Man skulle åbenbart ikke kigge...",
        "Er det slut snart? Jeg bliver lidt nervøs når solen gemmer sig.",
        "(til sine rejsefæller) Bare rolig, jeg har set det her før... tror jeg.",
        "Thor og Sol leger nok bare skjul igen."
      ],
      'Cloudy Day': [
        "Thor samler sine tropper!",
        "Skyerne lover eventyr!",
        "Se! Himlen forbereder sig!",
        "Snart vil tordenen tale!",
        "Der brygger noget stort!",
        "(peger ivrigt på hver eneste sky) Denne ser lovende ud! Nej, denne! NEJ, DENNE!",
        "(stirrer intenst på skyerne) Kom nu... kom nu... KOM NU! ... Nå, måske ikke.",
        "Thor, jeg kan se du gemmer dig deroppe! Du kan ikke snyde mig - jeg kan se din kappe!",
        "(prøver at lokke tordenen frem ved at vifte med sin hammer amulet) Se! Jeg har også en... lille én.",
        "(mumler utålmodigt) Det er som at vente på at vand koger... BARE LAV NOGET TORDEN!"
      ]
    }
  };

  const locationIcons = {
    'Sacred Sites': GiHolyHandGrenade,
    'Dark Places': GiUndergroundCave,
    'Settlements': GiVillage,
    'Ancient Ruins': GiAncientRuins,
    'Natural Caverns': GiCaveEntrance
  };

  const categoryIcons = {
    'Traveling': GiPathDistance,
    'Exploration': GiCompass,
    'Entering New Locations': GiDoorway,
    'Discovering Treasures': GiChest,
    'Overcoming Obstacles': GiMountainClimbing,
    'Natural Phenomena': GiLightningStorm
  };

  const weatherIcons = {
    'Thunderstorm': GiThunderStruck,
    'Sunny Day': GiSun,
    'Rain': GiRaining,
    'Snow': GiSnowing,
    'Eclipse': GiEclipse,
    'Cloudy Day': GiSunCloud
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const pickRandomPhrase = (category, weather = null) => {
    let phrases;
    if (weather) {
      phrases = adventurePhrases[category][weather];
    } else {
      phrases = adventurePhrases[category];
    }
    
    if (!phrases || phrases.length === 0) return;
    
    setIsAnimating(true);
    setSelectedCategory(category);
    setSelectedWeather(weather);
    
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
            className="text-white hover:text-green-400 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <GiMountainRoad className="text-green-400" />
            Adventure Phrases
          </h1>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(adventurePhrases).map(([category, content]) => {
            const IconComponent = categoryIcons[category];
            if (category !== 'Natural Phenomena' && category !== 'Entering New Locations') {
              return (
                <button
                  key={category}
                  onClick={() => pickRandomPhrase(category)}
                  disabled={isAnimating}
                  className="p-6 bg-gradient-to-br from-green-600 to-green-900 
                           hover:from-green-500 hover:to-green-800 
                           rounded-lg transition-all group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <IconComponent className="w-8 h-8 text-green-200 
                                           group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white text-center">{category}</span>
                  </div>
                </button>
              );
            }
            return null;
          })}
        </div>

        {/* Locations Section */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <GiDoorway className="w-6 h-6" />
            Entering New Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(adventurePhrases['Entering New Locations']).map(([location, _]) => {
              const LocationIcon = locationIcons[location];
              return (
                <button
                  key={location}
                  onClick={() => pickRandomPhrase('Entering New Locations', location)}
                  disabled={isAnimating}
                  className="p-4 bg-gradient-to-br from-green-700 to-emerald-900 
                           hover:from-green-600 hover:to-emerald-800 
                           rounded-lg transition-all text-white font-medium
                           flex items-center gap-2 justify-center"
                >
                  <LocationIcon className="w-5 h-5" />
                  {location}
                </button>
              );
            })}
          </div>
        </div>

        {/* Natural Phenomena Section */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <GiLightningStorm className="w-6 h-6" />
            Natural Phenomena
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(adventurePhrases['Natural Phenomena']).map(([weather, _]) => {
              const WeatherIcon = weatherIcons[weather];
              return (
                <button
                  key={weather}
                  onClick={() => pickRandomPhrase('Natural Phenomena', weather)}
                  disabled={isAnimating}
                  className="p-4 bg-gradient-to-br from-green-700 to-blue-900 
                           hover:from-green-600 hover:to-blue-800 
                           rounded-lg transition-all text-white font-medium
                           flex items-center gap-2 justify-center"
                >
                  <WeatherIcon className="w-5 h-5" />
                  {weather}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phrase Display */}
        {selectedPhrase && (
          <div className={`mt-8 p-6 bg-gradient-to-r from-green-900/50 to-blue-900/50 
                          rounded-lg text-center ${isAnimating ? 'animate-pulse' : ''}`}>
            <h3 className="text-lg text-green-400 mb-2">
              {selectedWeather ? `${selectedCategory} - ${selectedWeather}` : selectedCategory}:
            </h3>
            <p className="text-2xl font-bold text-white">{selectedPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adventure;