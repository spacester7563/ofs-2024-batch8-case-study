package com.ofss.main.domain;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Customer_id")
    private int customer_id;
	@Column(name = "First_name")
    private String first_name;
	@Column(name = "Last_name")
    private String last_name;
	@Column(name = "Email")
    private String email;
	@Column(name = "Password")
    private String password;
	@Column(name = "Date_of_birth")
    private Date dob;
	@Column(name = "Verified")
    private boolean verified;
	@Column(name = "Locked")
    private boolean locked;
	@Column(name = "Login_attempts")
    private int attempts;

    public Customer() {

    }

    public Customer(int customer_id, String first_name, String last_name, String email, String password, Date dob,
        boolean verified, boolean locked, int attempts) {
        this.customer_id = customer_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.verified = verified;
        this.locked = locked;
        this.attempts = attempts;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public int getAttempts() {
        return attempts;
    }

    public void setAttempts(int attempts) {
        this.attempts = attempts;
    }

    @Override
    public String toString() {
        return "Customer [customer_id=" + customer_id + ", first_name=" + first_name + ", last_name=" + last_name
                + ", email=" + email + ", password=" + password + ", dob=" + dob + ", verified=" + verified
                + ", locked=" + locked + ", attempts=" + attempts + "]";
    }

    

}
