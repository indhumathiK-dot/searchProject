import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../services/search-service.service';
import {EStatusCode} from '../services/constant';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent implements OnInit {
 businessList = [{businessName: '', category: '', description: ''}];
  constructor(private searchServiceService: SearchServiceService) { }

  ngOnInit(): void {
    this.getBusinessList('');
  }

  getBusinessList(searchWord: string) {
    this.searchServiceService.businessList(searchWord).subscribe((data: any) => {
      if (data.statusCode === EStatusCode.OK) {
        this.businessList = data.list;
      }
    });
  }

}
