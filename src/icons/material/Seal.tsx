import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SealIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.3901 19.37L16.3801 18L15.0001 22L11.9201 16L9.00011 22L7.62011 18L3.61011 19.37L6.53011 13.37C5.57011 12.17 5.00011 10.65 5.00011 9C5.00011 7.14348 5.73761 5.36301 7.05036 4.05025C8.36311 2.7375 10.1436 2 12.0001 2C13.8566 2 15.6371 2.7375 16.9499 4.05025C18.2626 5.36301 19.0001 7.14348 19.0001 9C19.0001 10.65 18.4301 12.17 17.4701 13.37L20.3901 19.37ZM7.00011 9L9.69011 10.34L9.50011 13.34L12.0001 11.68L14.5001 13.33L14.3301 10.34L17.0001 9L14.3201 7.65L14.5001 4.67L12.0001 6.31L9.50011 4.65L9.67011 7.66L7.00011 9Z" />
    </Svg>
  );
};
