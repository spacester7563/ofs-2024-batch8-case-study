package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;

public interface AccountService {
	List<Account> getAllAccount(int customerId);

	boolean transfer(List<Account> account);
	boolean updateBalance(Account account);
	
	List<Account> getAllUserAccount();
	String accountCreate(Account account);
}
