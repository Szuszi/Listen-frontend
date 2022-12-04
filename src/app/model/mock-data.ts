import { UserTrack } from './user-track.model';
import { User } from './user.model';

export const mockUsers: User[] = [
  {
    id: 12,
    name: 'konczAlmos',
    description: 'I like music 🎶',
    avatarUrl: 'https://ui-avatars.com/api/?name=almosKoncz',
    createdAt: '2022-11-04T14:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 1,
    name: 'Kanye West',
    description: 'ye',
    avatarUrl: 'https://ui-avatars.com/api/?name=KanyeWest',
    createdAt: '2022-11-04T14:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 14,
    name: 'Ludwig van Beethoven',
    description: 'What is internet?',
    avatarUrl: 'https://ui-avatars.com/api/?name=Lwb',
    createdAt: '2022-11-04T14:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
];

export const mockUserTracks: UserTrack[] = [
  {
    id: 11,
    userId: 12,
    name: 'My uploaded song 🎷',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    pictureUrl: 'https://picsum.photos/200?random=1',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 12,
    userId: 14,
    name: 'Eine kleine Nachtmusik',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
    pictureUrl: 'https://picsum.photos/200?random=2',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 13,
    userId: 1,
    name: 'POWER',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    pictureUrl: 'https://picsum.photos/200?random=3',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 14,
    userId: 12,
    name: 'My uploaded song #2',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    pictureUrl: 'https://picsum.photos/200?random=4',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 15,
    userId: 14,
    name: 'Sonata No. 14 "Moonlight"',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
    pictureUrl: 'https://picsum.photos/200?random=5',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
  {
    id: 16,
    userId: 1,
    name: 'POWER #2',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    pictureUrl: 'https://picsum.photos/200?random=6',
    createdAt: '2022-11-04T15:48:00.000Z',
    updatedAt: '2022-11-04T14:48:00.000Z',
  },
];
