import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PuzzleHeartOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.2 22V21.7C13.2 20.21 12 19 10.5 19C9 19 7.8 20.21 7.8 21.7V22H4C2.9 22 2 21.11 2 20V16.2H2.3C3.79 16.2 5 15 5 13.5C5 12 3.79 10.8 2.3 10.8H2V7C2 5.9 2.9 5 4 5H7.04C7.28 3.3 8.74 2 10.5 2C12.26 2 13.72 3.3 13.96 5H17C18.11 5 19 5.9 19 7V10.04C20.45 10.25 21.61 11.34 21.91 12.76C21.05 12.28 20.06 12 19 12C18.89 12 18.78 12 18.67 12C18.61 12 18.56 12 18.5 12H17V7H12V5.5C12 4.67 11.33 4 10.5 4C9.67 4 9 4.67 9 5.5V7H4V9.12C5.76 9.8 7 11.5 7 13.5C7 15.5 5.75 17.2 4 17.88V20H6.12C6.8 18.25 8.5 17 10.5 17C11.43 17 12.29 17.28 13 17.74C13 17.83 13 17.91 13 18C13 19.54 13.58 20.94 14.54 22H13.2ZM19 22.3L19.6 21.8C21.6 19.9 23 18.7 23 17.2C23 15.9 22 15 20.8 15C20.1 15 19.4 15.3 19 15.8C18.6 15.3 17.9 15 17.2 15C16 15 15 16 15 17.2C15 18.7 16.4 19.9 18.4 21.8L19 22.3Z" />
    </Svg>
  );
};
