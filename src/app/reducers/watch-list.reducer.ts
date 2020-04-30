import { createReducer, on } from '@ngrx/store';
import { WatchListItem } from '../interfaces/watch-list-item.interface';
import { add, edit, remove } from '../actions/watch-list.actions';

export const initialState = [];

const _watchListReducer = createReducer(initialState,
  on(add, (state, { payload }) => state.concat(payload.watchListItem)),
  on(edit, state => []), //currently removes everything or does nothing
  on(remove, state => []), //currently removes everything or does nothing
);

export function watchListReducer(state, action) {
  return _watchListReducer(state, action);
}