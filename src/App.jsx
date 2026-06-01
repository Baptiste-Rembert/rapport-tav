import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
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
  const [activeView, setActiveView] = useState('mask');
  
  // State for TP7: Photomontage
  //const [poissonTab, setPoissonTab] = useState('base'); // 'base', 'naive', 'poisson'
  
  // Navigation handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [snakeTab, setSnakeTab] = useState('ex0');
  const [poissonTab, setPoissonTab] = useState('naif');
  const [colorTab, setColorTab] = useState('decolo_poisson');
  const [revealedSamples, setRevealedSamples] = useState({ 1: false, 2: false, 3: false });

  const toggleSample = (id) => {
    setRevealedSamples(prev => ({ ...prev, [id]: true }));
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
          <p className="text-white font-semibold mb-4">[Baptiste Rembert]</p>
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

        {/* TP5 : Restauration & Débruitage */}
        <section id="tp5" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">5</span>
            TP5 : Restauration d'Images & Prétraitement
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-8">
            Avant de pouvoir analyser le contenu d'une image, il faut s'assurer de sa qualité. Ce premier pipeline vise à nettoyer l'image en trois étapes : la restauration de détériorations fines, la suppression d'obstacles massifs (réalité diminuée), et enfin un débruitage global préservant les contours pour préparer la segmentation du TP6.
          </p>

          {/* ÉTAPE 1 : Défauts fins */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500">1.</span> Restauration de défauts fins (Inpainting EDP)
            </h4>
            <div className="text-zinc-400 leading-relaxed text-sm mb-6">
              <p className="mb-4">
                Pour effacer des rayures ou des textes superposés (ex: des lignes jaunes fines), nous utilisons le modèle d'inpainting par Variation Totale. Il résout une équation de diffusion qui propage l'information des bords sains vers l'intérieur du domaine dégradé :
              </p>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                E<sub>Inpainting</sub>(u) = ½ ∫∫<sub>Ω\D</sub> [u(x,y) - u<sub>0</sub>(x,y)]<sup>2</sup> dx dy + λ ∫∫<sub>Ω</sub> √(||∇u(x,y)||<sup>2</sup> + ε) dx dy
              </div>
              <p>
                <b>Résultat :</b> Cette méthode excelle sur les géométries fines car elle parvient à reconnecter les lignes de niveau (isophotes) brisées par le défaut, rendant la restauration invisible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Domaine à restaurer</div>
                <img src="images\tp5\image_noise2.png" alt="Rayures" className="w-full aspect-video object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Résultat EDP</div>
                <img src="images\tp5\image_restauree.png" alt="Rayures réparées" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </div>

          {/* ÉTAPE 2 : Le gros objet (Le Randonneur) */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">2.</span> Réalité Diminuée : Les limites de l'EDP
            </h4>
            <div className="text-zinc-400 leading-relaxed text-sm mb-6">
              <p className="mb-4">
                Lorsque l'on tente d'appliquer cette même EDP sur un objet massif (comme un randonneur), le modèle échoue. La diffusion lisse géométriquement la zone mais ne peut pas inventer de texture. Nous passons alors à une approche probabiliste par <b>rapiéçage (patch-based)</b> :
              </p>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                q̂ = argmin<sub>q ∈ F'(p)</sub> [ 1 / Card(R(p)) ] ∑<sub>(i,j) ∈ R(p)</sub> ||u(i<sub>p</sub>+i, j<sub>p</sub>+j) - u(i<sub>q</sub>+i, j<sub>q</sub>+j)||<sup>2</sup>
              </div>
            </div>

            <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
              <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-900/50 p-2 gap-2">
                <button 
                  onClick={() => setActiveView('mask')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeView === 'mask' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                >
                  Cible Massive
                </button>
                <button 
                  onClick={() => setActiveView('tv')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeView === 'tv' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                >
                  Échec EDP
                </button>
                <button 
                  onClick={() => setActiveView('patch')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeView === 'patch' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                >
                  Succès Rapiéçage
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800">
                  <img 
                    src={
                      activeView === 'mask' ? 'images\\tp5\\image_noise_calquesakura.png' :
                      activeView === 'tv' ? 'images\\tp5\\image_restaureesak.png' :
                      'images\\tp5\\naruto_restaure_rapiecage.png'
                    } 
                    alt={activeView} 
                    className="w-full aspect-video object-contain rounded shadow" 
                  />
                </div>
                <div className="p-6 flex items-center">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {activeView === 'mask' && "L'élément à supprimer prend une grande partie de l'image. Le décor arrière est très texturé (forêt, herbe)."}
                    {activeView === 'tv' && "Limite atteinte : L'EDP tente de relier les bords mais crée une tache floue (effet film de savon). Elle ne synthétise aucune texture."}
                    {activeView === 'patch' && "En cherchant des patchs jumeaux dans la zone saine, l'algorithme probabiliste clone l'herbe et les arbres. Le randonneur disparaît de façon crédible."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ÉTAPE 3 : Débruitage (Le pont vers TP6) */}
          <div className="border-l-4 border-emerald-500 bg-emerald-950/20 rounded-r-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings2 size={24} className="text-emerald-400" />
              <h4 className="text-lg font-semibold text-emerald-50">3. Prétraitement Final : Débruitage de l'image restaurée</h4>
            </div>
            <div className="text-zinc-300 text-sm leading-relaxed mb-6 space-y-3">
              <p>
                L'image est restaurée, mais elle contient du bruit numérique. Si nous la passons directement à l'algorithme de segmentation du TP6, le contour actif s'accrochera aux "faux gradients" générés par ce bruit.
              </p>
              <p>
                Nous appliquons donc une ultime passe de <b>Variation Totale sur l'image entière</b>. Contrairement à un filtre Gaussien qui floute tout, la TV supprime le bruit tout en préservant la netteté absolue des bords, un prérequis vital pour notre futur pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Image Bruitée</div>
                <img src="images\tp5\naruto_restaure_rapiecage.png" alt="Bruitée" className="w-full aspect-video object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-emerald-400">Image Débruitée</div>
                <img src="images\tp5\naruto_debruite_final.png" alt="Débruitée" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* TP6 : Contours Actifs */}
        <section id="tp6" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">6</span>
            TP6 : Segmentation par Contours Actifs & GVF
          </h3>

          {/* Bloc 1: Théorie & Implémentation */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-white mb-6">Théorie & Implémentation</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Colonne Gauche */}
              <div>
                <h5 className="text-lg font-medium text-blue-400 mb-3">L'Évolution du Modèle (De l'Ex 0 au Classique)</h5>
                <div className="text-zinc-400 leading-relaxed text-sm">
                  Un contour actif (Snake) est une courbe P(s) minimisant une énergie. 
                  Dans l'<b>Exercice 0 (Approche Naïve)</b>, la force externe dérive directement du gradient de l'image (E<sub>ext</sub> = -||∇I||<sup>2</sup>). L'algorithme exige une initialisation extrêmement proche du bord, sinon le contour ne bouge pas.
                  Le <b>Modèle Classique (Kass-Witkins)</b> ajoute une énergie interne pour contrôler l'élasticité (α) et la rigidité (β) :
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                    E<sub>int</sub>(P(s)) = (α / 2) ||P'(s)||<sup>2</sup> + (β / 2) ||P''(s)||<sup>2</sup>
                  </div>
                </div>
              </div>
              
              {/* Colonne Droite */}
              <div>
                <h5 className="text-lg font-medium text-cyan-400 mb-3">Diffusion GVF (Gradient Vector Flow)</h5>
                <div className="text-zinc-400 leading-relaxed text-sm">
                  Le problème des modèles précédents est que la force externe s'annule rapidement loin des bords ou à l'intérieur des concavités. 
                  Pour forcer le contour à entrer dans les creux, nous remplaçons cette force par un champ de vecteurs (F<sub>x</sub>, F<sub>y</sub>) diffusé sur toute l'image via l'équation :
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                    μ<sub>GVF</sub> ΔF<sub>x</sub> = ||∇E<sup>0</sup><sub>ext</sub>||<sup>2</sup> (F<sub>x</sub> - F<sup>0</sup><sub>x</sub>)
                  </div>
                  Cette diffusion crée un champ d'attraction dense, même dans les zones de gradient nul.
                </div>
              </div>
            </div>
          </div>

          {/* Bloc 1.5 : Visualisation des Champs de Force */}
          <h4 className="text-xl font-semibold text-white mb-6 mt-12">Visualisation des Champs de Vecteurs</h4>
          <p className="text-zinc-400 text-sm mb-6">
            Pour comprendre mathématiquement le comportement du Snake, il faut observer le champ de force (quiver) qui le guide vers les contours de l'image.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center">
              <span className="text-xs text-zinc-400 uppercase tracking-wider mb-3">1. Champ Naïf (Ex 0)</span>
              <div className="w-full aspect-square bg-zinc-950 rounded border border-zinc-800 mb-3 overflow-hidden">
                <img src="images\tp6\naruto_cf1.png" alt="Champ Naïf" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Les vecteurs n'existent que sur la frontière exacte de l'objet. Le champ est nul partout ailleurs.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center">
              <span className="text-xs text-blue-400 uppercase tracking-wider mb-3">2. Champ Classique</span>
              <div className="w-full aspect-square bg-zinc-950 rounded border border-zinc-800 mb-3 overflow-hidden">
                <img src="images\tp6\naruto_cf2.png" alt="Champ Classique" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Le champ d'attraction est légèrement élargi mais s'annule à l'intérieur de la concavité de la poire.
              </p>
            </div>

            <div className="bg-zinc-900 border border-cyan-800 rounded-xl p-4 flex flex-col items-center shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-3">3. Champ GVF</span>
              <div className="w-full aspect-square bg-zinc-950 rounded border border-zinc-800 mb-3 overflow-hidden">
                <img src="images\tp6\naruto_cf3.png" alt="Champ GVF" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-zinc-400 text-center font-medium">
                La diffusion EDP a propagé les vecteurs ! Ils pénètrent et pointent directement vers le fond de la concavité.
              </p>
            </div>
          </div>

          {/* Bloc 2: Résultats & Analyse Critique */}
          <h4 className="text-xl font-semibold text-white mb-6">Résultats de la Segmentation</h4>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-8">
            <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-950/50 p-2 gap-2">
              <button 
                onClick={() => setSnakeTab('ex0')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${snakeTab === 'ex0' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                1. Force Naïve
              </button>
              <button 
                onClick={() => setSnakeTab('classique')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${snakeTab === 'classique' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                2. Modèle Classique
              </button>
              <button 
                onClick={() => setSnakeTab('gvf')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${snakeTab === 'gvf' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                3. Modèle GVF
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900">
              <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800 flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950 ring-1 ring-zinc-800 shadow-xl">
                  <img 
                    src={
                      snakeTab === 'ex0' ? 'images/tp6/naruto_seg_1.png' :
                      snakeTab === 'classique' ? 'images/tp6/naruto_seg_2.png' :
                      'images/tp6/naruto_seg_3.png'
                    } 
                    alt={snakeTab} 
                    className="w-full h-full object-contain transition-opacity duration-500 ease-in-out" 
                  />
                </div>
              </div>

              <div className="p-6 flex items-center">
                <p className="text-zinc-300 text-base leading-relaxed">
                  {snakeTab === 'ex0' && "Exercice 0 : Le snake n'évolue pas ou s'effondre sur lui-même. Comme le champ de gradient est quasiment nul partout sauf sur le bord exact, la courbe n'est pas attirée si l'initialisation est trop lointaine."}
                  {snakeTab === 'classique' && "Limites du modèle standard (Kass-Witkins) : La force s'annule trop tôt. La courbe est freinée par sa propre énergie interne (effet élastique) et reste tendue à l'extérieur, incapable d'épouser la forme concave de la poire."}
                  {snakeTab === 'gvf' && "Grâce à la diffusion GVF vue précédemment, la courbe est aspirée par les vecteurs de gradient à l'intérieur de la concavité. Elle se stabilise parfaitement sur la véritable frontière géométrique de l'objet."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TP7 : Photomontage & Recolorisation de Poisson */}
        <section id="tp7" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">7</span>
            TP7 : Incrustation Avancée & Recolorisation
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-8">
            Dernière étape de notre pipeline visuel : l'intégration et l'harmonisation. Le masque extrait au TP6 nous permet de cibler un objet. Il faut maintenant l'intégrer dans un nouveau décor ou modifier sa colorimétrie de manière parfaitement réaliste, sans créer de démarcation ("couture") visuelle.
          </p>

          {/* Bloc 1: Théorie & Implémentation */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-white mb-6">Théorie & Implémentation Variationnelle</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Colonne Gauche */}
              <div>
                <h5 className="text-lg font-medium text-blue-400 mb-3">1. Poisson Classique</h5>
                <div className="text-zinc-400 leading-relaxed text-sm">
                  Le collage naïf (remplacement de pixels) crée une rupture d'éclairage. L'idée est d'importer uniquement le <i>champ de gradient</i> de la source, puis de reconstruire l'image en résolvant l'équation de Poisson avec des conditions de Dirichlet sur le bord :
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 text-center">
                    Δu = ∇·∇s &nbsp;&nbsp;&nbsp; avec &nbsp;&nbsp;&nbsp; u|<sub>∂p</sub> = c|<sub>∂p</sub>
                  </div>
                  La luminosité du décor cible se propage ainsi naturellement à l'intérieur de l'objet.
                </div>
              </div>
              
              {/* Colonne Droite */}
              <div>
                <h5 className="text-lg font-medium text-purple-400 mb-3">2. Ouvertures : Mixte & Couleur Locale</h5>
                <div className="text-zinc-400 leading-relaxed text-sm space-y-3">
                  <p>
                    <b>Clonage Mixte :</b> Si l'on incruste un objet sur un fond très texturé, Poisson classique écrase la texture. Le clonage mixte résout cela en prenant le gradient de norme maximale entre la source et la cible : <code className="text-xs bg-zinc-950 p-1 rounded">v = argmax(||∇s||, ||∇c||)</code>.
                  </p>
                  <p>
                    <b>Changement de Couleur :</b> En modifiant les couleurs d'un objet source, puis en le réincrustant dans sa propre image avec l'équation de Poisson, on change sa teinte tout en préservant intacts ses reflets et l'éclairage ambiant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc 2: Démo 1 - Incrustation Mixte */}
          <h4 className="text-xl font-semibold text-white mb-6">Expérience 1 : L'Harmonisation d'Incrustation</h4>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-12">
            <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-950/50 p-2 gap-2">
              <button 
                onClick={() => setPoissonTab('naif')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${poissonTab === 'naif' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                Collage Naïf (Échec)
              </button>
              <button 
                onClick={() => setPoissonTab('poisson')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${poissonTab === 'poisson' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                Poisson Classique
              </button>
              <button 
                onClick={() => setPoissonTab('mixte')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${poissonTab === 'mixte' ? 'bg-purple-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                Clonage Mixte
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900">
              <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800 flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950 ring-1 ring-zinc-800 shadow-xl">
                  <img 
                    src={
                      poissonTab === 'naif' ? 'images/tp7/tp7_naifnar.jpg' :
                      poissonTab === 'poisson' ? 'images/tp7/tp7_poissonnar.jpg' :
                      'images/tp7/tp7_mixtenar.jpg'
                    } 
                    alt={poissonTab} 
                    className="w-full h-full object-contain transition-opacity duration-500 ease-in-out" 
                  />
                </div>
              </div>

              <div className="p-6 flex items-center">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {poissonTab === 'naif' && "Le collage des pixels bruts génère un contraste absolu. L'objet semble 'posé' sur la scène car son équilibre des blancs et ses ombres ne correspondent pas au décor ambiant."}
                  {poissonTab === 'poisson' && "Succès colorimétrique : la luminosité du décor s'est diffusée dans l'objet. Cependant, si le fond cible était très texturé, cette texture a été remplacée par l'aspect lisse de l'objet source (effet autocollant opaque)."}
                  {poissonTab === 'mixte' && "Succès absolu. En retenant les gradients maximaux locaux, les fortes textures de la cible (ex: des briques, de la roche) ont été conservées et transparaissent à travers l'objet. L'incrustation est organique."}
                  {poissonTab !== 'naif' && poissonTab !== 'poisson' && poissonTab !== 'mixte' && "Sélectionnez une méthode pour voir l'analyse."}
                </p>
              </div>
            </div>
          </div>

          {/* Bloc 3: Démo 2 - Effets Colorimétriques */}
          <h4 className="text-xl font-semibold text-white mb-6">Expérience 2 : Décoloration & Recolorisation</h4>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-8">
            
            {/* Barre de navigation à 4 boutons */}
            <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-950/50 p-2 gap-2">
              <button 
                onClick={() => setColorTab('decolo_naif')}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-300 ${colorTab === 'decolo_naif' ? 'bg-zinc-700 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                1. Image initiale
              </button>
              <button 
                onClick={() => setColorTab('decolo_poisson')}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-300 ${colorTab === 'decolo_poisson' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                2. Décolo. Poisson (Ex 2)
              </button>
              <button 
                onClick={() => setColorTab('recolo_naif')}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-300 ${colorTab === 'recolo_naif' ? 'bg-zinc-700 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                3. Recolo. Naïve
              </button>
              <button 
                onClick={() => setColorTab('recolo_poisson')}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-300 ${colorTab === 'recolo_poisson' ? 'bg-emerald-600 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
              >
                4. Recolo. Poisson
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900">
              <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800 flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950 ring-1 ring-zinc-800 shadow-xl">
                  <img 
                    src={
                      colorTab === 'decolo_naif' ? 'images/tp7/spurs.jpg' :
                      colorTab === 'decolo_poisson' ? 'images/tp7/spurs_couleur.png' :
                      colorTab === 'recolo_naif' ? 'images/tp7/tp7_naif.jpg' :
                      'images/tp7/tp7_couleur.jpg'
                    } 
                    alt={colorTab} 
                    className="w-full h-full object-contain transition-opacity duration-500 ease-in-out" 
                  />
                </div>
              </div>

              <div className="p-6 flex items-center">
                <div className="text-zinc-300 text-sm leading-relaxed space-y-4">
                  {colorTab === 'decolo_naif' && (
                    <p>
                      <b className="text-white">Décoloration Partielle Naïve :</b> En utilisant l'image couleur comme source et sa version en niveaux de gris comme cible, le remplacement brut des pixels crée une frontière grise/couleur extrêmement dure. L'effet manque de naturel si le détourage n'est pas parfait au pixel près.
                    </p>
                  )}
                  {colorTab === 'decolo_poisson' && (
                    <p>
                      <b className="text-blue-400">Exercice 2 (Décoloration de Poisson) :</b> En résolvant l'équation variationnelle, les couleurs se diffusent doucement vers les bords en niveaux de gris. L'effet de transition est beaucoup plus organique et pardonne les erreurs de détourage grossières.
                    </p>
                  )}
                  {colorTab === 'recolo_naif' && (
                    <p>
                      <b className="text-white">Recolorisation Naïve :</b> Nous avons modifié artificiellement les canaux RGB de l'objet source. Recoller cet objet modifié directement sur l'image crée une cassure lumineuse. La nouvelle couleur ne correspond plus aux reflets et aux ombres de la scène ambiante.
                    </p>
                  )}
                  {colorTab === 'recolo_poisson' && (
                    <p>
                      <b className="text-emerald-400">Ouverture (Local Color Change) :</b> Application dérivée puissante. En important le champ de gradient de l'objet recolorisé, mais en forçant les conditions aux limites (Dirichlet) à respecter l'image d'origine, Poisson harmonise la nouvelle teinte avec l'éclairage de la scène. Les ombres, les brillances et la texture restent parfaitement intégrées.
                    </p>
                  )}
                </div>
              </div>
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
          <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">10</span>
            TP10 : Le Workflow du Sampling (Temps-Fréquence)
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-8">
            En production musicale, le sample est roi. Mais pour intégrer un extrait audio dans une nouvelle composition, il faut pouvoir le manipuler. Ce TP explore les fondements mathématiques qui permettent aux séquenceurs modernes d'altérer le son.
          </p>

          {/* Bloc 1: TFCT et Altération (Exercice 1) */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Activity size={20} className="text-blue-400" />
              1. La TFCT et l'importance de la Phase
            </h4>
            <div className="text-zinc-400 text-sm leading-relaxed mb-6">
              <p className="mb-3">
                Pour analyser le contenu d'un son, on le découpe en fenêtres glissantes. La Transformée de Fourier à Court Terme (TFCT) calcule le spectre de chaque fenêtre :
              </p>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 text-center">
                X[m,k] = ∑ x[n] · w[n-mH] · e<sup>-j2πkn/N</sup>
              </div>
              <p>
                <b>Exercice 1 :</b> Le résultat est complexe (Module + Phase). Si on tente de reconstruire le signal en annulant la phase (en ne gardant que le module) ou inversement, le son subit une altération dramatique. La phase contient l'essentiel de l'information structurelle du son.
              </p>
            </div>
            
            {/* L'Extrait Original (Témoin) */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-4">
              <span className="text-xs text-blue-400 uppercase tracking-wider block mb-2 font-semibold">Signal Original (Référence)</span>
              <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                <source src="images/tp10/tp10_orig.mp3" type="audio/mpeg" />
              </audio>
              <p className="text-xs text-zinc-500 mt-2 italic">L'extrait de référence, avant toute altération dans le domaine fréquentiel.</p>
            </div>

            {/* Les deux altérations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Reconstruction : Module Seul</span>
                <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                  <source src="images/tp10/tp10_module.wav" type="audio/wav" />
                </audio>
                <p className="text-xs text-zinc-500 mt-2 italic">Le son devient robotique.</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Reconstruction : Phase Seule</span>
                <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                  <source src="images/tp10/tp10_phase.wav" type="audio/wav" />
                </audio>
                <p className="text-xs text-zinc-500 mt-2 italic">Le son devient robotique.</p>
              </div>
            </div>
          </div>

          {/* Bloc 2: Le Traitement du Signal Musical (Effets & Compression) */}
          <div className="space-y-8 mb-12">
            
            {/* --- SECTION 1 : FILTRAGE --- */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Settings2 size={24} className="text-cyan-400" /> 
                2.1 Le Filtrage Spectral
              </h5>
              <p className="text-zinc-400 text-sm mb-6">
                En appliquant un masque sur la matrice de la TFCT, on peut annuler des bandes de fréquences spécifiques.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                  <span className="text-sm text-cyan-300 font-medium block mb-2">Filtre Passe-Bas</span>
                  <p className="text-xs text-zinc-500 mb-3">Coupe les aigus. Donne un effet "étouffé" ou "sous l'eau".</p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_lowpass.wav" type="audio/wav" />
                  </audio>
                </div>
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                  <span className="text-sm text-cyan-300 font-medium block mb-2">Filtre Passe-Haut</span>
                  <p className="text-xs text-zinc-500 mb-3">Coupe les graves. Donne un effet "téléphone" ou "radio".</p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_highpass.wav" type="audio/wav" />
                  </audio>
                </div>
              </div>
            </div>

            {/* --- SECTION 2 : MANIPULATION TEMPORELLE --- */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Layers size={24} className="text-purple-400" /> 
                2.2 Manipulation Temporelle
              </h5>
              <p className="text-zinc-400 text-sm mb-6">
                Historiquement, modifier la vitesse de lecture altérait inévitablement la hauteur. Maintenant on a des solutions pour faire les deux indépendamment. 
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. Resampling (Méthode Classique) */}
                <div className="bg-zinc-950 p-4 rounded-lg border border-yellow-900/50">
                  <span className="text-sm text-yellow-500 font-medium block mb-2">Changement de Vitesse</span>
                  <p className="text-xs text-zinc-500 mb-3">Lecture accélérée ou ralentie de la forme d'onde. Le tempo et la hauteur sont liés.</p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_resample.wav" type="audio/wav" />
                  </audio>
                </div>

                {/* 2. Time-Stretch (Phase Vocoder) */}
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                  <span className="text-sm text-purple-300 font-medium block mb-2">Étirement Temporel</span>
                  <p className="text-xs text-zinc-500 mb-3">Modifie le tempo sans altérer le timbre de la voix. L'algorithme préserve l'enveloppe spectrale d'origine.</p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_stretch.wav" type="audio/wav" />
                  </audio>
                </div>

                {/* 3. Pitch-Shift (Phase Vocoder) */}
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                  <span className="text-sm text-purple-300 font-medium block mb-2">Transposition</span>
                  <p className="text-xs text-zinc-500 mb-3">Modifie la hauteur des notes sans changer la vitesse, permettant d'accorder instantanément un sample à une piste.</p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_pitch.wav" type="audio/wav" />
                  </audio>
                </div>

              </div>
            </div>

            {/* --- SECTION 3 : COMPRESSION --- */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Radio size={24} className="text-emerald-400" /> 
                2.3 Compression
              </h5>
              <p className="text-zinc-400 text-sm mb-6">
                L'analyse temps-fréquence est le pilier de la compression audio (MP3, AAC). En décimant intelligemment la matrice de la Transformée de Fourier, on peut réduire drastiquement la taille du fichier tout en préservant l'intelligibilité.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Exercice 2 : Décimation par Colonne */}
                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                  <span className="text-sm text-emerald-300 font-medium block mb-2">Ex 2 : Compression Naïve (m constant)</span>
                  <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                    La méthode initiale conserve les <b>m plus grands coefficients</b> pour chaque fenêtre temporelle (CBR). <br/><br/>
                    <b className="text-red-400">Limite :</b> C'est rigide. On gaspille de la mémoire en sauvegardant <i>m</i> bruits de fond lors des silences, et on dégrade les transitoires (batterie) qui nécessiteraient bien plus de <i>m</i> coefficients pour sonner correctement.
                  </p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_comp_naive.wav" type="audio/wav" />
                  </audio>
                </div>

                {/* Ouverture : Seuillage Global */}
                <div className="bg-zinc-950 p-4 rounded-lg border border-emerald-900/50">
                  <span className="text-sm text-emerald-400 font-medium block mb-2">Ouverture : Seuillage d'Énergie (VBR)</span>
                  <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                    Pour améliorer le taux de compression, on passe à une allocation dynamique. On applique un <b>seuil global</b> sur l'ensemble de la matrice : <code className="bg-zinc-900 px-1 rounded text-emerald-200">masque = abs(Y) &gt; seuil</code>.<br/><br/>
                    <b className="text-emerald-400">Avantage :</b> Les silences sont compressés à 100%, tandis que les attaques conservent toute leur complexité. C'est la base de l'encodage à débit variable (VBR) moderne.
                  </p>
                  <audio controls className="w-full h-8 filter sepia-[5%] hue-rotate-180 brightness-[85%] contrast-125">
                    <source src="images/tp10/tp10_comp_vbr.wav" type="audio/wav" />
                  </audio>
                </div>

              </div>
            </div>

          </div>

          {/* Bloc 3: INTERACTIF - Devine le Sample */}
          <div className="border-l-4 border-pink-500 bg-pink-950/10 rounded-r-xl p-8 mb-8 border border-y-zinc-800 border-r-zinc-800">
            <h4 className="text-2xl font-bold text-white mb-2">L'Art du Sampling : Quiz</h4>
            <p className="text-zinc-400 text-sm mb-8">
              Écoute le sample original. Écoute ensuite la version modifiée (Filtres, Pitch, Time-Stretch). Sauras-tu deviner quel hit mondial se cache derrière ?
            </p>

            <div className="space-y-6">
              {/* Sample 1 : Fugees */}
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1 w-full">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">1. Original (Enya - Boadicea)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game1_orig.mp3" type="audio/mpeg" /></audio>
                </div>
                <div className="flex-1 w-full">
                  <span className="text-xs text-pink-400 uppercase tracking-wider mb-2 block">Version Modifiée (Time-Stretch + Filtre)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game1_mod.wav" type="audio/mpeg" /></audio>
                </div>
                <div className="w-full lg:w-64 shrink-0 flex items-center justify-end">
                  {!revealedSamples[1] ? (
                    <button onClick={() => toggleSample(1)} className="w-full h-full min-h-[4rem] bg-zinc-800 hover:bg-pink-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors">
                      Révéler le Hit
                    </button>
                  ) : (
                    <div className="w-full flex flex-col justify-center bg-pink-900/40 border border-pink-500/50 rounded-lg p-3 animate-fade-in gap-3">
                      <div className="text-center">
                        <p className="text-white font-bold text-sm leading-tight">Ready or Not</p>
                        <p className="text-pink-300 text-xs">Fugees (1996)</p>
                      </div>
                      <audio controls className="w-full h-8 filter sepia-[10%] hue-rotate-[320deg] brightness-110"><source src="images/tp10/game1_hit.mp3" type="audio/mpeg" /></audio>
                    </div>
                  )}
                </div>
              </div>

              {/* Sample 2 : Dr. Dre / Aznavour */}
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1 w-full">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">2. Original (Ch. Aznavour - Parce que tu crois)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game2_orig.mp3" type="audio/wav" /></audio>
                </div>
                <div className="flex-1 w-full">
                  <span className="text-xs text-pink-400 uppercase tracking-wider mb-2 block">Version Modifiée (Pitch-Shift Grave + Speed)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game2_mod.wav" type="audio/wav" /></audio>
                </div>
                <div className="w-full lg:w-64 shrink-0 flex items-center justify-end">
                  {!revealedSamples[2] ? (
                    <button onClick={() => toggleSample(2)} className="w-full h-full min-h-[4rem] bg-zinc-800 hover:bg-pink-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors">
                      Révéler le Hit
                    </button>
                  ) : (
                    <div className="w-full flex flex-col justify-center bg-pink-900/40 border border-pink-500/50 rounded-lg p-3 animate-fade-in gap-3">
                      <div className="text-center">
                        <p className="text-white font-bold text-sm leading-tight">What's the Difference</p>
                        <p className="text-pink-300 text-xs">Dr. Dre ft. Eminem (1999)</p>
                      </div>
                      <audio controls className="w-full h-8 filter sepia-[10%] hue-rotate-[320deg] brightness-110"><source src="images/tp10/game2_hit.mp3" type="audio/mpeg" /></audio>
                    </div>
                  )}
                </div>
              </div>

              {/* Sample 3 : Modjo / Chic */}
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1 w-full">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">3. Original (Chic - Soup For One)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game3_orig.mp3" type="audio/mpeg" /></audio>
                </div>
                <div className="flex-1 w-full">
                  <span className="text-xs text-pink-400 uppercase tracking-wider mb-2 block">Version Modifiée (Filtre Passe-Bas + Stretch)</span>
                  <audio controls className="w-full h-8"><source src="images/tp10/game3_mod.wav" type="audio/wav" /></audio>
                </div>
                <div className="w-full lg:w-64 shrink-0 flex items-center justify-end">
                  {!revealedSamples[3] ? (
                    <button onClick={() => toggleSample(3)} className="w-full h-full min-h-[4rem] bg-zinc-800 hover:bg-pink-600 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors">
                      Révéler le Hit
                    </button>
                  ) : (
                    <div className="w-full flex flex-col justify-center bg-pink-900/40 border border-pink-500/50 rounded-lg p-3 animate-fade-in gap-3">
                      <div className="text-center">
                        <p className="text-white font-bold text-sm leading-tight">Lady (Hear Me Tonight)</p>
                        <p className="text-pink-300 text-xs">Modjo (2000)</p>
                      </div>
                      <audio controls className="w-full h-8 filter sepia-[10%] hue-rotate-[320deg] brightness-110"><source src="images/tp10/game3_hit.mp3" type="audio/mpeg" /></audio>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TP11 : Robustesse Shazam */}
        <section id="tp11" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 w-8 h-8 rounded flex items-center justify-center text-sm font-mono">11</span>
            TP11 : Crash-Test de Robustesse (Méthode Shazam)
          </h3>
          
          {/* Bloc 1: Théorie */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-white mb-6">L'Algorithme Anti-Plagiat</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Colonne Gauche */}
              <div>
                <h5 className="text-lg font-medium text-blue-400 mb-3">Empreinte par Constellation</h5>
                <div className="text-zinc-400 leading-relaxed text-sm">
                  Pour identifier la source de notre sample, l'algorithme extrait les pics d'énergie locaux du spectrogramme (fréquences dominantes). Ces points forment une "constellation". Pour accroître la robustesse, ils sont groupés par paires créant un identifiant sur 32 bits :
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                    Hash = [ f<sub>i</sub> (8 bits) | f<sub>j</sub> (8 bits) | Δt<sub>ij</sub> (16 bits) ]
                  </div>
                </div>
              </div>

              {/* Colonne Droite */}
              <div>
                <h5 className="text-lg font-medium text-cyan-400 mb-3">Cohérence Temporelle (Recherche Avancée)</h5>
                <div className="text-zinc-400 leading-relaxed text-sm">
                  Face à un sample fortement altéré par notre Vocoder, une simple comparaison de hash produit trop de faux positifs. La recherche avancée ajoute une contrainte physique stricte, vérifiant que le décalage temporel global reste constant :
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm text-zinc-300 my-4 overflow-x-auto text-center whitespace-nowrap">
                    Δt = t<sub>morceau</sub> - t<sub>extrait</sub> = Constante
                  </div>
                  Seul un vrai match mathématique peut valider cette diagonale temporelle.
                </div>
              </div>
            </div>
          </div>

          {/* Bloc 2: Analyse Visuelle */}
          <h4 className="text-xl font-semibold text-white mb-6">Analyse de la Détection</h4>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-8 grid grid-cols-1 lg:grid-cols-3">
            
            {/* Zone Graphique (Prend 2 colonnes) */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800 lg:col-span-2">
              <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl h-80 flex flex-col items-center justify-center">
                <Activity size={32} className="text-zinc-600 mb-4" />
                <p className="text-zinc-400 font-semibold mb-2">Performances de Détection</p>
                <p className="text-sm text-zinc-600">(Espace pour importer la courbe Recharts du SNR)</p>
              </div>
            </div>

            {/* Texte d'analyse (Prend 1 colonne) */}
            <div className="p-6 flex flex-col justify-center bg-zinc-950/30">
              <h5 className="text-white font-medium mb-4">Bilan du Crash-Test</h5>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                  <p><b>Recherche Simplifiée :</b> Taux d'échec élevé. Les modifications temporelles du TP10 dispersent l'empreinte spectrale, rendant le simple comptage de collisions inefficace.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                  <p><b>Recherche Avancée :</b> Détection réussie. L'application du filtre de cohérence temporelle permet de retrouver le morceau source malgré le time-stretching, prouvant l'excellente robustesse de l'algorithme face au sampling créatif.</p>
                </li>
              </ul>
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
