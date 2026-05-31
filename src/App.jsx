import React, { useState } from 'react';
import { 
  Play, 
  Settings2, 
  Layers, 
  Image as ImageIcon, 
  Activity, 
  Radio, 
  Volume2, 
  Camera,
  ExternalLink
} from 'lucide-react';

const App = () => {
  // State for TP5: Restauration
  const [lambda, setLambda] = useState(50);
  
  // State for TP7: Photomontage
  const [poissonTab, setPoissonTab] = useState('base'); // 'base', 'naive', 'poisson'
  
  // Navigation handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* SIDEBAR (20%) */}
      <aside className="fixed top-0 left-0 h-screen w-1/5 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          <h1 className="text-xl font-bold text-white mb-2">
            Traitement des Données Audiovisuelles
          </h1>
          <p className="text-sm text-cyan-500 font-medium mb-8">
            Année 2025-2026
          </p>
          
          <nav className="space-y-2">
            <button 
              onClick={() => scrollTo('intro')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <Activity size={18} className="text-cyan-400" />
              Introduction
            </button>
            
            <div className="pt-4 pb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Pipeline Image
            </div>
            <button 
              onClick={() => scrollTo('tp5')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <Settings2 size={18} className="text-blue-400" />
              TP5: Restauration
            </button>
            <button 
              onClick={() => scrollTo('tp6')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <Layers size={18} className="text-blue-400" />
              TP6: Contours Actifs
            </button>
            <button 
              onClick={() => scrollTo('tp7')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <ImageIcon size={18} className="text-blue-400" />
              TP7: Collage de Poisson
            </button>
            
            <div className="pt-4 pb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Pipeline Audio
            </div>
            <button 
              onClick={() => scrollTo('tp10')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <Radio size={18} className="text-cyan-400" />
              TP10: Représentation & Sampling
            </button>
            <button 
              onClick={() => scrollTo('tp11')}
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 text-sm font-medium"
            >
              <Volume2 size={18} className="text-cyan-400" />
              TP11: Robustesse Shazam
            </button>
          </nav>
        </div>

        <div className="pt-8 mt-8 border-t border-zinc-800">
          <p className="text-sm font-medium text-zinc-400 mb-2">Réalisé par :</p>
          <p className="text-white font-semibold mb-4">[Ton Prénom & Nom]</p>
          <a href="#" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
            Voir mon Portfolio <ExternalLink size={14} />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT (80%) */}
      <main className="ml-[20%] w-4/5 p-12 lg:p-20 xl:max-w-6xl">
        
        {/* HERO SECTION */}
        <section id="intro" className="mb-24">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-800/50">
            Projet de Synthèse
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Analyse et Traitement des Signaux Audiovisuels
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            Bienvenue sur ce rapport interactif. Ce projet illustre une démarche d'ingénierie originale visant à interconnecter 5 TP majeurs sous la forme de deux pipelines distincts : un dédié au traitement et à la restauration d'images, l'autre orienté vers l'analyse temporelle et fréquentielle du son.
            <br/><br/>
            L'objectif est de démontrer non seulement l'application d'algorithmes mathématiques complexes, mais aussi à leur mise en oeuvre technique et visuelle.
          </p>
        </section>

        <hr className="border-zinc-800 mb-20" />

        {/* ===================== PIPELINE IMAGE ===================== */}
        <div className="mb-8 flex items-center gap-4">
          <Camera size={28} className="text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Pipeline de Traitement d'Images</h2>
        </div>

        {/* TP5 : Restauration */}
        <section id="tp5" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">5</span>
            Restauration par Variation Totale
          </h3>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 mb-8">
            <h4 className="text-zinc-400 text-sm uppercase tracking-widest font-semibold mb-4">Contexte Mathématique</h4>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-500 mb-6 flex items-center justify-center">
              {/* Placeholder mathématique */}
              {"J(u) = \\int_{\\Omega} |\\nabla u| dx + \\frac{\\lambda}{2} \\int_{\\Omega} (u - u_0)^2 dx"}
            </div>
            <p className="text-zinc-400 mb-6">
              Ici, vous pourrez insérer l'explication du rôle du paramétre lambda (?) dans le compromis entre l'attache aux données et la régularisation géographique de l'image.
            </p>

            <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-800/50">
              <label className="block text-sm font-medium text-zinc-300 mb-4 flex justify-between">
                <span>Régularisation ($\lambda$)</span>
                <span className="text-blue-400 font-mono">{lambda}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                évalue={lambda}
                onChange={(e) => setLambda(e.target.évalue)}
                className="w-full accent-blue-500 focus:outline-none mb-6"
              />
              
              <div className="bg-zinc-950 p-4 rounded-lg text-sm text-zinc-400 border border-zinc-800">
                {lambda < 30 ? (
                  <span className="text-cyan-400">Mode Tikhonov dominant : L'image conserve son bruit visuel, on reste proche des données brutes.</span>
                ) : lambda > 70 ? (
                  <span className="text-blue-400">Mode Variation Totale forte : Fort lissage, l'image perd des détails fins.</span>
                ) : (
                  <span>Compromis équilibré entre lissage (TV) et attache aux données.</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* TP6 : Contours Actifs */}
        <section id="tp6" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">6</span>
            Segmentation par Contours Actifs GVF
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Le modèle des contours actifs de Kass-Witkins (Snake) permet de segmenter une image en minimisant une énergie globale. L'apport du GVF (Gradient Vector Flow) est crucial pour étendre la portée de capture du contour, notamment dans les concavités.
              </p>
              {/* Placeholders pour l'explication théorique */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-500 italic">
                Insérer ici l'analyse sur l'éévolution de la courbe et la résolution de l'équation d'Euler-Lagrange.
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Activity size={48} className="text-zinc-700 mb-4 animate-pulse" />
              <p className="text-zinc-500 font-medium">Conteneur visuel (Snake GVF)</p>
              <p className="text-xs text-zinc-600 mt-2 text-center px-4">
                Importéer ici le rendu React (ou image gif) simulant l'évolution des itérations du contour actif.
              </p>
            </div>
          </div>
        </section>

        {/* TP7 : Collage de Poisson */}
        <section id="tp7" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">7</span>
            Photomontage de Poisson
          </h3>

          <p className="text-zinc-400 mb-8 leading-relaxed max-w-3xl">
            L'équation de Poisson permet d'insérer un objet dans une image cible en conservant les gradients de l'image source, tout en adaptant les conditions aux limites. Cela garantit un fondu naturel des couleurs et de la luminosité (format LAB utilisé pour la préservation des teintes).
          </p>

          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            <div className="flex border-b border-zinc-800 bg-zinc-950/50 p-2 gap-2">
              <button 
                onClick={() => setPoissonTab('base')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'base' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                1. Image Source / Cible
              </button>
              <button 
                onClick={() => setPoissonTab('naive')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'naive' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                2. Collage Naïf
              </button>
              <button 
                onClick={() => setPoissonTab('poisson')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'poisson' ? 'bg-zinc-800 text-cyan-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                3. Résultat (Poisson)
              </button>
            </div>
            
            <div className="h-64 md:h-96 flex items-center justify-center p-8 text-center text-zinc-600 bg-zinc-900/30">
              {poissonTab === 'base' && <p>Espace pour les images brutes: Source et Cible.</p>}
              {poissonTab === 'naive' && <p>Espace pour le résultat de la simple copie de pixels (coutures visibles).</p>}
              {poissonTab === 'poisson' && (
                <div className="flex flex-col items-center">
                  <p className="text-zinc-300 font-medium mb-2">Image finale harmonisée.</p>
                  <p className="text-sm">Espace pour afficher l'effet de décoloration via format LAB.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 mb-20" />

        {/* ===================== PIPELINE AUDIO ===================== */}
        <div className="mb-8 flex items-center gap-4">
          <Volume2 size={28} className="text-cyan-500" />
          <h2 className="text-3xl font-bold text-white">Pipeline de Traitement Audio</h2>
        </div>

        {/* TP10 : Représentation & Sampling */}
        <section id="tp10" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">10</span>
            Représentation Temps-Fréquence
          </h3>
          
          <p className="text-zinc-400 mb-8 max-w-3xl leading-relaxed">
            L'analyse du signal audio par la Transformée de Fourier à Court Terme (TFCT) nous permet d'obtenir un spectrogramme. Ici, nous l'utilisons pour illustrer la compresséion temporelle (Phase Vocoder) sans altération de la hauteur de note.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-zinc-200 font-medium mb-4 flex items-center gap-2">
                <Play size={16} className="text-zinc-500" />
                Audio Original (Non-compressée)
              </h4>
              <audio controls className="w-full h-10 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                <source src="" type="audio/mpeg" />
                Votre navigateur ne supportée pas l'élément audio.
              </audio>
              <p className="text-xs text-zinc-500 mt-3 italic">Ajouter chemin vers fichier original</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-cyan-400 font-medium mb-4 flex items-center gap-2">
                <Play size={16} className="text-cyan-500" />
                Audio Modifié (Phase Vocoder)
              </h4>
              <audio controls className="w-full h-10 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                <source src="" type="audio/mpeg" />
                Votre navigateur ne supportée pas l'élément audio.
              </audio>
              <p className="text-xs text-zinc-500 mt-3 italic">Ajouter chemin vers fichier traité</p>
            </div>
          </div>
        </section>

        {/* TP11 : Robustesse Shazam */}
        <section id="tp11" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">11</span>
            Test de Robustesse (Méthode Shazam)
          </h3>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <p className="text-zinc-400 mb-6 leading-relaxed">
              L'algorithme de Shazam repose sur la création de "constellations" de pics spectraux, regroupés en triplets de 32 bits (fréquence f1, fréquence f2, et délai). Dans cette section, j'éévalue la robustesse de l'algorithme face à différents niveaux de rapport signal-sur-bruit (SNR).
            </p>

            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg h-80 flex flex-col items-center justify-center border-dashed">
              <Activity size={32} className="text-zinc-600 mb-4" />
              <p className="text-zinc-400 font-semibold mb-2">Axe Graphique Recharts : Robustesse SNR</p>
              <p className="text-sm text-zinc-600">(Recherche Simplifiée vs Avancée)</p>
              <p className="text-xs text-zinc-700 mt-4">Emplacement pour importéer le composant Recharts / Graphique final.</p>
            </div>
          </div>
        </section>
        
        <footer className="w-full pt-8 pb-12 border-t border-zinc-800 flex justify-between items-center text-sm text-zinc-500">
          <p>Rapport de l'UE Traitement des Données Audiovisuelles</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
