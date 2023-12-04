import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowBottomRightThinCircleOutlineIcon: FC<
  FlexSvgProps
> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 7.59 7.59 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03ZM12 22C17.54 22 22 17.54 22 12C22 6.46 17.54 2 12 2C6.46 2 2 6.46 2 12C2 17.54 6.46 22 12 22ZM13.88 12.47L16 10.36V16H10.36L12.47 13.88L7.5 8.9L8.9 7.5" />
    </Svg>
  );
};
