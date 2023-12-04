import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 14C17.55 14 16.69 14.38 16.06 15H9.39L5.74 3H2V5H4.26L7 14.05C6.85 14.03 6.68 14 6.5 14C4.57 14 3 15.57 3 17.5C3 19.43 4.57 21 6.5 21C7.89 21 9.09 20.18 9.65 19H15.35C15.91 20.18 17.11 21 18.5 21C20.43 21 22 19.43 22 17.5C22 15.57 20.43 14 18.5 14ZM6.5 19C5.67 19 5 18.33 5 17.5C5 16.67 5.67 16 6.5 16C7.33 16 8 16.67 8 17.5C8 18.33 7.33 19 6.5 19ZM18.5 19C17.67 19 17 18.33 17 17.5C17 16.67 17.67 16 18.5 16C19.33 16 20 16.67 20 17.5C20 18.33 19.33 19 18.5 19ZM10.13 14L9.53 12H12.76C13.5 12 14.21 12.43 14.55 13.11L15 14H10.13Z" />
    </Svg>
  );
};
