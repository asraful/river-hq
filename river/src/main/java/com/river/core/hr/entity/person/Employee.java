package com.river.core.hr.entity.person;

import com.river.core.hr.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "employee")
public class Employee extends BaseEntity {
    private String firstName;
    private String lastName;
    private String middleName;
    private Date dateOfBirth;
    private String idType;
    private String idNUmber;
}
