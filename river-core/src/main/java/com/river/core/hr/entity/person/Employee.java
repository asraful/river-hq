package com.river.core.hr.entity.person;

import com.river.core.hr.entity.BaseEntity;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "employees_detail")
@NoArgsConstructor
public class Employee extends BaseEntity {
    private String firstName;
    private String lastName;
    private String middleName;
    private Date dateOfBirth;
    private String idType;
    private String idNUmber;
    private String gender;
}
