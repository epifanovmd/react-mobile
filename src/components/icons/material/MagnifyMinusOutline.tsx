import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MagnifyMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 7.77609 15.3152 6.12279 14.0962 4.90381C12.8772 3.68482 11.2239 3 9.5 3C7.77609 3 6.12279 3.68482 4.90381 4.90381C3.68482 6.12279 3 7.77609 3 9.5C3 11.2239 3.68482 12.8772 4.90381 14.0962C6.12279 15.3152 7.77609 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.5L20.5 19L15.5 14ZM9.5 14C7 14 5 12 5 9.5C5 7 7 5 9.5 5C12 5 14 7 14 9.5C14 12 12 14 9.5 14ZM7 9H12V10H7V9Z" />
    </Svg>
  );
};
