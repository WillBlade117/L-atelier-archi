import { config, fields, collection } from '@keystatic/core';

export default config({
  // En PROD (o2switch) -> GitHub
  // En DEV (Local) -> Disque dur
  storage: import.meta.env.PROD
    ? {
        kind: 'cloud',
      }
    : {
        kind: 'local',
      },

    cloud: {
    project: 'will/l-atelier-archi',
    },

  collections: {
    projects: collection({
      label: 'Réalisations',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du projet' } }),
        
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

        coverImage: fields.image({
            label: 'Image de couverture (Grille)',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects/',
        }),

        beforeImage: fields.image({
            label: 'Image AVANT (Slider)',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects/',
        }),

        afterImage: fields.image({
            label: 'Image APRÈS (Slider)',
            directory: 'src/assets/projects', 
            publicPath: '../../assets/projects/',
        }),

        gallery: fields.array(
            fields.image({
                label: 'Image',
                directory: 'src/assets/projects',
                publicPath: '../../assets/projects/',
            }),
            {
                label: 'Galerie Photos',
                itemLabel: (props) => props.value ? 'Photo additionnelle' : 'Nouvelle photo',
            }
        ),

        content: fields.document({
            label: 'Détails du projet',
            formatting: true,
            dividers: true,
            links: true,
            images: {
                directory: 'src/assets/projects',
                publicPath: '../../assets/projects/',
            },
        }),
      },
    }),
  },
});