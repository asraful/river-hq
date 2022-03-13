package com.river.core.hr.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Employee extends BaseEntity {
    private String firstName;
    private String lastName;
    private String middleName;
    private Date dateOfBirth;
    private String idType;
    private String idNUmber;


}
