import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RadioIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V8C2 7.15 2.53 6.42 3.28 6.13L15.71 1L16.47 2.83L8.83 6H20ZM20 8H4V12H16V10H18V12H20V8ZM7 14C6.20435 14 5.44129 14.3161 4.87868 14.8787C4.31607 15.4413 4 16.2044 4 17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20C7.79565 20 8.55871 19.6839 9.12132 19.1213C9.68393 18.5587 10 17.7956 10 17C10 16.2044 9.68393 15.4413 9.12132 14.8787C8.55871 14.3161 7.79565 14 7 14Z" />
    </Svg>
  );
};
