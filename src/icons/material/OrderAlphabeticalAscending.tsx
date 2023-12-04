import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OrderAlphabeticalAscendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11ZM9 13V15L5.67 19H9V21H3V19L6.33 15H3V13H9ZM7 3H5C3.9 3 3 3.9 3 5V11H5V9H7V11H9V5C9 3.9 8.11 3 7 3ZM7 7H5V5H7V7Z" />
    </Svg>
  );
};
