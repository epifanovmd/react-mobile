import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GolfCartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.89 12.37L18.25 5H19V3H3V7H1V9H3V12.54C2.37231 13.1014 1.86983 13.7887 1.52525 14.5571C1.18067 15.3255 1.0017 16.1579 1 17V19H3C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22C6.79565 22 7.55871 21.6839 8.12132 21.1213C8.68393 20.5587 9 19.7956 9 19H15C15 19.7956 15.3161 20.5587 15.8787 21.1213C16.4413 21.6839 17.2044 22 18 22C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19H23V17C23.0002 16.0066 22.7045 15.0357 22.1506 14.2111C21.5967 13.3864 20.8097 12.7455 19.89 12.37ZM6 20.5C5.70333 20.5 5.41332 20.412 5.16664 20.2472C4.91997 20.0824 4.72771 19.8481 4.61418 19.574C4.50065 19.2999 4.47094 18.9983 4.52882 18.7074C4.5867 18.4164 4.72956 18.1491 4.93934 17.9393C5.14912 17.7296 5.41639 17.5867 5.70736 17.5288C5.99834 17.4709 6.29994 17.5007 6.57403 17.6142C6.84811 17.7277 7.08238 17.92 7.2472 18.1666C7.41203 18.4133 7.5 18.7033 7.5 19C7.5 19.3978 7.34196 19.7794 7.06066 20.0607C6.77936 20.342 6.39782 20.5 6 20.5ZM15.53 12L14.38 10.28L15.8 9.33L14.7 7.67L10.2 10.67L11.3 12.33L12.73 11.38L13.88 13.12L13 14H10.2L5 7V5H16.2L17.75 12H15.53ZM18 20.5C17.7033 20.5 17.4133 20.412 17.1666 20.2472C16.92 20.0824 16.7277 19.8481 16.6142 19.574C16.5007 19.2999 16.4709 18.9983 16.5288 18.7074C16.5867 18.4164 16.7296 18.1491 16.9393 17.9393C17.1491 17.7296 17.4164 17.5867 17.7074 17.5288C17.9983 17.4709 18.2999 17.5007 18.574 17.6142C18.8481 17.7277 19.0824 17.92 19.2472 18.1666C19.412 18.4133 19.5 18.7033 19.5 19C19.5 19.3978 19.342 19.7794 19.0607 20.0607C18.7794 20.342 18.3978 20.5 18 20.5Z" />
    </Svg>
  );
};
