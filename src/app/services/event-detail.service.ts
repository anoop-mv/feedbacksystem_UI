import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventDetailResponse } from 'src/app/models/EventDetailResponse';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  private baseUrl=environment.authServerUrl;
  public eventLists:EventDetailResponse[];

  constructor(private http: HttpClient) { }
  getEventList(role: string, ascid: string):Observable<any>{
  
    return this.http.get(this.baseUrl+'/getEventDetails/'+ role, { headers: { "id": ascid } });
  }
  getEventBeneficiary(eid: string):Observable<any>{
    
    return this.http.get(this.baseUrl+'/getEventBeneficiary/'+ eid );
  }
  getEventDetails(list,id){
     var object=list.filter(x=>x.eventId===id);
     return object[0];
  }
}
