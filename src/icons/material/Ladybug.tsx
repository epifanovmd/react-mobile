import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LadybugIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5.00021C12.74 5.00021 13.47 5.10021 14.15 5.29021L15.78 2.46021C16.06 2.00021 16.67 1.82021 17.15 2.10021C17.63 2.37021 17.79 3.00021 17.5 3.46021L16 6.07021C17.22 6.78021 18.23 7.79021 18.93 9.00021H5.07C5.77 7.79021 6.78 6.78021 8 6.07021L6.5 3.46021C6.21 3.00021 6.37 2.37021 6.85 2.10021C7.33 1.82021 7.94 2.00021 8.22 2.46021L9.85 5.29021C10.53 5.10021 11.26 5.00021 12 5.00021ZM20 13.0002C20 17.1702 16.82 20.5902 12.75 20.9702V10.5002H19.6C19.86 11.2902 20 12.1302 20 13.0002ZM4 13.0002C4 12.1302 4.14 11.2902 4.4 10.5002H11.25V20.9702C7.18 20.5902 4 17.1702 4 13.0002Z" />
    </Svg>
  );
};
