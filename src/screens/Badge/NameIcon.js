import * as React from 'react';
import { Avatar } from 'react-native-paper';
import Badges from './Badges';

const NameIcon = () => (
  <>
  <Avatar.Text size={50} label="K" />
  <Badges/>
  </>
);

export default NameIcon;