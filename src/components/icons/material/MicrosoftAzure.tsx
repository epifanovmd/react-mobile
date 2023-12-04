import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrosoftAzureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.05 4.24023L6.56 18.0502L2 18.0002L7.09 9.24023L13.05 4.24023ZM13.75 5.33023L22 19.7602H6.74L16.04 18.1002L11.17 12.3102L13.75 5.33023Z" />
    </Svg>
  );
};
