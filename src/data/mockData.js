import argan from '../assets/argan.png';
import rug from '../assets/rug.jpg';
import calyptus from '../assets/calyptus.png';
import tajine from '../assets/tajine.jpg';
export const categories = [
    { id: 'argan', name: 'Argan Oil', icon: 'Droplets' },
    { id: 'honey', name: 'Honey', icon: 'Hexagon' },
    { id: 'rugs', name: 'Carpets & Rugs', icon: 'Layers' },
    { id: 'pottery', name: 'Pottery', icon: 'Cpu' }, // Cpu as placeholder, will use Lucide icons dynamically
    { id: 'spices', name: 'Spices', icon: 'Sun' },
    
];

export const cities = ['Agadir', 'Marrakech', 'Casablanca', 'Fes', 'Essaouira', 'Tangier'];

export const products = [
    {
        id: 1,
        title: 'Pure Organic Argan Oil - 100ml',
        price: 150,
        currency: 'MAD',
        category: 'Argan Oil',
        city: 'Agadir',
        description: 'cold-pressed cosmetic argan oil, directly from the cooperative. Certified organic.',
        image: argan,
        seller: {
            name: 'Coop Amal',
            type: 'Cooperative',
            joined: '2023',
        }
    },
    {
        id: 2,
        title: 'Handwoven Berber Rug - Beni Ourain',
        price: 3500,
        currency: 'MAD',
        category: 'Carpets & Rugs',
        city: 'Marrakech',
        description: 'Authentic wool rug, hand-knotted by women in the Atlas Mountains. Dimensions: 2m x 3m.',
        image: rug,
        seller: {
            name: 'Atlas Weavers',
            type: 'Cooperative',
            joined: '2022',
        }
    },
    {
        id: 3,
        title: 'Organic Eucalyptus Honey',
        price: 200,
        currency: 'MAD',
        category: 'Honey',
        city: 'Essaouira',
        description: 'Pure eucalyptus honey harvested in the region of Essaouira. 1kg jar.',
        image: calyptus,
        seller: {
            name: 'Apiary Mougaro',
            type: 'Cooperative',
            joined: '2024',
        }
    },
    {
        id: 4,
        title: 'Traditional Clay Tagine',
        price: 120,
        currency: 'MAD',
        category: 'Pottery',
        city: 'Fes',
        description: 'Hand-painted decorative tagine, food safe. Classic Fes blue patterns.',
        image: tajine,
        seller: {
            name: 'Fes Artisans',
            type: 'Cooperative',
            joined: '2021',
        }
    }
];
