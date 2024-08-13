package com.ofss.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.repository.AccountRepository;
import com.ofss.main.repository.CustomerRepository;

@Component
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerRepository acc;
	@Override
	public List<Customer> getAllUserAccounts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int addNewUser(Customer customer) {
		Customer cus = acc.save(customer);
		return  cus.getCustomer_id();
	}

	@Override
	public int loginUser(Customer customers) {
		List<Customer> cu =  (List<Customer>) acc.findAll();
	    for (Customer customer : cu) {
	        if (customer.getEmail().equals(customers.getEmail()) && customer.getPassword().equals(customers.getPassword())) {
	            return customer.getCustomer_id();
	        }
	    }
	    
		return 0;
	}

	@Override
	public boolean isVerified(int id) {
		// TODO Auto-generated method stub
		return false;
	}


}
