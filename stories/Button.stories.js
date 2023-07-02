import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// ----- type -----
export const Primary = {
  args: {
    category: 'Primary',
    label: 'Button',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/sBjQp9ikP1Hw9KWnBpDMMA/JJUN-Design-Library?type=design&node-id=285%3A9487&mode=design&t=2dxRTSULnS0ssJlK-1",
    },
  },
};

export const SolidSecondary = {
  args: {
    category: 'SolidSecondary',
    label: 'Button',
  },
};

export const Outline = {
  args: {
    category: 'Outline',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    category: 'Secondary',
    label: 'Button',
  },
};

// ----- size -----
export const Large = {// l = 56px(3.5rem)
  args: {
    size: 'Large',
    label: 'Button',
  },
};

export const Medium = {// m = 48px(3rem)
  args: {
    size: 'Medium',
    label: 'Button',
  },
};

export const Small = {// s = 32px(2rem)
  args: {
    size: 'Small',
    label: 'Button',
  },
};
// l = 56px(3.5rem)
// m = 48px(3rem)
// s = 32px(2rem)