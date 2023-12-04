import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const QrcodeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 11H5V13H3V11ZM11 5H13V9H11V5ZM9 11H13V15H11V13H9V11ZM15 11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11ZM19 19V15H17V19H19ZM15 3H21V9H15V3ZM17 5V7H19V5H17ZM3 3H9V9H3V3ZM5 5V7H7V5H5ZM3 15H9V21H3V15ZM5 17V19H7V17H5Z" />
    </Svg>
  );
};
