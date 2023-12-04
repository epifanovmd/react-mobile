import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApplicationBracketsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 2H3C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V20C1 20.5304 1.21071 21.0391 1.58579 21.4142C1.96086 21.7893 2.46957 22 3 22H21C21.5304 22 22.0391 21.7893 22.4142 21.4142C22.7893 21.0391 23 20.5304 23 20V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2ZM11 17.5L9.5 19L5 14.5L9.5 10L11 11.5L8 14.5L11 17.5ZM14.5 19L13 17.5L16 14.5L13 11.5L14.5 10L19 14.5L14.5 19ZM21 7H3V4H21V7Z" />
    </Svg>
  );
};
