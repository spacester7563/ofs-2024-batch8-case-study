package com.ofss.main.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Transaction;
import com.ofss.main.repository.AccountRepository;
import com.ofss.main.repository.CustomerRepository;
import com.ofss.main.repository.TransactionRepository;

@Component
public class AccountServiceImpl implements AccountService {

	private final AccountRepository accountRepository;
	private final TransactionRepository transactionRepository;
	private final CustomerRepository customerRepository;

	public AccountServiceImpl(AccountRepository accountRepository, CustomerRepository customerRepository, TransactionRepository transactionRepository) {
		System.out.println("Objects injected by spring");
		this.accountRepository = accountRepository;
		this.transactionRepository = transactionRepository;
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

	@Override
	public boolean transfer(List<Account> accounts) {
	   
	    if (accounts == null || accounts.size() != 2) {
	        return false;
	    }

	    Optional<Account> senderOptional = accountRepository.findById(accounts.get(1).getAccount_id());
	    if (senderOptional.isEmpty()) {
	        return false;
	    }
	    
	    Account senderAccount = senderOptional.get();
	    int updatedSenderBalance = senderAccount.getBalance() - accounts.get(1).getBalance();
	    if (updatedSenderBalance < 0) {
	      
	        return false;
	    }
	    
	    senderAccount.setBalance(updatedSenderBalance);
	    accountRepository.save(senderAccount);

	    Optional<Account> receiverOptional = accountRepository.findById(accounts.get(0).getAccount_id());
	    if (receiverOptional.isEmpty()) {
	        return false;
	    }
	    
	    Account receiverAccount = receiverOptional.get();
	    int updatedReceiverBalance = receiverAccount.getBalance() + accounts.get(0).getBalance();
	    
	    receiverAccount.setBalance(updatedReceiverBalance);
	    accountRepository.save(receiverAccount);
	    
	    LocalDateTime now = LocalDateTime.now();
	    Timestamp timestamp = Timestamp.valueOf(now);

	    System.out.println(receiverAccount.getCustomer().getCustomer_id());
	    Transaction tr = new Transaction(0, accounts.get(1).getAccount_id(), accounts.get(1).getBalance(), timestamp, accounts.get(0).getAccount_id(), receiverAccount.getCustomer().getCustomer_id());
	    System.out.println(tr);
	    transactionRepository.save(tr);
	    
	    return true;
	}

}
