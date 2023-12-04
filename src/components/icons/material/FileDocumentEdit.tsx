import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileDocumentEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 2C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H10V20.09L12.09 18H6V16H14.09L16.09 14H6V12H18.09L20 10.09V8L14 2H6ZM13 3.5L18.5 9H13V3.5ZM20.15 13C20 13 19.86 13.05 19.75 13.16L18.73 14.18L20.82 16.26L21.84 15.25C22.05 15.03 22.05 14.67 21.84 14.46L20.54 13.16C20.43 13.05 20.29 13 20.15 13ZM18.14 14.77L12 20.92V23H14.08L20.23 16.85L18.14 14.77Z" />
    </Svg>
  );
};
