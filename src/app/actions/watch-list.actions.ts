import { createAction, props } from '@ngrx/store';
import { WatchListItem } from '../interfaces/watch-list-item.interface';

export const add = createAction('[WatchList Component] Add', props<{ payload: {watchListItem: WatchListItem} }>());
export const edit = createAction('[WatchList Component] Edit', props<{ payload: {watchListItem: WatchListItem} }>());
export const remove = createAction('[WatchList Component] Remove', props<{ payload: {stockName: String}}>());