declare module '*.png'
//usado para declarar ao projeto q quando importar uma imagem ser reconhecido

declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}