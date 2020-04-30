import { createSelector } from '@ngrx/store';
import { WatchListItem } from '../interfaces/watch-list-item.interface';

export interface AppState {
    watchListItems: WatchListItem[];
}

export const selectAllWatchListItems = (state: AppState) => state.watchListItems;

export const selectWatchListItemWithSymbol = createSelector(
    selectAllWatchListItems,
    (watchListItems: WatchListItem[], props) => {
      if (props && props['stockSymbol']) {
        return watchListItems.find(i => i.stockSymbol === props['stockSymbol']);
      } else {
        return null;
      }
      
    }
  );