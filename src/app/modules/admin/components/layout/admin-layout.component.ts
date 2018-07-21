import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Select } from '../../../../../../node_modules/@ngxs/store';

@Component({
  templateUrl: './admin-layout.template.html',
  styleUrls: ['./admin-layout.style.css']
})
export class AdminLayout {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      //map(result => result.matches)
      map(result => false)
    );

  @Select(store => store.admin.page.title) title$: Observable<string>;

  constructor(private breakpointObserver: BreakpointObserver) { }

}
