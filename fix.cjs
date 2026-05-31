const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const replacements = {
  'Donnes': 'Données',
  'Anne': 'Année',
  'Prnom': 'Prénom',
  'Ralis': 'Réalisé',
  'Synthse': 'Synthèse',
  'dmarche': 'démarche',
  'ddi': 'dédié',
  'frquentielle': 'fréquentielle',
  'dmontrer': 'démontrer',
  'mathmatiques': 'mathématiques',
  'mise en uvre': 'mise en œuvre',
  'Mathmatique': 'Mathématique',
  'mathmatique': 'mathématique',
  'paramtre': 'paramètre',
  'rgularisation': 'régularisation',
  'Rgularisation': 'Régularisation',
  'gographique': 'géographique',
  'donnes': 'données',
  'rapiage': 'rapiéçage',
  'dtails': 'détails',
  'quilibr': 'équilibré',
  'Modle': 'Modèle',
  'modle': 'modèle',
  'nergie': 'énergie',
  'porte': 'portée',
  'thorique': 'théorique',
  'Insrer': 'Insérer',
  'volution': 'évolution',
  'rsolution': 'résolution',
  'quation': 'équation',
  'insrer': 'insérer',
  'luminosit': 'luminosité',
  'prservation': 'préservation',
  'Naf': 'Naïf',
  'Rsultat': 'Résultat',
  'rsultat': 'résultat',
  'harmonis': 'harmonisée',
  'dcoloration': 'décoloration',
  'Reprsentation': 'Représentation',
  'Frquence': 'Fréquence',
  'Transforme': 'Transformée',
  ' Court': 'à Court',
  'compress': 'compressé',
  'Modifi': 'Modifié',
  'lment': 'élément',
  'rle': 'rôle',
  'Mthode': 'Méthode',
  'cration': 'création',
  'frquence': 'fréquence',
  'dlai': 'délai',
  'value': 'évalue',
  'face ': 'face à',
  'diffrents': 'différents',
  'Rfrence': 'Référence',
  'visant ': 'visant à',
  'mais aussi ': 'mais aussi à',
  'Simplifie': 'Simplifiée',
  ' 2026': '© 2026'
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.replaceAll(bad, good);
}

// Fix Tailwind classes bug for the tabs (double quotes to backticks)
content = content.replace(
  /className=\{"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors \$\{poissonTab === 'base' \? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800\/50'\}”/g,
  "className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === 'base' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}"
);

content = content.replace(
  'className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'naive\' ? \'bg-zinc-800 text-white shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}"}',
  'className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'naive\' ? \'bg-zinc-800 text-white shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}`}'
);

content = content.replace(
  'className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'base\' ? \'bg-zinc-800 text-white shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}"}',
  'className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'base\' ? \'bg-zinc-800 text-white shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}`}'
);

content = content.replace(
  'className={"flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'poisson\' ? \'bg-zinc-800 text-cyan-400 shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}"}',
  'className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${poissonTab === \'poisson\' ? \'bg-zinc-800 text-cyan-400 shadow-sm\' : \'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50\'}`}'
);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Fixed typos.");
