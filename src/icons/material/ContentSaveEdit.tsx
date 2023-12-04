import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 19L10.14 18.86C8.9 18.5 8 17.36 8 16C8 15.2044 8.31607 14.4413 8.87868 13.8787C9.44129 13.3161 10.2044 13 11 13C12.36 13 13.5 13.9 13.86 15.14L20 9V7L16 3H4C2.89 3 2 3.9 2 5V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H10V19ZM4 5H14V9H4V5ZM20.04 12.13C19.9 12.13 19.76 12.19 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.92 14.14 21.92 13.79 21.7 13.58L20.42 12.3C20.31 12.19 20.18 12.13 20.04 12.13ZM18.07 13.88L12 19.94V22H14.06L20.12 15.93L18.07 13.88Z" />
    </Svg>
  );
};
