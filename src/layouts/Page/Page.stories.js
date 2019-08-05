import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Page from './Page';

storiesOf('Page', module)
  .addDecorator(muiTheme())
  .add('with children', () => <Page>test</Page>);
