import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CtaFooterComponent } from '../components/cta-footer/cta-footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        AboutComponent,
        FeaturedProductsComponent,
        TestimonialsComponent,
        FooterComponent,
        CtaFooterComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
