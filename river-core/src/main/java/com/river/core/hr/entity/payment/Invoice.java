package com.river.core.hr.entity.payment;

import com.river.core.hr.entity.BaseEntity;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "invoices")
@NoArgsConstructor
public class Invoice extends BaseEntity {
    private String description;
    private InvoiceType invoiceType;
}
