import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveEyeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.5 11C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM20 13.55V10H18V13.06C18.69 13.14 19.36 13.31 20 13.55ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM8.85 19H6V10H4V21H9.78C9.54 20.61 9.32 20.19 9.14 19.75L8.85 19ZM17 18C16.44 18 16 18.44 16 19C16 19.56 16.44 20 17 20C17.56 20 18 19.56 18 19C18 18.44 17.56 18 17 18ZM23 19C22.06 21.34 19.73 23 17 23C14.27 23 11.94 21.34 11 19C11.94 16.66 14.27 15 17 15C19.73 15 22.06 16.66 23 19ZM19.5 19C19.5 17.62 18.38 16.5 17 16.5C15.62 16.5 14.5 17.62 14.5 19C14.5 20.38 15.62 21.5 17 21.5C18.38 21.5 19.5 20.38 19.5 19Z" />
    </Svg>
  );
};
