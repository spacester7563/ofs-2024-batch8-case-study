package com.ofss.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.ofss.main.domain.Transaction;

public interface TransactionRepository extends CrudRepository<Transaction, Integer>{

}
