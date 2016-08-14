import {Injectable}from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class RecordsService {
  constructor(private _http: Http){
  }
  getAllRecords() : Observable<Response> {
    var url = 'http://localhost:3000/api/records';
    console.log('here i am');
    return this._http.get(url);

    // return {
    //   "result": [{
    //     "id": "ISLANDTON-16CAP-00000-001JF",
    //     "type":
    //     {
    //       "module": "ServiceRequest",
    //       "value": "ServiceRequest/CRM/CRM/NA",
    //       "type": "CRM",
    //       "text": "CRM", "alias": "CRM",
    //       "category": "NA",
    //       "group": "ServiceRequest",
    //       "subType": "CRM",
    //       "id": "ServiceRequest-CRM-CRM-NA"
    //     },
    //     "description": "Transcript: If you think you want to work that you think. Recording URL: https://api.twilio.com/2010-04-01/Accounts/AC9c238a35a3c65706996b568724c444b4/Recordings/REcb9aa1799d7f74ca8547022ac3394e24 From: 8479259613", "module": "ServiceRequest",
    //     "serviceProviderCode": "ISLANDTON", "status": { "value": "Submitted", "text": "Submitted" },
    //     "createdBy": "DEVELOPER", "openedDate": "2016-08-09 00:00:00", "trackingId": 250617919, "customId": "SR-2016-01026", "jobValue": 0, "value": "16CAP-00000-001JF"
    //   }, {
    //       "id": "ISLANDTON-16CAP-00000-001JG",
    //       "type": {
    //         "module": "ServiceRequest",
    //         "value": "ServiceRequest/CRM/CRM/NA",
    //         "type": "CRM",
    //         "text": "CRM",
    //         "alias": "CRM", "category": "NA",
    //         "group": "ServiceRequest",
    //         "subType": "CRM",
    //         "id": "ServiceRequest-CRM-CRM-NA"
    //       },
    //       "description": "Transcript: Been able to thank you didn't want him to send you to a T.. Over 10010010800. Recording URL: https://api.twilio.com/2010-04-01/Accounts/AC9c238a35a3c65706996b568724c444b4/Recordings/RE154ac2f2597d4272eac4fadca1cf3eb0 From: 8479259613",
    //       "module": "ServiceRequest",
    //       "serviceProviderCode": "ISLANDTON",
    //       "status": { "value": "Submitted", "text": "Submitted" },
    //       "createdBy": "DEVELOPER",
    //       "openedDate": "2016-08-09 00:00:00",
    //       "trackingId": 202149694,
    //       "customId": "SR-2016-01027",
    //       "jobValue": 0,
    //       "value": "16CAP-00000-001JG"
    //     }, {
    //       "id": "ISLANDTON-16CAP-00000-001JH",
    //       "type": { "module": "ServiceRequest", "value": "ServiceRequest/CRM/CRM/NA", "type": "CRM", "text": "CRM", "alias": "CRM", "category": "NA", "group": "ServiceRequest", "subType": "CRM", "id": "ServiceRequest-CRM-CRM-NA" },
    //       "description": "Transcript: If you're going to. Recording URL: https://api.twilio.com/2010-04-01/Accounts/AC9c238a35a3c65706996b568724c444b4/Recordings/RE225149a13afde1f02f9396561e099f12 From: 8479259613", "module": "ServiceRequest", "serviceProviderCode": "ISLANDTON", "status": { "value": "Submitted", "text": "Submitted" },
    //       "createdBy": "DEVELOPER",
    //       "openedDate": "2016-08-09 00:00:00",
    //       "trackingId": 243175773, "customId": "SR-2016-01028",
    //       "jobValue": 0, "value": "16CAP-00000-001JH"
    //     }], "status": 200,
    //   "page": { "offset": 0, "limit": 3, "hasmore": true }
    // };
  }
}
