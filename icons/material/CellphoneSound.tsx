import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CellphoneSoundIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.1 8.7C20.9 10.5 20.9 13.3 19.1 15.2L20.1 16.2C22.6 13.9 22.6 10.1 20.1 7.7L19.1 8.7ZM18 9.8L17 10.8C17.5 11.5 17.5 12.4 17 13.1L18 14.1C19.2 12.9 19.2 11.1 18 9.8ZM14 1H4C3.46957 1 2.96086 1.21071 2.58579 1.58579C2.21071 1.96086 2 2.46957 2 3V21C2 21.5304 2.21071 22.0391 2.58579 22.4142C2.96086 22.7893 3.46957 23 4 23H14C14.5304 23 15.0391 22.7893 15.4142 22.4142C15.7893 22.0391 16 21.5304 16 21V3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1ZM14 20H4V4H14V20Z" />
    </Svg>
  );
};
