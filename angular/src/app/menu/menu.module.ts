import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuService } from './shared/menu.service';

import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MenuFiltersComponent } from './menu-filters/menu-filters.component';
import { FilterSearchComponent } from './menu-filters/filter-search/filter-search.component';
import { FilterSortComponent } from './menu-filters/filter-sort/filter-sort.component';
import { FilterCheckboxesComponent } from './menu-filters/filter-checkboxes/filter-checkboxes.component';
import { MenuCardCommentsComponent } from './menu-card/menu-card-comments/menu-card-comments.component';
import { MenuCardDetailsComponent } from './menu-card/menu-card-details/menu-card-details.component';
import { StoreModule } from '@ngrx/store';
import { menuReducer } from './store/reducers/menu.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './store/effects/menu.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([MenuEffects]),
    StoreModule.forFeature('menu', menuReducer),
  ],
  providers: [
    MenuService,
  ],
  declarations: [
    MenuComponent,
    MenuCardComponent,
    MenuFiltersComponent,
    FilterSearchComponent,
    FilterSortComponent,
    FilterCheckboxesComponent,
    MenuCardCommentsComponent,
    MenuCardDetailsComponent,
  ],
  exports: [
    MenuComponent,
  ],
  entryComponents: [
  ],
})
export class MenuModule { }
