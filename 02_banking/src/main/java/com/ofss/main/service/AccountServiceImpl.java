package com.ofss.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.repository.AccountRepository;
import com.ofss.main.repository.CustomerRepository;

@Component
public class AccountServiceImpl implements AccountService {

	private final AccountRepository accountRepository;
	private final CustomerRepository customerRepository;

	public AccountServiceImpl(AccountRepository accountRepository, CustomerRepository customerRepository) {
		System.out.println("Objects injected by spring");
		this.accountRepository = accountRepository;
		this.customerRepository = customerRepository;
	}

	@Override
	public List<Account> getAllAccount(int customerId) {

		Optional<Customer> customerOptional = customerRepository.findById(customerId);
		if (customerOptional.isPresent()) {
			Customer customer = customerOptional.get();
			List<Account> accounts = accountRepository.findByCustomer(customer);
			System.out.println(accounts);
			return accounts;
		}
		return null;
	}


	@Override
	public boolean updateBalance(Account account) {
	    Optional<Account> accountOptional = accountRepository.findById(account.getAccount_id());

	    if (accountOptional.isPresent()) {
	        Account existingAccount = accountOptional.get();

	        int newBalance = existingAccount.getBalance() + account.getBalance();
	        
	        existingAccount.setBalance(newBalance);
	        accountRepository.save(existingAccount);
	        return true;
	    }

	
	    return false;
	}


	@Override
	public List<Account> getAllUserAccount() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String accountCreate(Account account) {
		Account accountss = accountRepository.save(account);
		return "Account Created id:" + accountss.getAccount_id();
	}

}
