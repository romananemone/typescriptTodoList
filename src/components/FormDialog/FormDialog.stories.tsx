import React from "react";
import {Meta, Story} from "@storybook/react";
import FormDialog from "./FormDialog";
import FormDialogInterface from "../../interfaces/FormDialog";

export default {
    component: FormDialog,
    title: "Form Dialog",
    argTypes: {handler: {action: 'handler event'}},
} as Meta;

const Template: Story<FormDialogInterface> = (args) => <FormDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    buttonText: 'Open form dialog button',
    title: 'example title',
};