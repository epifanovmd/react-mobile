import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NewspaperVariantMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4ZM21 5V15H8V5H21ZM21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3ZM9 6H12V11H9V6ZM20 14H9V12H20V14ZM20 8H14V6H20V8ZM20 11H14V9H20V11Z" />
    </Svg>
  );
};
