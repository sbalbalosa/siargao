import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(muiTheme())
  .add('No props', () => <Header />);
