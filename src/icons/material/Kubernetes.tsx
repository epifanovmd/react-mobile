import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KubernetesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.95 13.4995H13.72C13.54 13.6095 13.46 13.8195 13.54 13.9995L14.4 16.1095C15.23 15.5795 15.86 14.7895 16.19 13.8595L13.96 13.4995H13.95ZM10.5 13.7895C10.44 13.6195 10.29 13.4995 10.12 13.4995H10.04L7.82 13.8695C8.15 14.7895 8.78 15.5695 9.61 16.0995L10.46 14.0295V13.9995C10.5 13.9495 10.5 13.8595 10.5 13.7895ZM12.33 14.5995C12.23 14.4195 12 14.3495 11.82 14.4495C11.75 14.4995 11.7 14.5295 11.67 14.5995H11.66L10.57 16.5695C11.35 16.8295 12.19 16.8795 13 16.6895C13.14 16.6595 13.29 16.6195 13.43 16.5695L12.34 14.5995H12.33ZM15.78 10.0295L14.1 11.4995L14.11 11.5295C13.95 11.6695 13.93 11.9095 14.07 12.0595C14.12 12.1195 14.18 12.1595 14.25 12.1795L14.26 12.1895L16.43 12.8095C16.5 11.8395 16.29 10.8595 15.78 10.0295ZM12.67 10.1895C12.68 10.3995 12.85 10.5595 13.06 10.5495C13.14 10.5495 13.21 10.5295 13.27 10.4995H13.28L15.11 9.18945C14.41 8.49945 13.5 8.06945 12.54 7.94945L12.67 10.1895ZM10.73 10.4995C10.9 10.6095 11.13 10.5795 11.25 10.4095C11.3 10.3495 11.32 10.2795 11.33 10.1995H11.34L11.46 7.94945C11.31 7.96945 11.16 7.99945 11 8.02945C10.2 8.20945 9.46 8.60945 8.88 9.18945L10.72 10.4995H10.73ZM9.74 12.1895C9.94 12.1395 10.06 11.9295 10 11.7295C10 11.6495 9.95001 11.5895 9.89001 11.5395V11.5295L8.21 9.99945C7.69 10.8595 7.47 11.8395 7.58 12.8195L9.74 12.1995V12.1895ZM11.38 12.8495L12 13.1495L12.62 12.8495L12.77 12.1795L12.34 11.6495H11.65L11.22 12.1795L11.38 12.8495ZM22.27 14.1695L20.5 6.49945C20.41 6.07945 20.13 5.73945 19.76 5.55945L12.59 2.12945C12.22 1.95945 11.78 1.95945 11.4 2.12945L4.24 5.55945C3.87 5.73945 3.59 6.07945 3.5 6.49945L1.73 14.1695C1.68 14.3695 1.68 14.5695 1.73 14.7595C1.74 14.8195 1.76 14.8795 1.78 14.9395C1.81 15.0295 1.86 15.1295 1.91 15.2095C1.94 15.2495 1.96 15.2895 2 15.3195L6.95 21.4995C6.97 21.4995 7 21.5395 7 21.5595C7.1 21.6495 7.19 21.7195 7.28 21.7795C7.4 21.8595 7.54 21.9195 7.68 21.9495C7.79 21.9995 7.91 21.9995 8 21.9995H16.12C16.19 21.9995 16.26 21.9695 16.32 21.9495C16.37 21.9395 16.42 21.9195 16.46 21.9095C16.5 21.8895 16.53 21.8795 16.57 21.8595C16.62 21.8395 16.67 21.8095 16.72 21.7795C16.84 21.6995 16.95 21.5995 17.05 21.4995L17.2 21.2995L22 15.3195C22.1 15.1995 22.17 15.0695 22.22 14.9395C22.24 14.8795 22.26 14.8195 22.27 14.7595C22.32 14.5695 22.32 14.3595 22.27 14.1695ZM14.84 17.1595C14.86 17.2195 14.88 17.2795 14.91 17.3295C14.87 17.4095 14.85 17.4995 14.88 17.5895C15 17.8295 15.11 18.0495 15.26 18.2695C15.34 18.3795 15.42 18.4995 15.5 18.6095C15.5 18.6395 15.53 18.6895 15.54 18.7295C15.66 18.9295 15.6 19.1895 15.39 19.3195C15.18 19.4495 14.92 19.3695 14.8 19.1695C14.79 19.1395 14.78 19.1195 14.77 19.0895C14.75 19.0595 14.73 18.9995 14.71 18.9995C14.66 18.8495 14.62 18.7195 14.59 18.5895C14.5 18.3395 14.42 18.0995 14.29 17.8695C14.24 17.7995 14.16 17.7495 14.08 17.7295L14 17.5695C12.71 18.0495 11.3 18.0495 10.03 17.5595L9.93001 17.7395C9.86001 17.7495 9.79 17.7795 9.74 17.8295C9.6 18.0695 9.5 18.3195 9.41 18.5995C9.38 18.7295 9.34 18.8595 9.29 18.9995C9.27 18.9995 9.25 19.0695 9.23 19.0995C9.15 19.3195 8.91001 19.4395 8.68001 19.3595C8.46001 19.2795 8.34 19.0395 8.42 18.8095C8.43001 18.7795 8.45 18.7595 8.46 18.7295C8.5 18.6995 8.5 18.6495 8.5 18.6195C8.59 18.4995 8.66 18.3895 8.74 18.2695C8.9 18.0595 9.03 17.8195 9.13 17.5795C9.14001 17.4995 9.13001 17.4095 9.10001 17.3295L9.17 17.1495C8 16.4495 7.12 15.3595 6.7 14.0595L6.5 14.0895C6.44 14.0395 6.35 13.9995 6.27 13.9995C6 14.0495 5.76 14.1295 5.5 14.2195C5.39 14.2795 5.26 14.3295 5.13 14.3695C5.1 14.3795 5.06 14.3895 5 14.3995C4.78 14.4695 4.54 14.3495 4.46 14.1295C4.39 13.8995 4.5 13.6595 4.74 13.5795C4.76 13.5795 4.79 13.5695 4.82 13.5695V13.5595H4.83L4.94 13.5395C5.08 13.4995 5.22 13.4995 5.35 13.4995C5.61 13.4995 5.87 13.4395 6.12 13.3795C6.2 13.3295 6.26 13.2695 6.31 13.1895L6.5 13.1395C6.29 11.7795 6.60001 10.4095 7.36 9.26945L7.22 9.14945C7.22 9.05945 7.19 8.96945 7.14 8.89945C6.94 8.72945 6.73 8.57945 6.5 8.44945C6.38 8.38945 6.26 8.31945 6.14 8.23945C6.12 8.21945 6.08 8.18945 6.06 8.16945L6.05 8.15945C5.85001 7.99945 5.8 7.73945 5.94 7.52945C6.03 7.42945 6.15 7.37945 6.29 7.37945C6.4 7.38945 6.5 7.42945 6.59 7.49945L6.68 7.56945C6.78 7.65945 6.87 7.76945 6.96 7.86945C7.14 8.05945 7.33 8.23945 7.54 8.38945C7.62 8.42945 7.71 8.43945 7.8 8.41945L7.95 8.52945C8.7 7.72945 9.68 7.16945 10.75 6.92945C11 6.86945 11.27 6.82945 11.53 6.80945L11.54 6.62945C11.61 6.56945 11.65 6.49945 11.68 6.39945C11.69 6.13945 11.67 5.87945 11.63 5.62945C11.6 5.49945 11.58 5.35945 11.57 5.21945V5.09945C11.55 4.85945 11.72 4.64945 11.96 4.61945C12.2 4.58945 12.4 4.76945 12.43 4.99945V5.21945C12.42 5.35945 12.4 5.49945 12.37 5.62945C12.33 5.87945 12.31 6.13945 12.32 6.39945C12.34 6.49945 12.39 6.56945 12.46 6.61945L12.47 6.80945C13.83 6.92945 15.09 7.53945 16.03 8.52945L16.19 8.40945C16.28 8.42945 16.37 8.41945 16.45 8.37945C16.66 8.22945 16.86 8.04945 17.03 7.85945C17.12 7.75945 17.21 7.65945 17.31 7.55945C17.34 7.53945 17.38 7.49945 17.41 7.49945C17.58 7.31945 17.85 7.31945 18 7.49945C18.19 7.65945 18.18 7.92945 18 8.09945C18 8.11945 17.97 8.13945 17.94 8.15945C17.92 8.17945 17.88 8.20945 17.85 8.22945C17.74 8.30945 17.62 8.37945 17.5 8.43945C17.27 8.56945 17.05 8.71945 16.86 8.88945C16.8 8.95945 16.77 9.03945 16.78 9.12945L16.62 9.26945C17.39 10.3995 17.7 11.7795 17.5 13.1295L17.69 13.1795C17.73 13.2595 17.8 13.3195 17.88 13.3595C18.13 13.4295 18.39 13.4695 18.65 13.4995H19.06C19.09 13.5295 19.14 13.5395 19.18 13.5495C19.42 13.5795 19.58 13.7995 19.55 14.0395C19.5 14.2695 19.31 14.4395 19.07 14.4095C19.04 14.3995 19 14.3995 19 14.3895V14.3795C18.94 14.3795 18.9 14.3695 18.86 14.3595C18.73 14.3195 18.61 14.2695 18.5 14.2095C18.24 14.1095 18 14.0395 17.73 13.9995C17.64 13.9995 17.56 13.9995 17.5 14.0795C17.43 14.0695 17.37 14.0595 17.31 14.0495C16.9 15.3595 16 16.4595 14.84 17.1595Z" />
    </Svg>
  );
};