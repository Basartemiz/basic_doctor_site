// Convert Turkish title to URL-safe slug
export function slugify(text) {
  if (!text) return ''

  // Turkish character replacements
  const turkishMap = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U'
  }

  let slug = text

  // Replace Turkish characters
  for (const [turkish, latin] of Object.entries(turkishMap)) {
    slug = slug.replace(new RegExp(turkish, 'g'), latin)
  }

  return slug
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Pre-defined slug mappings for diseases (ensures consistency)
export const diseaseSlugs = {
  // KBB
  'Kulak Enfeksiyonlari': 'kulak-enfeksiyonlari',
  'Isitme Kaybi': 'isitme-kaybi',
  'Kulak Cinlamasi (Tinnitus)': 'kulak-cinlamasi-tinnitus',
  'Bas Donmesi ve Denge Bozukluklari': 'bas-donmesi-vertigo',
  'Kulak Kiri ve Tikaclik': 'kulak-kiri-temizligi',
  'Sinuzit': 'sinuzit',
  'Alerjik Rinit': 'alerjik-rinit',
  'Burun Tikanikligi': 'burun-tikanikligi',
  'Burun Kanamasi (Epistaksis)': 'burun-kanamasi',
  'Koku Alma Bozukluklari': 'koku-alma-bozukluklari',
  'Bogaz Enfeksiyonlari': 'bogaz-enfeksiyonlari',
  'Ses Kisilikligi': 'ses-kisikligi',
  'Yutma Guclugu (Disfaji)': 'yutma-guclugu',
  'Horlama ve Uyku Apnesi': 'horlama-uyku-apnesi',
  'Bademcik ve Geniz Eti': 'bademcik-geniz-eti',

  // Cerrahi
  'Septoplasti': 'septoplasti',
  'Endoskopik Sinus Cerrahisi': 'endoskopik-sinus-cerrahisi',
  'Konka Cerrahisi': 'konka-cerrahisi',
  'Rinoplasti': 'rinoplasti',
  'Timpanoplasti': 'timpanoplasti',
  'Mastoidektomi': 'mastoidektomi',
  'Ventilasyon Tupu': 'ventilasyon-tupu',
  'Otoplasti': 'otoplasti',
  'Tonsillektomi': 'tonsillektomi',
  'Adenoidektomi': 'adenoidektomi',
  'Laringoskopi': 'laringoskopi',
  'Tiroid Cerrahisi': 'tiroid-cerrahisi',

  // Estetik
  'Alin Botoksu': 'alin-botoksu',
  'Kas Arasi Botoks': 'kas-arasi-botoks',
  'Kaz Ayagi Botoksu': 'kaz-ayagi-botoksu',
  'Masseter Botoksu': 'masseter-botoksu',
  'Nefertiti Boyun Germe': 'nefertiti-boyun-germe',
  'Dudak Dolgusu': 'dudak-dolgusu',
  'Yanak Dolgusu': 'yanak-dolgusu',
  'Cene ve Jawline': 'cene-jawline-dolgusu',
  'Goz Alti Isik Dolgusu': 'goz-alti-isik-dolgusu',
  'Burun Dolgusu': 'burun-dolgusu',
  'Mezoterapi': 'mezoterapi',
  'PRP Tedavisi': 'prp-tedavisi',
  'Kimyasal Peeling': 'kimyasal-peeling',
  'Radyofrekans': 'radyofrekans'
}

// Get slug for a disease title
export function getDiseaseSlug(title) {
  return diseaseSlugs[title] || slugify(title)
}

export default {
  slugify,
  diseaseSlugs,
  getDiseaseSlug
}
