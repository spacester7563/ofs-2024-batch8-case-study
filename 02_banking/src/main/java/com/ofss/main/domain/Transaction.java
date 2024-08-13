package com.ofss.main.domain;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Payment_id")
    private int paymentId;

    @Column(name = "Account_id")
    private int accountId;

    @Column(name = "Amount")
    private int amount;

    @Column(name = "Payment_date")
    private Date paymentDate;

    @Column(name = "Receiver_id")
    private int receiverId;
    
    @Column(name = "customer_id")
    private int customer_id;


    public Transaction() {}



    public Transaction(int paymentId, int accountId, int amount, Date paymentDate, int receiverId, int customer_id) {
		super();
		this.paymentId = paymentId;
		this.accountId = accountId;
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.receiverId = receiverId;
		this.customer_id = customer_id;
	}

	// Getters and Setters
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }



	public int getCustomerId() {
		return customer_id;
	}



	public void setCustomerId(int customer_id) {
		this.customer_id = customer_id;
	}



	@Override
	public String toString() {
		return "Transaction [paymentId=" + paymentId + ", accountId=" + accountId + ", amount=" + amount
				+ ", paymentDate=" + paymentDate + ", receiverId=" + receiverId + ", customer_id=" + customer_id + "]";
	}
    

}
