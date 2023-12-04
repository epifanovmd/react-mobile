import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanGreetingVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1.5 4V5.5C1.5 9.65 3.71 13.28 7 15.3V20H22V18C22 15.34 16.67 14 14 14C14 14 13.83 14 13.75 14C9 14 5 10 5 5.5V4H1.5ZM14 4C12.9391 4 11.9217 4.42143 11.1716 5.17157C10.4214 5.92172 10 6.93913 10 8C10 9.06087 10.4214 10.0783 11.1716 10.8284C11.9217 11.5786 12.9391 12 14 12C15.0609 12 16.0783 11.5786 16.8284 10.8284C17.5786 10.0783 18 9.06087 18 8C18 6.93913 17.5786 5.92172 16.8284 5.17157C16.0783 4.42143 15.0609 4 14 4Z" />
    </Svg>
  );
};
