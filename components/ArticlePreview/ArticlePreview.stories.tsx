import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePreview } from './ArticlePreview';
import { Mock } from '../../storybook';

export default {
  title: 'ArticlePreview',
  component: ArticlePreview,
} as ComponentMeta<typeof ArticlePreview>;

const Template: ComponentStory<typeof ArticlePreview> = (args) => (
  <Mock>
    <ArticlePreview {...args} />
  </Mock>
);

export const Initial = Template.bind({});
Initial.args = {
  title: 'Когда времени на раскачку нет',
  text: '12 января 2022',
  slug: 'my-page',
};
