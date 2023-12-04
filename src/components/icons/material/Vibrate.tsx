import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VibrateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 19H8V5H16V19ZM16.5 3H7.5C7.10218 3 6.72064 3.15804 6.43934 3.43934C6.15804 3.72064 6 4.10218 6 4.5V19.5C6 19.8978 6.15804 20.2794 6.43934 20.5607C6.72064 20.842 7.10218 21 7.5 21H16.5C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5V4.5C18 4.10218 17.842 3.72064 17.5607 3.43934C17.2794 3.15804 16.8978 3 16.5 3ZM19 17H21V7H19V17ZM22 9V15H24V9H22ZM3 17H5V7H3V17ZM0 15H2V9H0V15Z" />
    </Svg>
  );
};
