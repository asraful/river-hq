package com.river.core.hr.service.payment;

import com.river.core.hr.entity.payment.Payment;
import org.springframework.stereotype.Service;

@Service
public class RemunerationService implements PaymentService {

    @Override
    public Payment preparePayment() {
        return null;
    }

    @Override
    public void pay(Payment payment) {

    }
}
