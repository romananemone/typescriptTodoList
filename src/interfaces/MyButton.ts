export enum buttonSize {
    sm = 'sm',
    lg = 'lg',
}

export enum buttonType {
    button = 'button',
    reset = 'reset',
    submit = 'submit',
}

export default interface MyButton {
    active: boolean;
    disabled: boolean;
    size: buttonSize,
    type: buttonType,
    variant: string,
    bsPrefix: string;
    handler: (data?: any) => void;
    text: string;
}