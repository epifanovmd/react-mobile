import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TransmissionTowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.27998 5.45L6.49998 4.55L7.75998 2H16.23L17.5 4.55L15.72 5.44L15 4H8.99998L8.27998 5.45ZM18.62 8H14.09L13.3 5H10.7L9.90998 8H5.37998L4.09998 10.55L5.88998 11.44L6.61998 10H17.38L18.1 11.45L19.89 10.56L18.62 8ZM17.77 22H15.7L15.46 21.1L12 15.9L8.52998 21.1L8.29998 22H6.22998L9.11998 11H11.19L10.83 12.35L12 14.1L13.16 12.35L12.81 11H14.88L17.77 22ZM11.4 15L10.5 13.65L9.31998 18.13L11.4 15ZM14.68 18.12L13.5 13.64L12.6 15L14.68 18.12Z" />
    </Svg>
  );
};
