import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Footer from './Footer';

storiesOf('Footer', module)
  .addDecorator(muiTheme())
  .add('No props', () => <Footer />);
