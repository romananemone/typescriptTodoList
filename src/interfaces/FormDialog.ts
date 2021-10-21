export default interface FormDialog {
    buttonText: string;
    title: string;
    handler: (data: string) => void;
};