import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Posts } from './Posts';
import { Mock } from '../../storybook';

export default {
  title: 'Posts',
  component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = (args) => (
  <Mock>
    <Posts {...args} />
  </Mock>
);

export const Initial = Template.bind({});
Initial.args = {
  articles: [
    {
      title: 'Когда времени на раскачку нет',
      text: '12 января 2022',
      slug: 'my-page',
    },
    {
      title: 'Удаленка vs работа в офисе',
      text: '23 июня 2021',
      slug: 'my-page2',
    },
    {
      title: 'Как быстро запускать проекты',
      text: '19 мая 2021',
      slug: 'my-page3',
    },
  ],
};

export const NoArticles = Template.bind({});
NoArticles.args = {
  articles: [],
};
