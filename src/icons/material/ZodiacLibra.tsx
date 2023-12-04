import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacLibraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 16V18H13V15.91C16 15.36 17.96 12.5 17.41 9.5C16.86 6.5 14 4.54 11 5.09C8 5.65 6.04 8.5 6.59 11.5C7 13.74 8.76 15.5 11 15.91V18H4V16H6.92C5.37 14.59 4.5 12.59 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5C19.5 12.59 18.63 14.59 17.08 16H20ZM20 19H4V21H20V19Z" />
    </Svg>
  );
};
