import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../services/search-service.service';
import {EStatusCode} from '../services/constant';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent implements OnInit {
 businessList = [{businessName: '', category: '', description: ''}];
  searchForm: FormGroup;

  constructor(private searchServiceService: SearchServiceService,
              public formBuilder: FormBuilder) {
    // form initialization
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
  }

  //get business list with search
  getBusinessList(type: any) {
    if (type) {
      this.searchForm.value.search = type;
    }
    if (this.searchForm.value.search) {
      this.searchServiceService.businessList(this.searchForm.value.search).subscribe((data: any) => {
        if (data.statusCode === EStatusCode.OK) {
          this.businessList = data.list;
        } else {
          this.businessList = [];
        }
      });
    }
  }

}
