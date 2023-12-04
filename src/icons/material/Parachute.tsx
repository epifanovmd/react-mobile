import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ParachuteIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.1999 10.95L11.9999 23L2.77991 10.96L2.86991 10.88C3.07991 10.67 3.32991 10.5 3.57991 10.36L10.7299 19.69L8.57991 13L9.23991 11.81L11.9999 20.38L14.7299 11.8L15.3999 13L13.2699 19.69L20.4099 10.35C20.6599 10.5 20.8999 10.64 21.0999 10.85L21.1999 10.95ZM4.99991 9C6.49991 9 7.80991 9.86 8.49991 11.1C9.16991 9.86 10.4699 9 11.9999 9C13.4999 9 14.7999 9.85 15.4999 11.09C16.1599 9.84 17.4699 9 18.9999 9C20.0899 9 21.0899 9.42 21.8099 10.14C20.9399 5.5 16.8799 2 11.9999 2C7.08991 2 3.02991 5.5 2.15991 10.17C2.88991 9.45 3.88991 9 4.99991 9Z" />
    </Svg>
  );
};
