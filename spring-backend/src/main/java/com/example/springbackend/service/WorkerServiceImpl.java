package com.example.springbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbackend.model.Worker;
import com.example.springbackend.repository.WorkerRepository;

@Service
public class WorkerServiceImpl implements WorkerService {

	@Autowired
	WorkerRepository workerRepository;
	
	@Override
	public List<Worker> findAll() {
		return workerRepository.findAll();
	}

	@Override
	public Worker save(Worker worker) {
		workerRepository.save(worker);
		return worker;
	}

	@Override
	public Worker findById(Long id) {
		if(workerRepository.findById(id).isPresent()) {
			return workerRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		Worker worker = findById(id);
		workerRepository.delete(worker);
	}

}
