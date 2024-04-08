package com.example.springbackend.service;

import java.util.List;

import com.example.springbackend.model.Worker;


public interface WorkerService {

	List<Worker> findAll();
	
	Worker save(Worker worker);
	
	Worker findById(Long id);
	
	void delete(Long id);
}
