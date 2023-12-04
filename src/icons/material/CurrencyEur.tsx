import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyEurIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 5.5C16.58 5.5 18 6 19.2 7.08L21 5.3C19.3 3.77 17.3 3 15 3C13.05 3 11.3 3.56 9.76 4.69C8.22 5.82 7.13 7.25 6.5 9H2L3 11H6.03C6 11.2 6 11.53 6 12C6 12.47 6 12.8 6.03 13H2L3 15H6.5C7.13 16.75 8.21 18.19 9.76 19.31C11.31 20.43 13.05 21 15 21C15.92 21 17 20.77 18.17 20.32C19.34 19.87 20.3 19.33 21 18.7L19.2 16.92C18 18 16.58 18.5 15 18.5C13.89 18.5 12.78 18.17 11.66 17.5C10.54 16.83 9.72 15.97 9.22 15H15.97L15 13H8.56C8.5 12.55 8.47 12.22 8.47 12C8.47 11.78 8.5 11.45 8.56 11H15.97L15 9H9.22C9.72 8.03 10.53 7.2 11.66 6.5C12.79 5.8 13.89 5.5 15 5.5Z" />
    </Svg>
  );
};
