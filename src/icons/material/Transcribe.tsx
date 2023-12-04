import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TranscribeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 5C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C2.89 19 2 18.1 2 17V7C2 5.89 2.89 5 4 5H20ZM18 17V15H12.5L10.5 17H18ZM6 17H8.5L15.35 10.12C15.55 9.93 15.55 9.61 15.35 9.41L13.59 7.65C13.39 7.45 13.07 7.45 12.88 7.65L6 14.53V17Z" />
    </Svg>
  );
};
