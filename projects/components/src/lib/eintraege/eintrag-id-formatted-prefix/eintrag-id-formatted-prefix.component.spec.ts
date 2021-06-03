import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EintragIdFormattedPrefixComponent } from './eintrag-id-formatted-prefix.component';

describe('EintragIdFormattedPrefixComponent', () =>
{
    let component: EintragIdFormattedPrefixComponent;
    let fixture: ComponentFixture<EintragIdFormattedPrefixComponent>;

    beforeEach(waitForAsync(() =>
    {
        TestBed.configureTestingModule({
            imports: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(EintragIdFormattedPrefixComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
