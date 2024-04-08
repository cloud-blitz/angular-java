package com.example.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbackend.model.Worker;
import com.example.springbackend.service.WorkerService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class WorkerController {

	@Autowired
	WorkerService workerService;
	
	@GetMapping("/workers")
	public ResponseEntity<List<Worker>> get() {
		List<Worker> workers = workerService.findAll();
		return new ResponseEntity<List<Worker>>(workers, HttpStatus.OK);
	}
	
	@PostMapping("/workers")
	public ResponseEntity<Worker> save(@RequestBody Worker worker) {
		Worker workerSave = workerService.save(worker);
		return new ResponseEntity<Worker>(workerSave, HttpStatus.OK);
	}
	
	@GetMapping("/workers/{id}")
	public ResponseEntity<Worker> get(@PathVariable("id") Long id) {
		Worker worker = workerService.findById(id);
		return new ResponseEntity<Worker>(worker, HttpStatus.OK);
	}
	
	@DeleteMapping("/workers/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		workerService.delete(id);
		return new ResponseEntity<String>("Worker is deleted successfully.", HttpStatus.OK);
	}
}
