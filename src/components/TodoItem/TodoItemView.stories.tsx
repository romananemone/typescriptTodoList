import React from "react";
import {Meta, Story} from "@storybook/react";
import TodoItemView from "./TodoItemView";
import Todo from "../../interfaces/Todo";

export default {
    component: TodoItemView,
    title: "Todo Item",
    argTypes: {removeTodoWrapper: {action: 'removed todo'}, toggleTodoWrapper: {action: 'toggled todo'}},
} as Meta;

const Template: Story<Todo> = (args) => <TodoItemView {...args} />;

export const InProgress = Template.bind({});
InProgress.args = {
    id: 1,
    title: "exemple task",
    completed: false,
};

export const done = Template.bind({});
done.args = {
    id: 1,
    title: "exemple task",
    completed: true,
}