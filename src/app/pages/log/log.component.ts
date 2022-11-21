import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Filter , Binnacle} from 'src/app/shared/interfaces/binnacle.interface';
import { BinnacleService} from '../../shared/services/binnacle.service';
import { Form, FormControl, FormGroup} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})


  export class LogComponent implements OnInit {

    constructor(private router: Router , private binnacleService: BinnacleService,
      public _MatPaginatorIntl: MatPaginatorIntl) { 
        this._MatPaginatorIntl.itemsPerPageLabel = "ítems por pagina:"
        this._MatPaginatorIntl.firstPageLabel = "Primer página"
        this._MatPaginatorIntl.lastPageLabel = "Ultima página"
        this._MatPaginatorIntl.nextPageLabel = "Siguiente página"
        this._MatPaginatorIntl.previousPageLabel = "Página anterior"
      }
    list: Binnacle[]=[]
    msg=''

  
    
    ngOnInit(): void {
     this.filter();
    }
  
    
  
    filterForm=new FormGroup<any>({
      Action: new FormControl(0),
      Table: new FormControl(0),
      Date: new FormControl('')
    });
  
    get eventTypeControl():FormControl{
      return this.filterForm.get('Action') as FormControl
    }
    get modifiedTableControl():FormControl{
      return this.filterForm.get('Table') as FormControl
    }
    get dateControl():FormControl{
      return this.filterForm.get('Date') as FormControl
    }
  
    filterObj: Filter={
      eventTypeId:0,
      modifiedTableId: 0,
      eventDate: ""
    }

    pageSize=6;
  from:number= 0;
  to:number=6;

 
    changePage(e:PageEvent){
      console.log(e)
      this.from=e.pageIndex*e.pageSize;
      this.to=this.from+e.pageSize;
    }
  
  
    filter(){
      this.binnacleService.getBinnacles(this.filterObj).subscribe({
        next: (res)=>{
          this.list=<any>res
        },error: (error: HttpErrorResponse)=>{
          console.log(error)
          this.list=[]
          this.msg="No hay registros para este filtro"
        }
      });
      
    }
  
   
  }