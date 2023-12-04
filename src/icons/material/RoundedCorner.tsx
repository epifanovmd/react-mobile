import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RoundedCornerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 19H21V21H19V19ZM19 17H21V15H19V17ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM3 5H5V3H3V5ZM7 5H9V3H7V5ZM15 21H17V19H15V21ZM11 21H13V19H11V21ZM15 21H17V19H15V21ZM7 21H9V19H7V21ZM3 21H5V19H3V21ZM21 8C21 6.67392 20.4732 5.40215 19.5355 4.46447C18.5979 3.52678 17.3261 3 16 3H11V5H16C16.7956 5 17.5587 5.31607 18.1213 5.87868C18.6839 6.44129 19 7.20435 19 8V13H21V8Z" />
    </Svg>
  );
};
