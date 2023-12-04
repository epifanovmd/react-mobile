import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileTreeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H9V7H3V3ZM15 10H21V14H15V10ZM15 17H21V21H15V17ZM13 13H7V18H13V20H7H5V9H7V11H13V13Z" />
    </Svg>
  );
};
