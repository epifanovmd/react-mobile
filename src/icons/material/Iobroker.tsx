import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IobrokerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.0001 2C11.5001 2 11.0001 2.04 10.5001 2.11V4.85C11.0001 4.75 11.5001 4.7 12.0001 4.7C12.5001 4.7 13.0001 4.75 13.5001 4.85V2.12C13.0001 2.04 12.5001 2 12.0001 2ZM9.82011 2.25C5.40011 3.25 2.11011 7.24 2.11011 12C2.11011 17.5 6.53011 22 12.0001 22C17.4701 22 21.8901 17.5 21.8901 12C21.8901 7.24 18.6001 3.25 14.1901 2.25V5.03C17.1701 5.96 19.3401 8.73 19.3401 12C19.3401 16 16.0501 19.3 12.0001 19.3C7.96011 19.3 4.67011 16 4.67011 12C4.67011 8.73 6.84011 5.96 9.82011 5.03V2.25ZM12.0001 5.45C11.5001 5.45 11.0001 5.5 10.5001 5.62V18.27C11.0001 18.38 11.5001 18.44 12.0001 18.44C12.5001 18.44 13.0001 18.39 13.5001 18.27V5.62C13.0001 5.5 12.5001 5.45 12.0001 5.45Z" />
    </Svg>
  );
};
