import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DatabaseSyncOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 16C12.41 16 12.81 15.97 13.21 15.94C13.4 15.18 13.72 14.46 14.16 13.83C13.47 13.94 12.74 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V11.19C18.5 11.07 19 11 19.55 11C19.7 11 19.85 11 20 11.03V7C20 4.79 16.42 3 12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.66 21 13.31 20.96 13.92 20.88C13.57 20.29 13.31 19.64 13.16 18.94C12.79 19 12.41 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16ZM12 5C15.87 5 18 6.5 18 7C18 7.5 15.87 9 12 9C8.13 9 6 7.5 6 7C6 6.5 8.13 5 12 5ZM23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5ZM19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z" />
    </Svg>
  );
};
