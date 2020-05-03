import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { StockSearchComponent } from './stock-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LimitToPipe } from '../../pipes/limit-to.pipe';
import { StockService } from '../../services/stock/stock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StockSearchComponent', () => {
  let component: StockSearchComponent;
  let fixture: ComponentFixture<StockSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatListModule, MatInputModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ StockSearchComponent, LimitToPipe ],
      providers: [StockService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
