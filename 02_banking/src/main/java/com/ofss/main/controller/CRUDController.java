package com.ofss.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Transaction;
import com.ofss.main.service.AccountService;
import com.ofss.main.service.CustomerService;
import com.ofss.main.service.TransactionService;

@RequestMapping("customerapi")
@RestController
public class CRUDController {
	
	@Autowired
	private CustomerService emp;
	
	@Autowired
	private AccountService acc;
	
	@Autowired
	private TransactionService ser;
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("login")
	public int loginUser(@RequestBody Customer body) {
		return emp.loginUser(body);
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("singup")
	public int registerUser(@RequestBody Customer body) {
		return emp.addNewUser(body);
	}

	
	@CrossOrigin(origins = "*")
	@PutMapping("account")
	public String account(@RequestBody Account body) {
		return acc.accountCreate(body);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("allaccount/{id}")
	public List<Account> account(@PathVariable int id) {
		return acc.getAllAccount(id);
	}

	
	@CrossOrigin(origins = "*")
	@PutMapping("deposit")
	public boolean deposit(@RequestBody Account body) {
		return acc.updateBalance(body);
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("transfer")
	public boolean transfer(@RequestBody List<Account> accounts) {
		return acc.transfer(accounts);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("alltransactions/{id}")
	public List<Transaction> transaction(@PathVariable int id) {
		return ser.getAllTransaction(id);
	}


	
}
