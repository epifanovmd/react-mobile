import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReiterateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.5 4.00003C8.85932 3.99517 7.2775 4.61093 6.07192 5.72378C4.86634 6.83662 4.1262 8.36421 4 10H1L5 14L9 10H6.03C6.15295 8.90035 6.67676 7.88452 7.50134 7.14664C8.32592 6.40876 9.39347 6.00055 10.5 6.00003C11.6935 6.00003 12.8381 6.47413 13.682 7.31805C14.5259 8.16196 15 9.30655 15 10.5C15 11.6935 14.5259 12.8381 13.682 13.682C12.8381 14.5259 11.6935 15 10.5 15H2V17H10.5C12.2239 17 13.8772 16.3152 15.0962 15.0962C16.3152 13.8772 17 12.2239 17 10.5C17 8.77612 16.3152 7.12282 15.0962 5.90383C13.8772 4.68485 12.2239 4.00003 10.5 4.00003ZM19 12V15H16.5C15.89 15.8129 15.1211 16.4934 14.24 17H19V20L23 16L19 12Z" />
    </Svg>
  );
};
