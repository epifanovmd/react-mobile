import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PodiumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 7.09L14.45 8.58L13.8 5.77L16 3.89L13.11 3.64L12 1L10.87 3.64L8 3.89L10.18 5.77L9.5 8.58L12 7.09ZM4 13.09L6.45 14.58L5.8 11.77L8 9.89L5.11 9.64L4 7L2.87 9.64L0 9.89L2.18 11.77L1.5 14.58L4 13.09ZM20 10.09L22.45 11.58L21.8 8.77L24 6.89L21.11 6.64L20 4L18.87 6.64L16 6.89L18.18 8.77L17.5 11.58L20 10.09ZM15 23H9V10H15V23ZM7 23H1V17H7V23ZM23 23H17V13H23V23Z" />
    </Svg>
  );
};
