import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M21 9.25V9.2C21 8.0799 21 7.51984 20.782 7.09202C20.5903 6.7157 20.2843 6.40974 19.908 6.21799C19.4802 6 18.9201 6 17.8 6L3 6M3 6L3 16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.7157 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H7M3 6L3 5.6C3 5.03995 3 4.75992 3.109 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.33726C9.58185 4 9.70415 4 9.81923 4.02763C9.92127 4.05213 10.0188 4.09253 10.1083 4.14736C10.2092 4.2092 10.2957 4.29568 10.4686 4.46863L12 6M16 14L18 16M11 21V18.5L18.5 11L21 13.5L13.5 21H11Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
