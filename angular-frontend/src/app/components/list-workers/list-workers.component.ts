import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrls: ['./list-workers.component.css']
})
export class ListWorkersComponent implements OnInit {

  workers: Worker[] = [];

  filters = {
    keyWord: ''
  }

  constructor(private _workerService: WorkerService) { }

  ngOnInit(): void {
    this.listWorkers();
  }

  clickMethod(id: Number) {
    if(confirm("Are you sure you want to delete this worker?")) {
      this.deleteWorker(id);
    }
  }

  deleteWorker(id: Number) {
    this._workerService.deleteWorker(id).subscribe(
      data => {
        console.log('Deleted response.', data);
        this.listWorkers();
      }
    )
  }

  listWorkers() {
    this._workerService.getWorkers().subscribe(
      data => this.workers = this.filterName(data)
    )
  }

  filterName(workers: Worker[]) {
    return workers.filter((e) => {
      return e.workerFName.toLowerCase().includes(this.filters.keyWord.toLowerCase());
    })

  }
}
