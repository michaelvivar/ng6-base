import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { ViewChild } from "@angular/core";
import { Base } from "./base.component";

export abstract class Table<T> extends Base {

   protected dataSource: MatTableDataSource<T>;
   abstract columns: string[];
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

   set data(value: T[]) {
      this.dataSource = new MatTableDataSource<T>(value);
      if (this.paginator) {
         this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
         this.dataSource.sort = this.sort;
      }
   }

   get data() {
      return <any>this.dataSource;
   }
}