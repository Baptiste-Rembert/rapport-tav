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
            Traitement des Donn�es Audiovisuelles
          </h1>
          <p className="text-sm text-cyan-500 font-medium mb-8">
            Ann�e 2025-2026
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
              TP10: Repr�sentation & Sampling
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
          <p className="text-sm font-medium text-zinc-400 mb-2">R�alis� par :</p>
          <p className="text-white font-semibold mb-4">[Ton Pr�nom & Nom]</p>
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
            Projet de Synth�se
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Analyse et Traitement des Signaux Audiovisuels
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            Bienvenue sur ce rapport interactif. Ce projet illustre une d�marche d'ing�nierie originale visant � interconnecter 5 TP majeurs sous la forme de deux pipelines distincts : un d�di� au traitement et � la restauration d'images, l'autre orient� vers l'analyse temporelle et fr�quentielle du son.
            <br/><br/>
            L'objectif est de d�montrer non seulement l'application d'algorithmes math�matiques complexes, mais aussi leur mise en �uvre technique et visuelle.
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
            <h4 className="text-zinc-400 text-sm uppercase tracking-widest font-semibold mb-4">Contexte Math�matique</h4>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-500 mb-6 flex items-center justify-center">
              {/* Placeholder math�matique */}
              {"J(u) = \\int_{\\Omega} |\\nabla u| dx + \\frac{\\lambda}{2} \\int_{\\Omega} (u - u_0)^2 dx"}
            </div>
            <p className="text-zinc-400 mb-6">
              Ici, vous pourrez ins�rer l'explication du r�le du param�tre lambda (?) dans le compromis entre l'attache aux donn�es et la r�gularisation g�ographique de l'image.
            </p>

            <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-800/50">
              <label className="block text-sm font-medium text-zinc-300 mb-4 flex justify-between">
                <span>R�gularisation ($\lambda$)</span>
                <span className="text-blue-400 font-mono">{lambda}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={lambda}
                onChange={(e) => setLambda(e.target.value)}
                className="w-full accent-blue-500 focus:outline-none mb-6"
              />
              
              <div className="bg-zinc-950 p-4 rounded-lg text-sm text-zinc-400 border border-zinc-800">
                {lambda < 30 ? (
                  <span className="text-cyan-400">Mode Tikhonov dominant : L'image conserve son bruit visuel, on reste proche des donn�es brutes.</span>
                ) : lambda > 70 ? (
                  <span className="text-blue-400">Mode Variation Totale forte : Fort lissage, effet "rapi��age", l'image perd des d�tails fins.</span>
                ) : (
                  <span>Compromis �quilibr� entre lissage (TV) et attache aux donn�es.</span>
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
                Le mod�le des contours actifs de Kass-Witkins (Snake) permet de segmenter une image en minimisant une �nergie globale. L'apport du GVF (Gradient Vector Flow) est crucial pour �tendre la port�e de capture du contour, notamment dans les concavit�s.
              </p>
              {/* Placeholders pour l'explication th�orique */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-500 italic">
                Ins�rer ici l'analyse sur l'�volution de la courbe et la r�solution de l'�quation d'Euler-Lagrange.
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Activity size={48} className="text-zinc-700 mb-4 animate-pulse" />
              <p className="text-zinc-500 font-medium">Conteneur visuel (Snake GVF)</p>
              <p className="text-xs text-zinc-600 mt-2 text-center px-4">
                Importer ici le rendu React (ou image gif) simulant l'�volution des it�rations du contour actif.
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
            L'�quation de Poisson permet d'ins�rer un objet dans une image cible en conservant les gradients de l'image source, tout en adaptant les conditions aux limites. Cela garantit un fondu naturel des couleurs et de la luminosit� (format LAB utilis� pour la pr�servation des teintes).
          </p>

          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            <div className="flex border-b border-zinc-800 bg-zinc-950/50 p-2 gap-2">
              <button 
                onClick={() => setPoissonTab('base')}
                className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'base' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}"}
              >
                1. Image Source / Cible
              </button>
              <button 
                onClick={() => setPoissonTab('naive')}
                className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'naive' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}"}
              >
                2. Collage Na�f
              </button>
              <button 
                onClick={() => setPoissonTab('poisson')}
                className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'poisson' ? 'bg-zinc-800 text-cyan-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}"}
              >
                3. R�sultat (Poisson)
              </button>
            </div>
            
            <div className="h-64 md:h-96 flex items-center justify-center p-8 text-center text-zinc-600 bg-zinc-900/30">
              {poissonTab === 'base' && <p>Espace pour les images brutes: Source et Cible.</p>}
              {poissonTab === 'naive' && <p>Espace pour le r�sultat de la simple copie de pixels (coutures visibles).</p>}
              {poissonTab === 'poisson' && (
                <div className="flex flex-col items-center">
                  <p className="text-zinc-300 font-medium mb-2">Image finale harmonis�e.</p>
                  <p className="text-sm">Espace pour afficher l'effet de d�coloration via format LAB.</p>
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

        {/* TP10 : Repr�sentation & Sampling */}
        <section id="tp10" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">10</span>
            Repr�sentation Temps-Fr�quence
          </h3>
          
          <p className="text-zinc-400 mb-8 max-w-3xl leading-relaxed">
            L'analyse du signal audio par la Transform�e de Fourier � Court Terme (TFCT) nous permet d'obtenir un spectrogramme. Ici, nous l'utilisons pour illustrer la compression temporelle (Phase Vocoder) sans alt�ration de la hauteur de note.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-zinc-200 font-medium mb-4 flex items-center gap-2">
                <Play size={16} className="text-zinc-500" />
                Audio Original (Non-compress�)
              </h4>
              <audio controls className="w-full h-10 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                <source src="" type="audio/mpeg" />
                Votre navigateur ne supporte pas l'�l�ment audio.
              </audio>
              <p className="text-xs text-zinc-500 mt-3 italic">Ajouter chemin vers fichier original</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-cyan-400 font-medium mb-4 flex items-center gap-2">
                <Play size={16} className="text-cyan-500" />
                Audio Modifi� (Phase Vocoder)
              </h4>
              <audio controls className="w-full h-10 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                <source src="" type="audio/mpeg" />
                Votre navigateur ne supporte pas l'�l�ment audio.
              </audio>
              <p className="text-xs text-zinc-500 mt-3 italic">Ajouter chemin vers fichier trait�</p>
            </div>
          </div>
        </section>

        {/* TP11 : Robustesse Shazam */}
        <section id="tp11" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">11</span>
            Test de Robustesse (M�thode Shazam)
          </h3>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
            <p className="text-zinc-400 mb-6 leading-relaxed">
              L'algorithme de Shazam repose sur la cr�ation de "constellations" de pics spectraux, regroup�s en triplets de 32 bits (fr�quence f1, fr�quence f2, et d�lai). Dans cette section, j'�value la robustesse de l'algorithme face � diff�rents niveaux de rapport signal-sur-bruit (SNR).
            </p>

            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg h-80 flex flex-col items-center justify-center border-dashed">
              <Activity size={32} className="text-zinc-600 mb-4" />
              <p className="text-zinc-400 font-semibold mb-2">Axe Graphique Recharts : Robustesse SNR</p>
              <p className="text-sm text-zinc-600">(Recherche Simplifi�e vs Avanc�e)</p>
              <p className="text-xs text-zinc-700 mt-4">Emplacement pour importer le composant Recharts / Graphique final.</p>
            </div>
          </div>
        </section>
        
        <footer className="w-full pt-8 pb-12 border-t border-zinc-800 flex justify-between items-center text-sm text-zinc-500">
          <p>� 2026 - Rapport de l'UE Traitement des Donn�es Audiovisuelles</p>
          <p>Propuls� par React, Vite et TailwindCSS</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
