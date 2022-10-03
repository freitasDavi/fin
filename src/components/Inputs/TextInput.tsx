import React, { InputHTMLAttributes } from "react";

// interface TextInputProps {
//     name: string;
//     id: string;
// }

// type TextInputProps = React.DetailedHTMLProps<
//     React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface TextInputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ labelText, ...rest }, ref) => {
    return (
        <div>
            <label>{labelText}</label>
            <input ref={ref} {...rest} />
        </div>
    )
})


// export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(props, ref) => {
//     return (
//         <div>
//             <label htmlFor={props.id} >{name}</label>
//             <input ref={ref} type="text" id={id} name={name} {...rest} />
//         </div>
//     )
// }