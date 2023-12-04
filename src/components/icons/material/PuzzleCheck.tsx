import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PuzzleCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17ZM20.5 11C21.88 11 23 12.12 23 13.5C23 13.81 22.94 14.11 22.84 14.39C21.8 13.5 20.46 13 19 13C15.69 13 13 15.69 13 19V19.54C12.64 18.5 11.65 17.8 10.5 17.8C9 17.8 7.8 19 7.8 20.5V22H4C2.9 22 2 21.1 2 20V16.2H3.5C5 16.2 6.2 15 6.2 13.5C6.2 12 5 10.8 3.5 10.8H2V7.00005C2 5.89005 2.9 5.00005 4 5.00005H8V3.50005C8 2.12005 9.12 0.998047 10.5 0.998047C11.88 0.998047 13 2.12005 13 3.50005V5.00005H17C18.1 5.00005 19 5.89005 19 7.00005V11H20.5Z" />
    </Svg>
  );
};
