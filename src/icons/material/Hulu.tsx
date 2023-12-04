import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HuluIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.5 12.8V22H14.7V13.9C14.7 13.2 14.1 12.6 13.4 12.6H10.5C9.8 12.6 9.2 13.2 9.2 13.9V22H4.5V2H9.3V8.4C9.6 8.3 9.9 8.2 10.2 8.2H15C17.5 8.2 19.5 10.3 19.5 12.8Z" />
    </Svg>
  );
};
