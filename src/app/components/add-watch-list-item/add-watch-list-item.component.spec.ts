import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchListItemComponent } from './add-watch-list-item.component';

describe('AddWatchListItemComponent', () => {
  let component: AddWatchListItemComponent;
  let fixture: ComponentFixture<AddWatchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWatchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
