import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MessageDrawIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 14H10.5L12.5 12H18V14ZM6 14V11.5L12.88 4.64C13.07 4.45 13.39 4.45 13.59 4.64L15.35 6.41C15.55 6.61 15.55 6.92 15.35 7.12L8.47 14H6ZM20 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V22L6 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V4C22 2.89 21.1 2 20 2Z" />
    </Svg>
  );
};
