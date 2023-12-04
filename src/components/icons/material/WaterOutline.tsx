import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WaterOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3.76953L11.25 4.60953C11.25 4.60953 9.97 6.05953 8.68 7.93953C7.39 9.81953 6 12.0695 6 14.2295C6 15.8208 6.63214 17.347 7.75736 18.4722C8.88258 19.5974 10.4087 20.2295 12 20.2295C13.5913 20.2295 15.1174 19.5974 16.2426 18.4722C17.3679 17.347 18 15.8208 18 14.2295C18 12.0695 16.61 9.81953 15.32 7.93953C14.03 6.05953 12.75 4.60953 12.75 4.60953L12 3.76953ZM12 6.89953C12.44 7.41953 12.84 7.84953 13.68 9.06953C14.89 10.8295 16 13.0695 16 14.2295C16 16.4495 14.22 18.2295 12 18.2295C9.78 18.2295 8 16.4495 8 14.2295C8 13.0695 9.11 10.8295 10.32 9.06953C11.16 7.84953 11.56 7.41953 12 6.89953Z" />
    </Svg>
  );
};
