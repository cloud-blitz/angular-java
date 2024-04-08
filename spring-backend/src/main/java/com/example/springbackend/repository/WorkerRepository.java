package com.example.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbackend.model.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {

}
