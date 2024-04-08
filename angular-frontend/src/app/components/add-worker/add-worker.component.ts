import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  worker: Worker = new Worker();

  constructor(private _workerService: WorkerService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent) {
      const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
      this._workerService.getWorker(id).subscribe(
        data => this.worker = data
      )
    }
  }

  saveWorker() {
    this._workerService.saveWorkers(this.worker).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/workers");
      }
    )
  }

  clickMethod(id: Number) {
    if(confirm("Are you sure you to delete this worker?")) {
      this.deleteWorker(id);
    }
  }

  deleteWorker(id: Number) {
    this._workerService.deleteWorker(id).subscribe(
      data => {
        console.log('Deleted response.', data);
        this._router.navigateByUrl('/workers');
      }
    )
  }

}
