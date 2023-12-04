import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewComfyOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 5V19H22V5H3ZM20 9H17.75V7H20V9ZM9.25 11H11.5V13H9.25V11ZM7.25 13H5V11H7.25V13ZM11.5 9H9.25V7H11.5V9ZM13.5 7H15.75V9H13.5V7ZM11.5 15V17H9.25V15H11.5ZM13.5 15H15.75V17H13.5V15ZM13.5 13V11H15.75V13H13.5ZM17.75 11H20V13H17.75V11ZM7.25 7V9H5V7H7.25ZM5 15H7.25V17H5V15ZM17.75 17V15H20V17H17.75Z" />
    </Svg>
  );
};
