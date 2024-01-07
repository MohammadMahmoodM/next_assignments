import {MouseEventHandler} from 'react';

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean,
}

export interface CarProps {
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

// interface OptionsType {
//         title: string,
//         value: string,
//       }


// export interface PropsTypes {
//     title: string,
//     options: OptionsType[]
// }

export interface PropsTypes {
    title: string,
    options: [{
        title: string,
        value: string,
      }]
}

export interface ShowMoreProps{
    pageNumber: number,
    isNext: boolean,
}