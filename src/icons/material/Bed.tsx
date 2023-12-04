import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 7H11V14H3V5H1V20H3V17H21V20H23V11C23 9.93913 22.5786 8.92172 21.8284 8.17157C21.0783 7.42143 20.0609 7 19 7ZM7 13C7.79565 13 8.55871 12.6839 9.12132 12.1213C9.68393 11.5587 10 10.7956 10 10C10 9.20435 9.68393 8.44129 9.12132 7.87868C8.55871 7.31607 7.79565 7 7 7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10C4 10.7956 4.31607 11.5587 4.87868 12.1213C5.44129 12.6839 6.20435 13 7 13Z" />
    </Svg>
  );
};
