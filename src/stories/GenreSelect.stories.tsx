import '../components/SearchForm/styles.css';

import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { GENRES_LIST } from './constants';
import GenreSelectWrapper, { type IGenreSelectWrapperProps } from './GenreSelectWrapper';

const GenreSelectStory: ComponentMeta<typeof GenreSelectWrapper> = {
  title: 'Components/GenreSelect',
  component: GenreSelectWrapper
}
export default GenreSelectStory;

const Template: ComponentStory<typeof GenreSelectWrapper> = (props: IGenreSelectWrapperProps) =>
<GenreSelectWrapper {...props} />;

export const WithNoGenres = {
  ...Template.bind({}),
  args: {
    genres: [],
    selectedGenreId: '',
    onSelect: action('Genre selection initiated in GenreSelect with id')
  }
};

export const WithSomeGenres = {
  ...Template.bind({}),
  args: {
    genres: GENRES_LIST,
    selectedGenreId: '',
    onSelect: action('Genre selection initiated in GenreSelect with id')
  }
};
