import { ShelfIcon, HtmlIcon, PlaneIcon, PhoneIcon } from 'images/sections';

const sections = [
  {
    name: 'Projects',
    color: '#FFB300',
    secondaryColor: '#FFF8E3',
    Icon: ShelfIcon,
  },
  {
    name: 'Experience',
    color: '#7C4DFF',
    secondaryColor: '#EEE7F5',
    Icon: HtmlIcon,
  },
  {
    name: 'Travels',
    color: '#039BE5',
    secondaryColor: '#DFF5FD',
    Icon: PlaneIcon,
  },
  {
    name: 'Contact',
    color: '#00BFA5',
    secondaryColor: '#DEF2F1',
    Icon: PhoneIcon,
  },
] as const;

export default sections;
