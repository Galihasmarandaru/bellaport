import type { Recommendation } from '@/types/recommendation';
import canggu from '@/assets/images/penginapan/penginapan1.jpeg';
import defaultImage from '@/assets/images/default-img.png';

export const travelling: Recommendation[] = [
  {
    id: '1',
    image: canggu,
    title: 'Canggu Villa Yogyakarta',
    description:
      'Smartwatch keren dengan fitur detak jantung, GPS, dan notifikasi real-time.',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    city: 'dieng',
    link: 'https://www.tiktok.com/@bellarhemaagnesiaa/video/7593585332612877586?_r=1&_t=ZS-93ArQJIhV0n',
  },
  {
    id: '2',
    image: defaultImage,
    title: 'Produk B - Headphone Wireless',
    description:
      'Headphone dengan kualitas suara jernih, bass mantap, dan baterai tahan lama.',
    video: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    city: 'yogyakarta',
    link: 'https://affiliate.example.com/product-b',
  },
];
