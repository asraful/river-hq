package com.river.core.hr.service.payment;

import com.river.core.hr.entity.payment.Payment;
import com.river.core.hr.entity.person.Person;

public interface PaymentService {
    Payment preparePayment();

    void pay(Payment payment);
}
