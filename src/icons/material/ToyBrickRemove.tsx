import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToyBrickRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V6H11V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V6H3V20H13.09C13.0294 19.6701 12.9993 19.3354 13 19C12.9995 18.0399 13.2294 17.0936 13.6705 16.2407C14.1115 15.3879 14.7508 14.6533 15.5346 14.0988C16.3184 13.5442 17.2239 13.1859 18.1749 13.0539C19.1259 12.9218 20.0948 13.0199 21 13.34V6H19ZM22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.46 21.12L17.59 19L15.46 16.88L16.88 15.46L19 17.59L21.12 15.46L22.54 16.88Z" />
    </Svg>
  );
};
