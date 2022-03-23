package com.river.core.hr.entity.payment;

import com.river.core.hr.entity.BaseEntity;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "payment_scale")
@NoArgsConstructor
public class PaymentScale extends BaseEntity {
    private PayScaleType scale;
    private String description;
    private double houseRent;
    private double basicPay;
    private double transportationPay;
    private double variablePay;
    private double medicalAllowance;
    private double bonusPay;
    private BonusType bonusType;
}
