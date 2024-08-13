package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;

public interface CustomerService {
	
	List<Customer> getAllUserAccounts();
    int addNewUser(Customer customer);
    int loginUser(Customer customer);
    boolean isVerified(int id);

}
