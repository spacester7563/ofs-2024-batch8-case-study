package com.ofss.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Transaction;
import com.ofss.main.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionRepository acc;

	
	@Override
	public List<Transaction> getAllTransaction(int Account_id) {
		Iterable<Transaction> tl = acc.findAll();
		List<Transaction> emp = new ArrayList<Transaction>();
		for(Transaction tran : tl) {
			if(tran.getCustomerId() == Account_id) {
				emp.add(tran);
			}
		}
		return emp;
	}
	
	

}
