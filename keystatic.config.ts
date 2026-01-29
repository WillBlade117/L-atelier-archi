import { config, fields, collection } from '@keystatic/core';

export default config({
  // SÉCURITÉ : 
  // En PROD, on force la connexion GitHub.
  // En DEV, on reste en mode local sans mot de passe.
  storage: import.meta.env.PROD
    ? {
        kind: 'github',
        repo: 'WillBlade117/L-atelier-archi', // ⚠️ On remplacera ça quand on mettra en ligne
      }
    : {
        kind: 'local',
      },

  // DÉFINITION DU CONTENU
  collections: {
    projects: collection({
      label: 'Réalisations',
      slugField: 'title',
      path: 'src/content/projects/*', // Keystatic va lire/écrire ici
      format: { contentField: 'content' },
      schema: {
        // 1. Titre (génère aussi l'URL)
        title: fields.slug({ name: { label: 'Titre du projet' } }),
        
        // 2. Infos principales
        description: fields.text({ 
            label: 'Description courte',
            description: 'Pour la carte sur la page d\'accueil', 
            multiline: true 
        }),
        
        category: fields.select({
            label: 'Catégorie',
            options: [
                { label: 'Intérieur', value: 'Interieur' },
                { label: 'Extérieur', value: 'Exterieur' },
                { label: 'Rénovation', value: 'Renovation' },
                { label: 'Commercial', value: 'Commercial' },
            ],
            defaultValue: 'Renovation'
        }),

        location: fields.text({ label: 'Lieu (Ville)' }),
        surface: fields.text({ label: 'Surface (ex: 120m²)' }),
        completionDate: fields.date({ label: 'Date de fin de chantier' }),

        // 3. Gestion des Images
        coverImage: fields.image({
            label: 'Image de couverture (Grille)',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects',
        }),

        beforeImage: fields.image({
            label: 'Image AVANT (Slider)',
            description: 'Image du chantier avant travaux',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects',
        }),

        afterImage: fields.image({
            label: 'Image APRÈS (Slider)',
            description: 'Image du chantier après travaux',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects',
        }),

        gallery: fields.array(
            fields.image({
                label: 'Image',
                directory: 'src/assets/projects',
                publicPath: '../../assets/projects',
            }),
            {
                label: 'Galerie Photos',
                itemLabel: (props) => props.value ? 'Photo additionnelle' : 'Nouvelle photo',
            }
        ),

        // 4. Contenu Riche (L'histoire du projet)
        content: fields.document({
            label: 'Détails du projet',
            formatting: true,
            dividers: true,
            links: true,
            images: {
                directory: 'src/assets/projects',
                publicPath: '../../assets/projects',
            },
        }),
      },
    }),
  },
});