import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonSickIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 9C19.9 9 19 8.1 19 7C19 5.9 21 3 21 3C21 3 23 5.9 23 7C23 8.1 22.1 9 21 9ZM17.5 7C17.5 6.27 17.91 5.29 18.42 4.34C16.68 2.88 14.44 2 12 2C6.47 2 2 6.5 2 12C2 17.5 6.47 22 12 22C17.5 22 22 17.5 22 12C22 11.45 21.94 10.91 21.86 10.38C21.58 10.45 21.3 10.5 21 10.5C19.07 10.5 17.5 8.93 17.5 7ZM15.62 7.38L16.68 8.44L15.62 9.5L16.68 10.56L15.62 11.62L13.5 9.5L15.62 7.38ZM7.32 8.44L8.38 7.38L10.5 9.5L8.38 11.62L7.32 10.56L8.38 9.5L7.32 8.44ZM15.44 17C14.75 15.81 13.47 15 12 15C10.53 15 9.25 15.81 8.56 17H6.88C7.18 16.24 7.64 15.57 8.22 15L5.24 13.3C4.79 13.56 4.23 13.58 3.75 13.3C3.03 12.89 2.79 11.97 3.2 11.25C3.61 10.53 4.53 10.29 5.25 10.7C5.73 11 6 11.5 6 12L9.57 14.06C10.3 13.7 11.12 13.5 12 13.5C14.33 13.5 16.32 14.95 17.12 17H15.44Z" />
    </Svg>
  );
};
