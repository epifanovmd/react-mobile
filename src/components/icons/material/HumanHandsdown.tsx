import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HumanHandsdownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1C10.89 1 10 1.9 10 3C10 4.11 10.89 5 12 5C13.11 5 14 4.11 14 3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1ZM10 6C9.73 6 9.5 6.11 9.31 6.28H9.3L4 11.59L5.42 13L9 9.41V22H11V15H13V22H15V9.41L18.58 13L20 11.59L14.7 6.28C14.5 6.11 14.27 6 14 6" />
    </Svg>
  );
};
