import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  path = "demo"
  constructor(private backendService: BackendService) { }

  onSave(details){
    return this.backendService.post(this.path + '/saveDatails', details);
  }

  onGet(){
    return this.backendService.get(this.path + '/getList');
  }

  getById(id){
    return this.backendService.get(this.path + '/id/' + id); // here in the backend in the params we can get id as in nodejs req.params.id
  }

  deleteById(id){
    return this.backendService.delete(this.path + '/id/' + id); // here in the backend in the params we can get id as in nodejs req.params.id
  }
}
