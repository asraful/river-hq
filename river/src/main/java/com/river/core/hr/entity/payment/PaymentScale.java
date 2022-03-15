package com.river.core.hr.entity.payment;

import com.river.core.hr.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "payment_scale")
public class PaymentScale extends BaseEntity {
    private PayScaleType scale;
    private String description;
    private double houseRent;
    private double transportationCost;
    private double variablePay;
    private double medicalAllowance;
}
