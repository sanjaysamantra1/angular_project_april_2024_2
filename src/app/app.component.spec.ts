import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeAll(() => {
    console.log('Before All'); // 1
  })
  beforeEach(() => { // n
    console.log('Before Each')
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })
  afterEach(() => { // n
    console.log('after Each')
  })
  afterAll(() => { // 1
    console.log('after all')
  })

  it('should create the app', () => {
    console.log('This is It-1')
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_april_2024_2' title`, () => {
    expect(app.title).toEqual('angular_project_april_2024_2');
    console.log('This is It-2')
  });

  it('should render title', () => {
    console.log('This is It-3')
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('This is App Component');
  });

  it('should test add()', () => {
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, 3)).toBe(1);
    expect(app.add(-2, -3)).toBe(-5);
  })
  it('This is the spec for sub method', () => {
    expect(app.sub(2, 3)).toBe(-1);
  })
  it('should test isEven()', () => {
    expect(app.isEven(2)).toBe('even');
    expect(app.isEven(3)).toBe('odd');
    expect(app.isEven(4)).not.toBe('odd');
    expect(app.isEven(5)).not.toBe('even');
  })
  it('should test title variable is present', () => {
    expect(app.title).toBeDefined();
    expect(app.arr1).toEqual(app.arr2);
    expect(app.arr1).toContain(10);
    expect(app.arr1).not.toContain(30);
  })
});
