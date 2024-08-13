package com.ofss.main.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Transaction;

@Service
public interface TransactionService {
	List<Transaction> getAllTransaction(int Account_id);
}
