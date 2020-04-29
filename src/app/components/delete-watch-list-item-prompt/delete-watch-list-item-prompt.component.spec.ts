import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWatchListItemPromptComponent } from './delete-watch-list-item-prompt.component';

describe('DeleteWatchListItemPromptComponent', () => {
  let component: DeleteWatchListItemPromptComponent;
  let fixture: ComponentFixture<DeleteWatchListItemPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWatchListItemPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWatchListItemPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
