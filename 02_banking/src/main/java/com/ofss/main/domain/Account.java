package com.ofss.main.domain;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Account_id")
	private int account_id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Customer_id")
	private Customer customer;
	@Column(name = "Account_type")
	private String type;
	@Column(name = "Balance")
	private int balance;
	@Column(name = "Interest_rate")
	private float rate;
	@Column(name = "Last_transaction_date")
	private Date dot;
	@Column(name = "Overdraft_limit")
	private int overdraftLimit;
	@Column(name = "Overdraft_interest_rate")
	private int overdraftRate;

	public Account() {

	}

	public Account(int account_id, Customer customer, String type, int balance, float rate, Date dot,
			int overdraftLimit, int overdraftRate) {
		super();
		this.account_id = account_id;
		this.customer = customer;
		this.type = type;
		this.balance = balance;
		this.rate = rate;
		this.dot = dot;
		this.overdraftLimit = overdraftLimit;
		this.overdraftRate = overdraftRate;
	}

	public int getAccount_id() {
		return account_id;
	}

	public void setAccount_id(int account_id) {
		this.account_id = account_id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public Date getDot() {
		return dot;
	}

	public void setDot(Date dot) {
		this.dot = dot;
	}

	public int getOverdraftLimit() {
		return overdraftLimit;
	}

	public void setOverdraftLimit(int overdraftLimit) {
		this.overdraftLimit = overdraftLimit;
	}

	public int getOverdraftRate() {
		return overdraftRate;
	}

	public void setOverdraftRate(int overdraftRate) {
		this.overdraftRate = overdraftRate;
	}

	@Override
	public String toString() {
		return "Account [account_id=" + account_id + ", customer=" + customer + ", type=" + type + ", balance="
				+ balance + ", rate=" + rate + ", dot=" + dot + ", overdraftLimit=" + overdraftLimit
				+ ", overdraftRate=" + overdraftRate + "]";
	}

}
