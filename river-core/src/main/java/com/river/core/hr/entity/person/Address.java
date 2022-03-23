package com.river.core.hr.entity.person;

import com.river.core.hr.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "address")
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Address extends BaseEntity {
    private String permanentAddress;
    private String presentAddress;
    private String emergencyContact;
    private String eMail;
    private String cellNumber;
}
