import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StockSearchComponent } from '../stock-search/stock-search.component';
import { WatchListItemComponent } from '../watch-list-item/watch-list-item.component';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LimitToPipe } from '../../pipes/limit-to.pipe'; 
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatListModule, MatInputModule, FormsModule, StoreModule.forRoot({}), HttpClientTestingModule],
      declarations: [ HomeComponent, WatchListItemComponent, StockSearchComponent, LimitToPipe ],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
