import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 4H20V6H4V4ZM15.46 16.88L16.88 15.46L19 17.59L21.12 15.47L22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.46 21.12L17.59 19L15.47 16.88H15.46ZM4 7H20L21 12V13.34C20.33 13.09 19.62 12.96 18.91 12.96C17.71 12.96 16.54 13.33 15.54 14H14V15.53C13.3 16.53 12.92 17.73 12.92 18.95L13 20H4V14H3V12L4 7ZM6 14V18H12V14H6Z" />
    </Svg>
  );
};