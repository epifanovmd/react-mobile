import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LedVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM12 5C12.5304 5 13.0391 5.21071 13.4142 5.58579C13.7893 5.96086 14 6.46957 14 7V12H10V7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5Z" />
    </Svg>
  );
};
