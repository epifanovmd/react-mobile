import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PodiumGoldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7.09L14.45 8.58L13.8 5.77L16 3.89L13.11 3.64L12 1L10.87 3.64L8 3.89L10.18 5.77L9.5 8.58L12 7.09ZM15 23H9V10H15V23ZM1 17V23H7V17H1ZM5 21H3V19H5V21ZM17 13V23H23V13H17ZM21 21H19V15H21V21Z" />
    </Svg>
  );
};
