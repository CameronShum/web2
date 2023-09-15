import React from 'react';
import * as Icon from 'images/contact';

const contactInfo: {
  name: string;
  link: string;
  Image: React.ComponentType;
}[] = [
  {
    name: 'hello@cameronshum.com',
    link: 'mailto:hello@cameronshum.com',
    Image: Icon.Email,
  },
  {
    name: 'cameronshum',
    link: 'https://github.com/cameronshum',
    Image: Icon.Github,
  },
  {
    name: '@pbandcam',
    link: 'https://www.instagram.com/pbandcam/',
    Image: Icon.Instagram,
  },
  {
    name: 'Cameron Shum',
    link: 'https://www.linkedin.com/in/cameron-shum-18a112189/',
    Image: Icon.LinkedIn,
  },
  {
    name: 'Resume',
    link: 'https://cameronshum.com/resume',
    Image: Icon.Resume,
  },
];

export default contactInfo;
