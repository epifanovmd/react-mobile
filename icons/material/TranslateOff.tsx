import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TranslateOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.17 5.81055C11.87 6.69055 11.47 7.55055 11 8.39055L12.35 9.74055C13.11 8.50055 13.71 7.18055 14.13 5.81055H17.16V3.75055H9.94V1.69055H7.87V3.75055H6.37L8.43 5.81055H12.17ZM15.53 12.9105L17.03 14.4105L17.67 12.6905L19.08 16.4705L22.39 19.7705L18.7 9.94055H16.64L15.53 12.9105ZM1.31 1.31055L0 2.62055L1.13 3.75055H0.65V5.81055H3.19L5.26 7.88055H4.46C5.21 9.56055 6.24 11.1505 7.53 12.5805L2.28 17.7605L3.75 19.2205L8.91 14.0705L12.11 17.2705L12.8 15.4305L14.1 16.7205L12 22.3105H14.06L15.22 19.2205H16.6L21.38 24.0005L22.69 22.6905L1.31 1.31055Z" />
    </Svg>
  );
};
