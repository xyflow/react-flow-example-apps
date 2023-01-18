import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Flow from '../components/Flow';

import 'reactflow/dist/style.css';
import './flow.css';

export const Simple = () => <Flow />;

export default {
  title: 'Flow',
  component: Flow,
} as ComponentMeta<typeof Flow>;
