import { createReducer, on } from '@ngrx/store';
import { WatchListItem } from '../interfaces/watch-list-item.interface';
import { add, edit, remove } from '../actions/watch-list.actions';

export const initialState = [];

const _watchListReducer = createReducer(initialState,
  on(add, (state, { payload }) => state.concat(payload.watchListItem)),
  on(edit, (state, { payload }) => editWatchlistItem(state, payload.watchListItem)),
  on(remove, (state, { payload }) => state.filter(i => i.stockName !== payload.stockName)), //currently removes everything or does nothing
);

function editWatchlistItem(state: WatchListItem[], updatedWatchListItem: WatchListItem) {
  //because the state is immutable, we have to create a cloned array and update the cloned array and return it
  const clonedState = state.map(i => ({...i}))
  return clonedState.map(watchListItem => {
    if( watchListItem.stockSymbol === updatedWatchListItem.stockSymbol) {
      return updatedWatchListItem;
    }else{
      return watchListItem;
    }
  });
}

export function watchListReducer(state, action) {
  return _watchListReducer(state, action);
}