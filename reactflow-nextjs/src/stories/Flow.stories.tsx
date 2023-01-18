// Button.stories.js|jsx

import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Flow from '../components/Flow';

import 'reactflow/dist/style.css';
import './flow.css';

export const Simple = () => <Flow />;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Flow',
  component: Flow,
} as ComponentMeta<typeof Flow>;
